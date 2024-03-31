import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function LoopBoard() {
    
    const OuterloopChess = () => {
        let rows = [];

        for (let j = 1; j < 9; j++) {
            rows.push(
                <View key={j} style={styles.row}>
                    {loopChess(j)}
                </View>
            );
        }
    
        return rows;
    };

    const loopChess = (j) => {
        let squares = [];

        for (let i = 1; i < 9; i++) {
            if (i % 2 === 0 && j % 2 === 0) {
                squares.push(<View key={i} style={[styles.square, { backgroundColor: 'black' }]} />);
            } else if (i % 2 === 0 && j % 2 !== 0) {
                squares.push(<View key={i} style={[styles.square, { backgroundColor: 'white' }]} />);
            } else if (i % 2 !== 0 && j % 2 === 0) {
                squares.push(<View key={i} style={[styles.square, { backgroundColor: 'white' }]} />);
            } else {
                squares.push(<View key={i} style={[styles.square, { backgroundColor: 'black' }]} />);
            }
        }
    
        return squares;
    };

    return (
        <View style={styles.container}>
            {OuterloopChess()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        borderWidth: 5,
        borderColor: 'brown',
        marginTop:100,
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
