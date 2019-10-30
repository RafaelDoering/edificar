import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

import Colors from '../../constants/Colors';

import NativeButton from '../../components/NativeButton';

export default function Plant(props) {
  function goToOptions(plant) {
    props.navigation.navigate('PlantOptions', {
      plant
    });
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.subHeaderContainer}>
        <Text style={styles.subHeaderText}>Sala 5001</Text>
      </View> */}

      <View style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', width: '100%', height: '35%' }}>
          <NativeButton onPress={() => goToOptions('Sala 5-104')}>
            <View style={{ width: '54%' }}>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={require('../../../assets/5_104.png')}
                resizeMode='contain'
              />
            </View>
          </NativeButton>
          <NativeButton onPress={() => goToOptions('Sala 5-102')}>
            <View style={{ width: '46%' }}>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={require('../../../assets/5_102.png')}
                resizeMode='contain'
              />
            </View>
          </NativeButton>
        </View>
        <NativeButton onPress={() => goToOptions('Corredor 1')}>
          <View style={{ width: '100%', height: '6%' }}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              source={require('../../../assets/Corredor1.png')}
              resizeMode='contain'
            />
          </View>
        </NativeButton>
        <View style={{ flexDirection: 'row', width: '100%', height: '44%' }}>
          <NativeButton onPress={() => goToOptions('Corredor 2')}>
            <View style={{ width: '8%', height: '100%' }}>
              <Image
                style={{ flex: 1, height: undefined, width: undefined }}
                source={require('../../../assets/Corredor2.png')}
                resizeMode='contain'
              />
            </View>
          </NativeButton>
          <View style={{ width: '95%', height: '100%' }}>
            <View style={{ height: '25%', width: '100%' }}></View>
            <View
              style={{ flexDirection: 'row', width: '100%', height: '85%' }}
            >
              <NativeButton onPress={() => goToOptions('Sala 5-101')}>
                <View style={{ width: '50%', height: '100%' }}>
                  <Image
                    style={{ flex: 1, height: undefined, width: undefined }}
                    source={require('../../../assets/5_101.png')}
                    resizeMode='contain'
                  />
                </View>
              </NativeButton>
              <NativeButton onPress={() => goToOptions('Sala 5-103')}>
                <View style={{ width: '50%', height: '100%' }}>
                  <Image
                    style={{ flex: 1, height: undefined, width: undefined }}
                    source={require('../../../assets/5_103.png')}
                    resizeMode='contain'
                  />
                </View>
              </NativeButton>
            </View>
          </View>
        </View>
        <NativeButton onPress={() => goToOptions('Corredor 3')}>
          <View style={{ width: '100%', height: '6.25%' }}>
            <Image
              style={{ flex: 1, height: undefined, width: undefined }}
              source={require('../../../assets/Corredor3.png')}
              resizeMode='contain'
            />
          </View>
        </NativeButton>
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
