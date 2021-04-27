import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Button, Container, Content, Header, Text ,  } from 'native-base';
import Todolist from './Todolist';
// import { Header } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [isReady , setisReady] = useState(false);
  const [todolist , setTodolist] = useState([
    {
    id:1,
    title: "first item",
    completed : false
  },
  {
    id:2,
    title: "second item",
    completed : false
  }
])

  useEffect(() => {

    async() => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    
  }
  setisReady(true)
  },[])


  if(!isReady)
  return(
    <Text>Loading....</Text>

  )

  return (
    <Container>
      <Header>
        <Body style={{alignItems:'center'}}>
          <Text style={{color:'white'}}>Todo Native App</Text>
        </Body>
      </Header>
      <Content>
        <Text>Hello From APp</Text>
        <Button rounded full style={{backgroundColor:'green' , marginHorizontal:30 , marginBottom:10}}><Text>Add Todo</Text></Button>
        <Todolist todolist={todolist}/>
      </Content>

    </Container>
  
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
