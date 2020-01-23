import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GiftedChat,Bubble } from "react-native-gifted-chat";
export default class App extends React.Component {
  state = {
    messages: [
      {
        _id:1,
        user:{
          _id:1
        },
        text: "Please Share your thoughts here",
        createdAt: new Date()
      }
    ],
    color:''
  };
hsl_col_perc = (percent, start, end) => {
    var a = percent / 100,
        b = (end - start) * a,
        c = b + start;
  
    // Return a CSS HSL string
    return 'hsl('+c+', 100%, 50%)';
 }
sendMessage= async (messages)=>{
  const resp = await fetch('http://34.93.40.129/api/chat/analyze/',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Accept":"application/json"
    },
    body:JSON.stringify({
      source:messages[0].text
    })
  })
  const dat = await resp.json()
  const data=JSON.parse(JSON.stringify({...messages[0]}))
  data.createdAt=new Date()
  data.createdAt.setSeconds(data.createdAt.getSeconds()+1)
  data.user._id=2
  data._id=btoa(JSON.stringify(data))
  data.text=JSON.stringify(dat)
  this.setState({messages:[data,messages[0],...this.state.messages],color:this.hsl_col_perc(Math.ceil(((1.0+dat.compound)/2.0)*100),0,120)})
}
renderBubble = props => {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          backgroundColor: this.state.color,
        },
      }}
    />
  )
 }
render() {
    return (
      <View style={styles.container}>
        <GiftedChat 
        messages={this.state.messages}
        user={{
          _id:1
        }} 
        renderBubble={this.renderBubble}
        scrollToBottom
        onSend={this.sendMessage}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});