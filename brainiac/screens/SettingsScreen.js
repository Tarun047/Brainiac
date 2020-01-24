import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import { StyleSheet,Button, AsyncStorage,View , TouchableOpacity,Text} from 'react-native';

export default function SettingsScreen(props) {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  const logoutUser = async ()=>
  {
    AsyncStorage.removeItem('user')
    props.navigation.navigate('LogIn')
  }
  return(
    <View style={styles.root}>
      <TouchableOpacity
        onPress={logoutUser}
        style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
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
SettingsScreen.navigationOptions = {
  title: 'app.json',
};
