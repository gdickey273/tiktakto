import Mark from "./mark";

export default class Board {
  constructor() {
    this.tiles = this.createEmptyTiles();
    this.pXTurn = true;
    this.status = 'inProgress'
    this.markCount = 0;
    this.win = undefined;
  }

  createEmptyTiles() {
    let tiles = [];
    for (let i = 0; i < 3; i++) {
      tiles[i] = [];
      for (let j = 0; j < 3; j++) {
        tiles[i][j] = undefined;
      }
    }
    return tiles;
  }

  checkWin() {
    if (this.markCount > 4) {
      const playerValue = this.pXTurn ? 'X' : 'O';
      const winConditions = [
        // colums
        [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }], // Col 1
        [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }], // Col 2
        [{ x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }], // Col 3

        // rows
        [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 2, y: 0 }], // row 1
        [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }], // row 2
        [{ x: 0, y: 2 }, { x: 1, y: 2 }, { x: 2, y: 2 }], // row 3

        // Diagonals
        [{ x: 0, y: 2 }, { x: 1, y: 1 }, { x: 2, y: 0 }],  // Diagonal 2
        [{ x: 0, y: 0 }, { x: 1, y: 1 }, { x: 2, y: 2 }] // Diagonal 1
        
      ];

        for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j++) {
            if (this.tiles[i][j]?.value != playerValue) {
              let k = 0;
              while(k < winConditions.length) {
                let lossIndex = winConditions[k].findIndex(el => el.x === i && el.y === j);
                if (lossIndex > -1) {
                  let nixed = winConditions.splice(k, 1);
                } else k++;
              }
              winConditions.forEach((element, index) => {
                
              })
            }
          }
        }

      if (winConditions.length > 0) {
        this.status = `p${playerValue}Wins`;
        this.win = winConditions[0];
      } else if (this.markCount === 9) {
        this.status = 'tie';
      }
    }
  }

  makeMark(x, y) {
    if (this.tiles[x][y] !== undefined) {
      return
    } else {
      this.tiles[x][y] = new Mark(x, y, this.pXTurn ? 'X' : 'O');
      this.markCount++;
      this.checkWin();
      this.pXTurn = !this.pXTurn;
    }
  }
}