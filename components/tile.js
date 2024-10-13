import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';


const Tile = props => {
  return (
    <View {...props} style={styles.container}>
      <TouchableOpacity 
        style={styles.tile} 
        disabled={(props.board.status !== 'inProgress')}
        onPress={() => {
          let newTiles = props.board.makeMark(props.x, props.y).slice();
          props.setTiles(newTiles);
          console.log('------------newTiles ', newTiles);
          }}
        >
        <Text>{props?.mark}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 2, // Border between the tiles
    borderColor: '#000', // Tile border color
  },
  tile: {
    width: 100, // Set width for each tile
    height: 100, // Set height for each tile
    justifyContent: 'center', // Center the tile content vertically
    alignItems: 'center', // Center the tile content horizontally
    backgroundColor: 'pink'
  },
  mark: {
    fontSize: 40, // Large font size for the X and O marks
    fontWeight: 'bold', // Make the X and O bold
  },
});


export default Tile; 