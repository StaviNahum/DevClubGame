class board {
    constructor(enemyArr, itemArr, player) {
      //this.height = Math.floor(Math.random() * 1000) + 100;
      //this.width = Math.floor(Math.random()*1000) + 100);
      this.generateMapFlag = 0;
      this.enemyArr = enemyArr;
      this.itemArr = itemArr;
      this.player = player;
      this.height = 10;
      this.width = 10;
      this.board = [this.height][this.width];
    }
    printBoard() {
      let line = "";
      for (let i = 0; i < this.height; i++){
          for (let j = 0; j < this.width; j++){
              if (this.board[i][j] !== this.player){
                line += "|_|";
              }
              else{
                line += "|P|";
              }
          }
          console.log(line);
          line = "";
      }
    }
    generateEnemys(){
      let indexX = Math.floor(Math.random() * (this.height));
      let indexY = Math.floor(Math.random() * (this.width));
      for (let i = 0; i < this.enemyArr.length; i++){
        while ((this.board[indexX][indexY] !== null) &&
          ((indexX !== 0)&& (indexY !== 0)) &&
           ((indexX !== this.height - 1) && (indexY !== this.width - 1))){
          indexX = Math.floor(Math.random() * (this.height));
          indexY = Math.floor(Math.random() * (this.width));
        }
        this.board[indexX][indexY] = this.enemyArr[i];
      }
    }
    generateItems(){
      let indexX = Math.floor(Math.random() * (this.height));
      let indexY = Math.floor(Math.random() * (this.width));
      for (let i = 0; i < this.itemArr.length; i++){
        while ((this.board[indexX][indexY] !== null) &&
          ((indexX !== 0)&& (indexY !== 0)) &&
           ((indexX !== this.height - 1) && (indexY !== this.width - 1))){
          indexX = Math.floor(Math.random() * (this.height));
          indexY = Math.floor(Math.random() * (this.width));
        }
        this.board[indexX][indexY] = this.itemArr[i];
      }
    }
    generateMap() {
      if (!this.generateMap) {
        this.board[0][0] = this.player;
        this.board = this.generateEnemys;
        this.board = this.generateItems;
        this.generateMapFlag = 1;
      } else {
        console.log("Board has already been generated.");
      }
    }
  
  }
  