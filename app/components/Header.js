import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>MyTodoApp</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	headerContainer : {
		backgroundColor:'#3f4e66',
		paddingTop:50,
		paddingBottom:10,
		marginBottom: 70,
	},
	headerText:{
		textAlign:'center',
		fontSize: 25,
		fontWeight: 'bold',
		color: '#ffffff',
	}
})