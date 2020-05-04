import React from 'react';
import {StyleSheet,AsyncStorage, View, TextInput, TouchableOpacity,Text,Picker} from 'react-native';
export default class LoginScreen extends React.Component{
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
        color:'#000',
        user:null,
        name:'',
        email:'',
        contactNumber:'',
        preference:'ARTICLES'
      };

constructor(props)
{
    super(props)
}

saveUser = async () =>{
    const resp = await fetch('http://8444dd53.ngrok.io/api/users/add',
       {
         method:"POST",
         headers:{
           "Content-Type":"application/json",
           "Accept":"application/json"
         },
         body:JSON.stringify(
           {
            name:this.state.name,
            email:this.state.email,
            preferences:[this.state.preference],
            contactNumber:this.state.contactNumber
           }
         )
       })
       const user = await resp.json()
       AsyncStorage.setItem('user',JSON.stringify(user))
       this.props.navigation.navigate('Main');
       this.setState({...this.state,user:user})
    }
fetchUser = async () => {
    try {
      const value = await AsyncStorage.getItem('user');
      if (value !== null) {
        this.props.navigation.navigate('Main');
      }
    } catch (error) {
      // Error retrieving data
    }
  };
componentDidMount()
{
    this.fetchUser()
}
render()
{
    return(
      <View style={styles.root}>
        <Text style={{fontSize:14}}>
          We are glad that you came to the right place for support.
        </Text>
        <Text style={styles.instructions}>
          Lets get to to know each other
        </Text>
        <TextInput
            style={{ height: 40 }}
            placeholder="May I know your name: "
            onChangeText={text => this.setState({ name:text })}
            value={this.state.name}
          />
        <TextInput
            style={{ height: 40 }}
            placeholder="Let's get your email: "
            onChangeText={text => this.setState({ email:text })}
            value={this.state.email}
          />
        <TextInput
            style={{ height: 40 }}
            placeholder="Enter someones number who cares about you: "
            onChangeText={text => this.setState({ contactNumber:text })}
            value={this.state.contactNumber}
          />
          <Text style={{ color: '#888',fontSize: 15}}>
             What type of content do you like the most ?
          </Text>
          <Picker
            mode={"dropdown"}
            selectedValue={this.state.preference}
            style={{height: 50, width: 200}}
            onValueChange={(itemValue, itemIndex) =>
            this.setState({preference: itemValue})
          }>
          <Picker.Item label="Articles" value="ARTICLES" />
          <Picker.Item label="Videos" value="VIDEOS" />
          <Picker.Item label="Music" value="MUSIC" />
          </Picker>
        <TouchableOpacity
          onPress={this.saveUser}
          style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Let's get being positive</Text>
        </TouchableOpacity>
      </View>
    )
}
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    root:{
      display:"flex",
      flexGrow:1,
      alignContent:"center",
      alignItems:"center",
      padding:5,
      flexWrap:"wrap"
    },
    instructions: {
      color: '#888',
      fontSize: 18,
      marginHorizontal: 15,
      marginBottom: 50,
    },
    saveButton: {
      borderWidth: 1,
      borderColor: '#007BFF',
      backgroundColor: '#007BFF',
      padding: 15,
      margin: 5
    },
    saveButtonText: {
      color: '#FFFFFF',
      fontSize: 20,
      textAlign: 'center'
    }
  });