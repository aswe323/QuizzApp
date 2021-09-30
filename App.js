import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const cardTitleMaxLength = 14;
const cardInfoMaxLength = 20;
const cardsPerRow = 2;
const styles = StyleSheet.create({
  container: {
  },
  grid: {
  },
  row: {
    flexDirection: 'row',
  },
  cardTitle: {
  },
  card: {
    flexWrap: 'wrap',
  },
  cardText:{
    textAlign: 'center',
  },
  cardImage: {
    resizeMode: 'cover'
  }
});

function cardGrid (cards)
{
 var returned;
 var workingRow;
 var counter = 0;
  for (const card in cards) {
    if (Object.hasOwnProperty.call(cards, card)) {
      if(counter == cardsPerRow){
        returned = <View style={styles.row}>{workingRow} </View>
        workingRow = null;
      }else{

      const currentCard = cards[card];
      workingRow += currentCard;
      counter +=1;
      }
    }
  }
  
  return(<View stule={styles.grid}> {returned} </View>);
}

function card(title,image,text){
  if(title.length < cardTitleMaxLength) title = " ".repeat((cardTitleMaxLength - title.length) / 2) + title + " ".repeat((cardTitleMaxLength - title.length)/2);
  if(text.length < cardInfoMaxLength) text = " ".repeat((cardInfoMaxLength - text.length)/2) + text + " ".repeat((cardInfoMaxLength - text.length)/2);
  var workingTitle = title.substring(0,cardTitleMaxLength);
  var workingInfo = text.substring(0,cardInfoMaxLength);

  return(
    <View style={styles.card}>
      <Card style={styles.card}>
      <Card.Title  style={styles.cardTitle }>{workingTitle}</Card.Title>
      <Card.Divider/>
      <Card.Image style={styles.cardImage} source={{uri:image}}>
        </Card.Image>
      <Text style={styles.cardText}>{workingInfo}</Text>
      </Card>
    </View>
  );
}




const shower = () =>{
  return(
    <View style={styles.row}>
    {card("animal","https://cdn.cnn.com/cnnnext/dam/assets/201030094143-stock-rhodesian-ridgeback-super-tease.jpg","another cutie! look!")}
    {card("an animal that","https://kerenagam.co.il/wp-content/uploads/2021/06/Thinking-of-getting-a-cat.png","another cutie! look! this should not be visible")}
    </View>
  );
}


export default shower;