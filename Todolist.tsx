import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Button, CheckBox, Container, Content, Header, Icon, Item, List, ListItem, Text ,  } from 'native-base';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Todolist(props:any) {

const updateCheckbox = (id: number)=> {

    const updatedList = props.todolist.map((item: any)=>{

        if(item.id == id ){
            return { ...item , completed: !item.completed
            }
        }

        return item
    })

    props.setTodolist(updatedList);


    
    


    
    }

    const deleteItem = (id: number) => {


        const newupdatedList = props.todolist.filter((item: any)=>{

            return item.id != id ;
    //         if(item.id == id ){
    //             return false
                
    //         }
    // else {
    //         return true }
        })
        props.setTodolist(newupdatedList);


    }





    return(
        <List>
            {
                props.todolist.map((item:any)=>(
                    <ListItem key={item.id}>
                        <Text style={{flex:1}}>{item.id}.</Text>
                        <View style={{flex:1}}>
                        <CheckBox onPress={()=> 
                        updateCheckbox(item.id)
                        }  checked={item.completed} />
 
                        </View>
                        <Text style={{flex:5}} >{item.title}</Text>
                        <Icon onPress={()=>
                            deleteItem(item.id)
                        }
                            style={{flex:1}} name="trash"></Icon>
                    </ListItem>

                )
                )
            }


        </List>
        )


}