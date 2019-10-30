import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

export default function Materials(props) {
  const materials = {
    'Sala 5-101': [
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
    ],
    'Sala 5-102': [
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
    ],
    'Sala 5-103': [
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
    ],
    'Sala 5-104': [
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
    ],
    'Corredor 1': [
      {
        name: 'Piso de Borracha',
        quantity: '125m²',
        status: 'Instalado'
      }
    ],
    'Corredor 2': [
      {
        name: 'Piso de Borracha',
        quantity: '125m²',
        status: 'Instalado'
      }
    ],
    'Corredor 3': [
      {
        name: 'Piso de Borracha',
        quantity: '125m²',
        status: 'Instalado'
      }
    ]
  };

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>{props.navigation.getParam('plant')} - Lista de Materiais</Text>
      </View>
      <ScrollView>
        {materials[props.navigation.getParam('plant')].map((material, index) => {
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
