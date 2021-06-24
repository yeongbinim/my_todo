import React from 'react';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {AntDesign} from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ListItem({name, isComplete, changeComplete, deleteItem}) {
  return (
    <View style={styles.listItemBox}>
		<View style={styles.makeRow}>
			<TouchableOpacity onPress={changeComplete}>
				<AntDesign name={isComplete ? "checkcircle" : "frowno"} size={20} style={styles.checkMargin}/>
			</TouchableOpacity>
			<Text style={isComplete? styles.itemComplete : styles.item}>{name}</Text>
		</View>
		<TouchableOpacity onPress={deleteItem}>
			<AntDesign name="close" size={20} />
		</TouchableOpacity>
    </View>
  );
}

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
	listItemBox:{
		borderBottomWidth : 1,
		padding:5,
		marginTop:10,
		width: width - 60,
		flexDirection:'row',
		alignItems:'center',
		justifyContent:'space-between',
	},
	item:{
		fontSize:20,
		fontWeight:"bold",
	},
	itemComplete:{
		fontSize:20,
		fontWeight:"bold",
		textDecorationLine:"line-through",
	},
	makeRow:{
		flexDirection:"row",
	},
	checkMargin:{
		marginRight:10,
	}
})