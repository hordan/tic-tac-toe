class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.gameField = [];
        for(var i = 0; i < 3; i++){
          this.gameField[i] = [];
          for(var j = 0; j < 3; j++){
            this.gameField[i][j] = null;
          }
        }
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if(this.gameField[rowIndex][columnIndex] === null){
          this.gameField[rowIndex][columnIndex] = this.currentSymbol;
          if(this.currentSymbol === 'x') {
            this.currentSymbol = 'o';
          } else {
            this.currentSymbol = 'x';
          }
        }
    }

    isFinished() {
        if((this.getWinner() !== null) || (this.isDraw() === true)){
          return true;
        }

        return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
          if((this.gameField[i][0] === this.gameField[i][1]) && (this.gameField[i][1] === this.gameField[i][2]) && (this.gameField[i][0] !== null))
          {
            return this.gameField[i][0];
          }
        }

        for (let i = 0; i < 3; i++) {
          if((this.gameField[0][i] === this.gameField[1][i]) && (this.gameField[1][i] === this.gameField[2][i]) && (this.gameField[0][i] !== null))
          {
            return this.gameField[0][i];
          }
        }

        if((this.gameField[0][0] === this.gameField[1][1]) && (this.gameField[1][1] === this.gameField[2][2]) && (this.gameField[0][0] !== null))
        {
          return this.gameField[0][0];
        }

        if((this.gameField[0][2] === this.gameField[1][1]) && (this.gameField[1][1] === this.gameField[2][0]) && (this.gameField[0][2] !== null))
        {
          return this.gameField[0][2];
        }

        return null;
    }

    noMoreTurns() {
      for (var i = 0; i < 3; i++) {
          for (var j = 0; j < 3; j++) {
            if (this.gameField[i][j] === null ) {
              return false;
            }
          }
        }

        return true;
    }

    isDraw() {
        if((this.noMoreTurns()) && (this.getWinner() === null)){
          return true;
        }

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
