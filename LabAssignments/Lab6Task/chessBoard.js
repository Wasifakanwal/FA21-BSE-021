import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Board() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
      </View>
      <View style={styles.row}>
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
        <View style={[styles.square, { backgroundColor: 'black' }]} />
        <View style={[styles.square, { backgroundColor: 'white' }]} />
      </View>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    borderWidth: 5,
    borderColor: 'brown',
  },
  row: {
    flexDirection: 'row',
  },
  square: {
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '12.5%',
  },
});
