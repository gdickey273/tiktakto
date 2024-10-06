import Board from '../js/board';
import Mark from '../js/mark';

describe('Creating tiles', () => {
  let board;
  beforeEach(() => {
    board = new Board();
  });
  test('Should create tiles', () => {

    expect(board.tiles.length).toBe(3);
    for (let i = 0; i < 3; i++) {
      expect(board.tiles[i].length).toBe(3);
    }
  })
})

describe('Making the first move', () => {
  let board = new Board();
  test('Should be X\'s turn', () => {
    expect(board.pXTurn).toBe(true);
  })

  test('Should update x,y with new X mark', () => {
    board.makeMark(1, 1);
    expect(board.tiles[1][1].value).toBe('X')
  })

  test('Should be O\'s turn', () => {
    expect(board.pXTurn).toBe(false);
  })
})

describe('Attempting a mark in an occupied tile', () => {
  let board = new Board();
  board.tiles[1][1] = new Mark(1, 1, 'X');
  board.pXTurn = false;

  test('pXTurn value and center tile value should be unchanged', () => {
    board.makeMark(1, 1, 'O');
    expect(board.pXTurn).toBe(false);
    expect(board.tiles[1][1].value).toBe('X');
  })
})

describe('Making the second move', () => {
  let board = new Board();
  board.tiles[1][1] = new Mark(1, 1, 'X');
  board.pXTurn = false;

  test('pxTurn should be false and tiles[0][0].value should be "O"', () => {
    board.makeMark(0, 0);
    expect(board.pXTurn).toBe(true);
    expect(board.tiles[0][0].value).toBe('O');
  })
})

describe('Checking the win condition X', () => {
  let board = new Board();
  board.tiles[0][0] = new Mark(0, 0, 'X');
  board.tiles[0][1] = new Mark(0, 1, 'X');
  board.markCount = 4;

  test('Marking tiles[0][2] should result in an X win', () => {
    board.makeMark(0, 2);
    expect(board.status).toBe('pXWins');
    expect(board.win).toEqual([{x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2}])
  })
})

describe('Check no one won but move limit not reached, play continue ', () => {
  let board = new Board();
  board.tiles[1][1] = new Mark(1, 1, 'X');
  board.tiles[0][0] = new Mark(0, 0, 'O');

  test('Marking tile[2][2] should result in no one\'s win, no one\'s tie, game continues', () => {
    board.makeMark(2, 2);
    expect(board.status).toBe('inProgress');
  })
})

describe('Checking win condition O', () => {
  let board = new Board();
  board.makeMark(1,1); // X
  board.makeMark(0,2); // O
  board.makeMark(0,0); // X
  board.makeMark(1,2); // O
  board.makeMark(2,0); // X
  test('Marking tile[2][2] should result in an O win', () => {
    board.makeMark(2,2); // O
    expect(board.status).toBe('pOWins');
    expect(board.win).toEqual([{x: 0, y: 2}, {x: 1, y: 2}, {x: 2, y: 2}])
  })
})

describe('Tie game', () => {
  let board = new Board();
  board.makeMark(0,0);
  board.makeMark(1,1);
  board.makeMark(0,2);
  board.makeMark(0,1);
  board.makeMark(2,1);
  board.makeMark(1,0);
  board.makeMark(1,2);
  board.makeMark(2,2);
  test('Marking tile[2,0] should result in a tie', () => {
    board.makeMark(2,0);
    expect(board.status).toBe('tie');
  })
  
})

