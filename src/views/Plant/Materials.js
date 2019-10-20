import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

export default function Materials() {
  const materials = [
    {
      name: 'Porta de Madeira 2x2',
      quantity: '1 unidade',
      status: 'Instalado'
    },
    {
      name: 'Piso de Borracha',
      quantity: '125m²',
      status: 'Instalado'
    },
    {
      name: 'Carteira',
      quantity: '50 unidades',
      status: 'Não Instalado'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Sala 5001 - Lista de Materiais</Text>
      </View>
      <ScrollView>
        {materials.map((material, index) => {
          return (
            <View
              style={styles.itemContainer}
              key={index}
            >
              <View>
                <Text style={{ fontSize: 18, margin: 20 }}>
                  {material.name}
                </Text>
              </View>
              <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                <Text style={{ fontSize: 18, marginHorizontal: 20 }}>
                  {material.quantity}
                </Text>
                <Text style={{ fontSize: 18, marginHorizontal: 20 }}>
                  {material.status}
                </Text>
              </View>
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
  }
});
