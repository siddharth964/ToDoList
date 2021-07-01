import { Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Keyboard } from "react-native";
import React, {useState} from 'react';
import Task from "./Task";

export default function TodayTask(){
    const [task, setTask] = useState("");
    const [taskItems, setTaskItems] = useState([]);

    const handleAddTask = () => {
        //Keyboard.dismiss();
        setTaskItems([...taskItems, task]);
        setTask("");
    }

    const removeTask = (index) =>{
        let itemsCopy = [...taskItems];
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy);
    }

    return (
        <View style={styles.ScreenWrapper}>
            <View style={styles.TasksWrapper}>
                <Text style={styles.HeadingText}>Today's Tasks</Text>
                <View style={styles.Tasks}>
                    {
                        taskItems.map((item, index)=>
                        {
                            return (
                                <TouchableOpacity key ={index} onPress={() => removeTask(index)}>
                                    <Task key={index} text={item}/>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>

            <KeyboardAvoidingView 
            behaviour={Platform.OS === "ios"? "padding":"height"}
            style={styles.WritTaskWrapper}>
                <TextInput style={styles.Input} value={task} placeholder={"Describe your task..."} onChangeText={text=>setTask(text)}/>
                <TouchableOpacity onPress={() => handleAddTask()}>
                    <View style={styles.AddWrapper}>
                        <Text style={styles.AddText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}
const styles = StyleSheet.create({
    HeadingText: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    TasksWrapper:{
        paddingTop: 80,
        paddingHorizontal: 20
    },
    Tasks:{
        
    },
    ScreenWrapper:{
        flex: 1
    },
    WritTaskWrapper:{
        position: 'absolute',
        bottom: 40,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    Input:{
        width: '80%',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingVertical: 15,
        paddingHorizontal: 15,
        fontSize: 17
    },
    AddWrapper:{
        backgroundColor: 'lightblue',
        borderRadius: 50,
        width: 55,
        height: 50,
        marginRight: 5,
        marginLeft: 7,
    },
    AddText:{
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 40, 
    },
})