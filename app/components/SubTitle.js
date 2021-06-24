import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SubTitle({title}) {
  return (
    <View>
      <Text style={styles.subTitleText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
	subTitleText : {
		fontSize: 20,
		fontWeight: 'bold',
		color : "#3f4e66",
	}
})