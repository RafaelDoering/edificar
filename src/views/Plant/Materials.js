import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ListaDeMateriais() {
  return (
    <View style={styles.container}>
      <View style={{height: 80, backgroundColor: '#8e44ad', alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{ color: 'white', fontSize: 24, marginBottom: 12}}>
          Bloco 5 - ICMC
        </Text>
      </View>
      <ScrollView style={{flex:1}}>
        <View style={{backgroundColor: '#9b59b6'}}>
        <Text style={{fontSize: 24, margin: 20, color: 'white'}}>Lista de Materiais - Sala 5001</Text>
        </View>
        <View style={{backgroundColor: '#ecf0f1', flex: 1, borderBottomWidth: 1, borderBottomColor: '#7f8c8d'}}>
          <View>
            <Text style={{fontSize: 20, margin: 20}}>Porta de Madeira 2x2</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>1 unidade</Text>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>Instalado</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#ecf0f1', flex: 1, borderBottomWidth: 1, borderBottomColor: '#7f8c8d'}}>
          <View>
            <Text style={{fontSize: 20, margin: 20}}>Piso de Borracha</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>125m²</Text>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>Instalado</Text>
          </View>
        </View>
        <View style={{backgroundColor: '#ecf0f1', flex: 1, borderBottomWidth: 1, borderBottomColor: '#7f8c8d'}}>
          <View>
            <Text style={{fontSize: 20, margin: 20}}>Carteira</Text>
          </View>
          <View style={{flexDirection: 'row', marginBottom: 20}}>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>50 unidades</Text>
          <Text style={{fontSize: 20, marginHorizontal: 20}}>Não Instalado</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}