import React, { Component } from 'react';
import { View, Text,Button} from 'react-native';

export default class App extends Component {
displayAlert(){
  alert('your component has been acitvated')
}
  render() {
    return (
      <View style={{ marginTop: 200 ,height:100,width:200,marginLeft:80}}>
      <Button title="Alert!" color="purple" onPress={this.displayAlert}/>
        <Text style= {{backgroundColor:"lightblue", textAlign:"center",fontSize:20,marginTop:40}}>Click on the button</Text>
      </View>
    );
  }
}
