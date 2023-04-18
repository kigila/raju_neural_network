class Road {
  constructor(x, width, laneCount=3){
    this.x = x;
    this.width = width;
    this.laneCount = laneCount;
    this.leftside = x - width/2;
    this.rightside = x + width/2;
    const infinity = 1000000;
    this.top = -infinity;
    this.bottom = infinity;

    const topLeft = {x: this.leftside, y: this.top};
    const topRight = {x: this.rightside, y: this.top};
    const bottomLeft = {x: this.leftside, y: this.bottom};
    const bottomRight = {x: this.rightside, y: this.bottom};

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight]
    ];
  }
  getLaneCenter(laneIndex){
    const laneWidth = this.width / this.laneCount;
    return this.leftside + laneWidth/2 + 
      Math.min(laneIndex, this.laneCount - 1 ) * laneWidth;
  }
  draw(ctx){
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'white';

    for (let i = 1; i <= this.laneCount -1; i++){
      const x = lerp(
        this.leftside,
        this.rightside,
        i/this.laneCount
      );
     
      ctx.setLineDash([20, 20]);      
      ctx.beginPath();
      ctx.moveTo(x, this.top);
      ctx.lineTo(x, this.bottom);
      ctx.stroke();
    }
    ctx.setLineDash([]);
    this.borders.forEach(border => {
      ctx.beginPath();
      ctx.moveTo(border[0].x, border[0].y);
      ctx.lineTo(border[1].x, border[1].y);
      ctx.stroke();
    });    
  }
}
