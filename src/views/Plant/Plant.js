import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

import NativeButton from '../../components/NativeButton';

export default function Plant(props) {
  function goToOptions() {
    props.navigation.navigate('PlantOptions');
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Sala 5001</Text>
      </View>
      <NativeButton onPress={goToOptions}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Opções</Text>
        </View>
      </NativeButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  subHeaderContainer: {
    backgroundColor: Colors.primary
  },
  subHeaderText: {
    fontSize: 20,
    margin: 20,
    color: Colors.white
  },
  itemContainer: {
    backgroundColor: Colors.white,
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: Colors.gray
  },
  itemText: {
    fontSize: 18,
    margin: 20
  }
});
