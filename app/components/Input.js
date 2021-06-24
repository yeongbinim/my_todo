import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';

export default function Input({value, changeText, addTodoItem}) {
  return (
      <TextInput
		value={value}
		onChangeText={changeText}
		onEndEditing={addTodoItem}
		placeholder={"할 일을 입력해주세요"} 
		maxLength={30}
		style={styles.input}/>
  );
}

const styles = StyleSheet.create({
	input : {
		fontSize: 17,
		fontWeight: 'bold',
		marginTop:10,
		marginBottom:20,
		paddingBottom:3,
		borderBottomWidth:1,
	}
})