class TicTacToe {
    constructor() {
        this.pole = [];
        for (var i = 0; i < 3; i++) {
            this.pole[i] = [];
            for (var j = 0; j < 3; j++) {
                this.pole[i][j] = null;
            }
        }
        this.symbol = 'x';
    }

    getCurrentPlayerSymbol() {
        return this.symbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.pole[rowIndex][columnIndex] === null) {
            this.pole[rowIndex][columnIndex] = this.symbol;
            if (this.symbol === 'o') {
                this.symbol = 'x';

            }
            if (this.symbol === 'x') {
                this.symbol = 'o';

            }
        }
    }

    isFinished() {
        if ((this.getWinner() !== null) || (this.isDraw() === true)) {
            return true;
        }
        return false;
    }

    getWinner() {
        for (let i = 0; i < 3; i++) {
            if ((this.pole[i][0] === this.pole[i][1]) &&( this.pole[i][1] === this.pole[i][2]) && (this.pole[i][0] !== null)) {
                return this.pole[i][0];
            }
        }

        for (let i = 0; i < 3; i++) {
            if ((this.pole[0][i] === this.pole[1][i] )&&(this.pole[1][i] === this.pole[2][i] )&&( this.pole[0][i] !== null )) {
                return this.pole[0][i];
            }
        }

        if ((this.pole[0][0] === this.pole[1][1]) &&( this.pole[1][1] === this.pole[2][2]) &&( this.pole[0][0] !== null )) {
            return this.pole[0][0];
        }

        if ((this.pole[0][2] === this.pole[1][1] )&& (this.pole[1][1] === this.pole[2][0] )&&( this.pole[0][2] !== null ) ) {
            return pole[0][2];
        }
        return null;

    }

    noMoreTurns() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (this.pole[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    isDraw() {
        if ((this.noMoreTurns()) && (this.getWinner() === null)) {
            return true;
        }

        return false;
    }

    getFieldValue(rowIndex, colIndex) {
        return this.pole[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
