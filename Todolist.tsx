import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Button, CheckBox, Container, Content, Header, Icon, List, ListItem, Text ,  } from 'native-base';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function Todolist(props:any) {

    return(
        <List>
            {
                props.todolist.map((item:any)=>(
                    <ListItem key={item.id}>
                        <Text style={{flex:1}}>{item.id}.</Text>
                        <View style={{flex:1}}>
                        <CheckBox  checked={true} />
 
                        </View>
                        <Text style={{flex:5}} >{item.title}</Text>
                        <Icon style={{flex:1}} name="trash"></Icon>
                    </ListItem>

                )
                )
            }


        </List>
        )


}