import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Button, CheckBox, Container, Content, Header, Icon, List, ListItem, Text ,  } from 'native-base';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Todolist(props:any) {

    props.todolist
    return(
        <List>
            {
                props.todolist.map((item:any)=>(
                    <ListItem>
                        <CheckBox checked={true} />
                        <Text>{item.title}</Text>
                        <Icon name="trash"></Icon>
                    </ListItem>

                )
                )
            }


        </List>
        )


}