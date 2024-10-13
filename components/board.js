import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useState, useEffect } from 'react';
import Tile from './tile';


const BoardComp = props => {
  const [tiles, setTiles] = useState(props.board.tiles)
  const [gameStatus, setGameStatus] = useState(props.board.status);
  const [pXTurn, setPXTurn] = useState(props.board.pXTurn);

  useEffect(() => {
    setTiles(props.board.tiles)
  }, [props.board.tiles])

  useEffect(() => {
    setGameStatus(props.board.status);
    setPXTurn(props.board.pXTurn);
  }, [tiles])

  console.log("-----------------props.board.tiles ", props.board.tiles);
  console.log('------------------tiles: ', tiles)
  return (
    <View style={styles.board}>
      <Text>{(gameStatus === 'inProgress') ? (pXTurn) ? 'Player X\'s Turn!' : 'Player O\'s Turn!' : `${gameStatus}!`}</Text>
      {tiles ? 
      <View style={styles.row}>
        
          {tiles.map((row, key) => {
            console.log('----------row: ', row)
            return <View style={styles.col} key={`row${key}`}>
            {row.map((tile) => {
              return <Tile 
                key={`tile x:${tile.x} y: ${tile.y}`} 
                board={props.board} 
                setTiles={setTiles} 
                setGameStatus={setGameStatus}
                setPXTurn={setPXTurn}
                mark={tile?.value} 
                x={tile.x} 
                y={tile.y}>
                </Tile>
            })}
            </View>
          })}
        
      </View>
      : <></> }
    </View>
  )
}

const styles = StyleSheet.create({
  board: {
    justifyContent: 'center', // Centers the rows vertically
    alignItems: 'center', // Centers the rows horizontally
  },
  row: {
    flexDirection: 'row', // Align the columns horizontally for each row
  },
});


export default BoardComp; 