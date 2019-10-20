import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function DetailedPlant() {
  return (
    <View style={styles.container}>
      <View style={{height: 80, backgroundColor: '#8e44ad', alignItems: 'center', justifyContent: 'flex-end'}}>
        <Text style={{ color: 'white', fontSize: 24, marginBottom: 12}}>
          Bloco 5 - ICMC
        </Text>
      </View>
      <ScrollView style={{flex:1}}>
        <View style={{backgroundColor: '#9b59b6'}}>
        <Text style={{fontSize: 24, margin: 20, color: 'white'}}>Planta Detalhada - Sala 5001</Text>
        </View>
      </ScrollView>
    </View>
  );
}