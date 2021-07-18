import React from 'react';
import {View, Text, Image, Dimensions, StyleSheet} from 'react-native';

export const NewsCard = ({news}: any) => {
  return (
    <View style={styles.newsContainer}>
      <Image source={{uri: news.imageUrl}} style={styles.newsImage} />
      <Text style={styles.newsTitle}>{news.title}</Text>
      <Text style={styles.newsDescription}>{news.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  newsTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  newsDescription: {},
  newsImage: {
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 5,
  },
});
