import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform
} from 'react-native';

import Colors from '../constants/Colors';

export default function Home(props) {
  let TouchableComponent = TouchableNativeFeedback;
  if (Platform.OS === 'ios') {
    TouchableComponent = TouchableHighlight;
  }

  function goToPlant() {
    props.navigation.navigate('Plant');
  }

  return (
    <View style={styles.container}>
      <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Projetos</Text>
      </View>
      <ScrollView>
        <TouchableComponent onPress={goToPlant}>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Bloco 5</Text>
          </View>
        </TouchableComponent>
      </ScrollView>
      <View style={styles.floatButtonContainer}>
        <View style={styles.floatButton}>
          <Text style={styles.floatButtonText}>+</Text>
        </View>
      </View>
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
  },
  floatButtonContainer: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    flex: 1
  },
  floatButton: {
    backgroundColor: Colors.primary,
    borderRadius: 1000,
    margin: 20,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  floatButtonText: {
    color: Colors.white,
    fontSize: 32
  }
});
