class Controls {
  constructor(type){
    this.forward = false;
    this.leftward = false;
    this.rightward = false;
    this.backward = false;

    switch(type){
      case "KEYS":
        this.#addKeyboardListeners();
        break;
      case "NPC":
        this.forward = true;
        break;
    }
    
  }

  #addKeyboardListeners(){
    document.onkeydown = (e) => {
      switch(e.key){
        case "ArrowLeft":
          this.leftward = true;
          break;
        case "ArrowRight":
          this.rightward = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.backward = true;
          break;
      }
      
    }
    document.onkeyup = (e) => {
      switch(e.key){
        case "ArrowLeft":
          this.leftward = false;
          break;
        case "ArrowRight":
          this.rightward = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.backward =false;
          break;
      }
      
    }
  }
}