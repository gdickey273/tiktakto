import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BoardComp from './components/board';
import Board from './js/board';

export default function App() {
  return (
    <View style={styles.container}>
      <BoardComp board={new Board()}></BoardComp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
