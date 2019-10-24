import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import ResponsiveImage from 'react-native-responsive-image';

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
      {/* <NativeButton onPress={goToOptions}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Opções</Text>
        </View>
      </NativeButton> */}

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '37.5%' }}>
          <View style={{ width: '54%' }}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              source={require('../../../assets/5_104.png')}
              resizeMode='contain'
            />
          </View>
          <View style={{ width: '46%' }}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              source={require('../../../assets/5_102.png')}
              resizeMode='contain'
            />
          </View>
        </View>
        <View style={{ width: '100%', height: '6.25%' }}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            source={require('../../../assets/Corredor1.png')}
            resizeMode='contain'
          />
        </View>
        <View style={{ flexDirection: 'row', width: '100%', height: '50%' }}>
          <View style={{ width: '8.25%', height: '100%' }}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              source={require('../../../assets/Corredor2.png')}
              resizeMode='contain'
            />
          </View>
          <View style={{ width: '91.75%', height: '100%'}}>
            <View style={{ height: '25%', width: '100%' }}></View>
            <View style={{ flexDirection: 'row', width: '100%',  height: '75%' }}>
              <View style={{ width: '50%', height: '100%' }}>
                <Image
                  style={{ flex: 1, height: undefined, width: undefined }}
                  source={require('../../../assets/5_101.png')}
                  resizeMode='contain'
                />
              </View>
              <View style={{ width: '50%', height: '100%' }}>
                <Image
                  style={{ flex: 1, height: undefined, width: undefined }}
                  source={require('../../../assets/5_103.png')}
                  resizeMode='contain'
                />
              </View>
            </View>
          </View>
        </View>
        <View style={{ width: '100%', height: '6.25%' }}>
          <Image
            style={{ flex: 1, height: undefined, width: undefined }}
            source={require('../../../assets/Corredor3.png')}
            resizeMode='contain'
          />
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
  }
});
