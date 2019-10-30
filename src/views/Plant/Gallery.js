import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Colors from '../../constants/Colors';

export default function Gallery(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.subHeaderContainer}>
          <Text style={styles.subHeaderText}>
            {props.navigation.getParam('plant')} - Galeria
          </Text>
        </View>
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
});
