// 1. Import
import React from 'react';
import {StyleSheet, Text, View, TextInput, Button, TouchableOpacity, Picker} from 'react-native'

//2. Create
class App extends React.Component{
  //State
  /**
   Digunakan untuk variabel yang dapat berubah
   */
  state = {
    //text: 'hello world',
    done:'OnProgress',
    todo:[] //menampung hasil inputText
  }
  //funtion untuk menambahkan hasil input ke array
  tambahTodo = () =>{
    //ambil nilai dari input text
    var newTodo ={
      text:this.state.text,
      done:this.state.done
    }
    //menampung data baru
    var arr = this.state.todo;
    arr.push(newTodo);
    //set velue too dan clear input
    this.setState({todo:arr, text:''})
  }

  //function untuk menampilkan hasil input ke array todo
  tampilTodos=()=>{
    return this.state.todo.map(t=>{
      return(
        <TouchableOpacity key={t.text} >
          <Text onPress={()=>this.hapusTodo(t)}>{t.text}</Text>
        </TouchableOpacity>
      );
    });
  }

  //function untuk menghapus todo
  hapusTodo =(t)=>{
    //dapatkan data
    var arr = this.state.todo
    //dapatkan index yang akan dihapus
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    //perbarui data todo
    this.setState({todo:arr});
  }
  //function untuk menampilkan hallo wordl pada state
  /*
  halo =() =>{
    alert(this.state.text)
  }
  */
  render(){
  return(
    <View style={styles.container} >
      <View style={styles.innerStyle}>
        <Text style={styles.textStyle}
              onPress={(this.halo)} >Todo App
        </Text>
        <TextInput  value={this.state.text}
                    onChangeText={(text)=>this.setState({text})}
                    style={styles.inputStyle} />
        <Picker
          selectedValue={this.state.done}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({done: itemValue})
          }>
          <Picker.Item label="OnProgress" value="OnProgress" />
          <Picker.Item label="Done" value="Done" />
        </Picker>
        
        <Button onPress={this.tambahTodo} title="Simpan Todo" />
        <View style={{marginTop:40, alignItem:'center', justifyContent:'center'}}>
            {this.tampilTodos()}
        </View>
      </View>
    </View>
  )
}}

//Props adalah komponen yang tidak dapat berubah
export default App;
const styles = StyleSheet.create({
  container:{
   flex:1,
   backgroundColor:"#fff",
   justifyContent:"center",
   alignItems:"center",
},
innerStyle:{
  fontSize:20,
},
textStyle:{
  fontSize:30,
},
inputStyle:{
  height:40,
  width:240,
  borderColor:'blue',
  borderWidth:1,
  marginBottom:2
}

})