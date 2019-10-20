import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

export default function Plant() {
  const options = [
    'Planta Detalhada',
    'Lista de Materiais',
    'Cronograma da Obra',
    'Galeria de Fotos'
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Sala 5001</Text>
      </View>
      <ScrollView>
        {options.map((option, index) => {
          return (
            <View style={styles.itemContainer} key={index}>
              <Text style={styles.itemText}>{option}</Text>
            </View>
          );
        })}
      </ScrollView>
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
