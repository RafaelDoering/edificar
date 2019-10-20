import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

import NativeButton from '../../components/NativeButton';

export default function PlantOptions(props) {
  const options = [
    {
      text: 'Planta Detalhada',
      goTo: 'DetailedPlant'
    },
    {
      text: 'Lista de Materiais',
      goTo: 'Materials'
    },
    {
      text: 'Cronograma da Obra',
      goTo: 'Schedule'
    },
    {
      text: 'Galeria de Fotos',
      goTo: 'Gallery'
    }
  ];

  function goToOption(option) {
    props.navigation.navigate(option);
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Sala 5001</Text>
      </View>
      <ScrollView>
        {options.map((option, index) => {
          return (
            <NativeButton onPress={() => goToOption(option.goTo)} key={index}>
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{option.text}</Text>
              </View>
            </NativeButton>
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
