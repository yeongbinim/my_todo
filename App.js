import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import ListItem from './app/components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      inputValue:"",
      todos:[]
    };
  }
  componentDidMount(){
    this.getData();
  }
  storeData = async () => {
    try {
      const jsonValue = JSON.stringify(this.state);
      await AsyncStorage.setItem('@todo:state', jsonValue);
    } catch (e) {
      Alert.alert("saving error");
    }
  }
  
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@todo:state')
      this.setState(jsonValue != null ? JSON.parse(jsonValue) : null);
    } catch(e) {
      Alert.alert("load error");
    }
  }

  _makeTodoItem = ({item,index}) =>{
    return (
      <ListItem 
      key={index} 
      name={item.title}
      isComplete = {item.isComplete}
      changeComplete = {() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete;
        this.setState({todos:newTodo},this.storeData);
      }}
      deleteItem = {() =>{
        const newTodo = [...this.state.todos];
        newTodo.splice(index,1);
        this.setState({todos: newTodo},this.storeData);
      }}
      />
    )
  }
  _changeText = (value) => {
    this.setState({inputValue:value});
  }
  _addTodoItem = () => {
    if(this.state.inputValue !== ""){
      const prevTodo = this.state.todos;

      const newTodo = {title : this.state.inputValue, isComplete: false};
      this.setState({
        inputValue:'',
        todos : prevTodo.concat(newTodo)
      },this.storeData)
    }
  }
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.headerCenter}>
          <Header/>
        </View>
        <View style={styles.subTitlePosition}>
          <SubTitle title="해야 할 일"/>
          <Input 
            value={this.state.inputValue}
            changeText = {this._changeText}
            addTodoItem = {this._addTodoItem}/>
        </View>
        <View style={styles.subTitlePosition}>
          <SubTitle title="해야 할 일 목록"/>
          <FlatList
            data = {this.state.todos}
            renderItem = {this._makeTodoItem}
            keyExtractor = {(item, index) => { return `${index}`} }/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : "#d4d2e9",
  },
  headerCenter : {
  },
  subTitlePosition : {
    paddingLeft:30,
    paddingRight:30,
    marginBottom:30,
  }
})