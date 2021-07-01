import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Task = (props) => {
    return(
        <View style={styles.Task}>
            <View style={styles.ContentLeft}>
                <TouchableOpacity style={styles.Square}></TouchableOpacity>
                <Text style={styles.TaskText}>{props.text}</Text>
            </View>
            <View style={styles.Circle}>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Task:{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    ContentLeft:{
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    Square:{
        width: 24,
        height: 24,
        backgroundColor: 'blue',
        opacity: 0.1,
        borderRadius: 5,
        marginRight: 10
    },
    Circle:{
        width: 12,
        height: 12,
        borderColor: 'green',
        borderWidth: 1.5,
        borderRadius: 10
    },
    TaskText:{
        maxWidth: '80%'
    }
})

export default Task;