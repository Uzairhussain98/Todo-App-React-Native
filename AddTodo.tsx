import React, { useEffect, useState } from 'react';
import { Body, Button, Container, Content, Form, Header, Input, Item, Label, Text ,  } from 'native-base';

export default function AddTodo(props:any) {

    const [text , setText] = useState("");


    return(
        <Container>
      <Header>
        <Body style={{alignItems:'center'}}>
          <Text style={{color:'white'}}>Add Todo</Text>
        </Body>
      </Header>
      {/* <Text>Hello From Add TODO</Text> */}

      <Content>
          <Form style={{margin:30}}>
            <Item inlineLabel>
              <Input placeholder="Type Things Todo" onChangeText={setText} />
            </Item>
           <Button onPress={()=> {
               console.log("text added = ", {text});
               props.AddTodoitem(text)
               
           }} full success style={{marginHorizontal:30, marginTop:20}}><Text>Add </Text></Button>
          </Form>
        </Content> 

    </Container>

      
    )



}