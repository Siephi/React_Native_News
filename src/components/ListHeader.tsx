import React from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {LISTHEADER} from '../data/LISTHEADER';

export const ListHeader = () => {
  return (
    <View>
      <Text style={styles.header}> News </Text>
      <ScrollView horizontal>
        {LISTHEADER.map(item => {
          return (
            <View style={styles.item} key={item.id}>
              <Image source={{uri: item.imageUrl}} style={styles.image} />
              <Text style={styles.text}>{item.text}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 50,
    margin: 10,
    fontWeight: 'bold',
  },
  item: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height / 5,
    margin: 5,
    borderRadius: 10,
  },
  text: {
    width: '97.5%',
    position: 'absolute',
    bottom: 5,
    backgroundColor: 'rgba(128,128,128,0.5)',
    padding: 10,
    textAlign: 'left',
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 19,
    borderRadius: 10,
  },
});
