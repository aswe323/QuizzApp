import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  row: {
    flexDirection: 'row',
  },
  cardTitle: {
  },
  card: {
    flexWrap: 'wrap',
        flexShrink: 1,

  },
  cardText:{
    textAlign: 'center',
  },
  cardImage: {
    resizeMode: 'cover'
  }
});

function card(title,image,text){
  return(
    <View style={styles.card}>
      <Card style={styles.card}>
      <Card.Title  style={styles.cardTitle }>{title}</Card.Title>
      <Card.Divider/>
      <Card.Image style={styles.cardImage} source={{uri:image}}>
        </Card.Image>
      <Text style={styles.cardText}>{text}</Text>
      </Card>
    </View>
  );
}



const shower = () =>{
  return(
    <View style={styles.row}>
    {card("Animal","https://cdn.cnn.com/cnnnext/dam/assets/201030094143-stock-rhodesian-ridgeback-super-tease.jpg","what a cute Animal")}
    {card("an animal that meaos alot and then poops","https://kerenagam.co.il/wp-content/uploads/2021/06/Thinking-of-getting-a-cat.png","another cutie!")}
    </View>
  );
}


export default shower;