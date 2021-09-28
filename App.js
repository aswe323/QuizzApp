import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

function card(title,text,imageSource) {
    return(
    <View>
    <Card>
      <Card.Title>{title}</Card.Title>
      <Card.Divider/>
      <Card.Image source ={{uri:imageSource}}>
            <Card.FeaturedTitle>{text}</Card.FeaturedTitle>

      </Card.Image>
      <Card.Divider/>

    </Card>
    </View>
  );
}


const shower = () =>{
  return(
    <View >
    {card("Cat","what a cute cat","https://kerenagam.co.il/wp-content/uploads/2021/06/Thinking-of-getting-a-cat.png")}
    </View>
  );
}


export default shower;