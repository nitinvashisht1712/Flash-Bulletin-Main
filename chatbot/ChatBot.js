import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';
import {dialogflowConfig, DialogflowConfig} from '../env';
import { Card, Button } from 'react-native-elements';

const botAvatar = require('../assets/avatar.png')
const BOT = {
    _id : 2,
    name: 'MR.Bot',
    avatar : botAvatar
}
class ChatBot extends Component {
  state = {
      messages: [
      //   {
      //   _id:2, text:'My Name is Mr. Bot', createdAt: new Date(), user: BOT
      // },{
      //   _id:1, text:'Hello,', createdAt: new Date(), user: BOT
      // }
    ],
      
  }
  componentDidMount(){
      Dialogflow_V2.setConfiguration(
          dialogflowConfig.client_email,
          dialogflowConfig.private_key,
          Dialogflow_V2.LANG_ENGLISH_US,
          dialogflowConfig.project_id
      )
  }

handleGoogleResponse(result){
    let text  = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
}

sendBotResponse(text){
let msg;
if(text == 'travel'){
msg = {
  _id : this.state.messages.length + 1,
  text: 'Would you like to buy \n a plane ticket ?',
  image:'https://cdn.britannica.com/q:60/69/155469-131-14083F59/airplane-flight.jpg',
  createdAt : new Date() ,
  user : BOT,
}

} else if(text == 'Show Options'){
  msg = {
    _id : this.state.messages.length + 1,
    text:'Please choose your Destination',
    createdAt : new Date() ,
    user : BOT,
    isOptions : true,
    data: [{
      title: 'Thailand',
      image:'https://i.guim.co.uk/img/media/88773a96f3157f8cd7320b53dba62156c3440eac/0_0_5728_3436/master/5728.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=757da44a6e57a7f4a15de28f3e3a2f4b',
    },
    {
      title: 'USA',
      image:'data:image/jpeg;base64,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',
    },{
      title: 'Japan',
      image:'https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Japan.jpg?h=fcdfd899&itok=YWWi9dFQ',
    }]
  }
  
} else {
  msg = {
    _id : this.state.messages.length + 1,
    text,
    createdAt : new Date() ,
    user : BOT,
  }
}
   
    this.setState((previousState) => ({
        messages: GiftedChat.append(previousState.messages, [msg])
    }))
}

  onSend(messages = []) {
this.setState((previousState) => ({
    messages:GiftedChat.append(previousState.messages, messages)
}))
let message = messages[0].text;
Dialogflow_V2.requestQuery(
    message, 
    (result) => this.handleGoogleResponse(result),
    (error) => console.log(error)
)

  }
  onQuickReply(quickReply) {
    this.setState((previousState) => ({
        messages:GiftedChat.append(previousState.messages, quickReply)
    }))
    let message = quickReply[0].value;
    Dialogflow_V2.requestQuery(
        message, 
        (result) => this.handleGoogleResponse(result),
        (error) => console.log(error)
    )

  }
//   renderBubble = (props) => {
//      if(props.currentMessage.isOptions)
//     return (
// <ScrollView style = {{backgroundColor: '#fff'}}
// horizontal={true}>
// {props.currentMessage.data.map((item) => (
//   <Card key={item.title}>
//     <Card.Image style = {{width : 220, height : 110}}
//     resizeMode="cover"
//     source ={{uri: item.image}}>

//     </Card.Image>
//     <Card.Divider />
//     <Card.Title>{item.title}</Card.Title>
//     <Card.Divider/>
//     <Button title={"Choose"}
//     style={{height:35}}
//     onPress={() => 
//       this.sendBotResponse(item.title)
//     }
//     />

   
//   </Card>
// ))}

// </ScrollView>



//     );
//   };
  render() {
    return (
      <View style={{flex:1, backgroundColor:"#fff"}}>
        <GiftedChat messages = {this.state.messages} 
        onSend={(message) => this.onSend(message)}
        onQuickReply={(quickReply) => this.onQuickReply(quickReply)}
        renderBubble={this.renderBubble}
        user = {{_id:1}}/>
      </View>
    );
  }
}

export default ChatBot;
