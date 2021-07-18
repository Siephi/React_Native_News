import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {NewsCard, ListHeader} from './components';
import {NEWSDATA} from './data/NEWSDATA';

const News = () => {
  const renderNewsData = ({item}: any) => <NewsCard news={item} />;
  return (
    <FlatList
      keyExtractor={item => item.id.toString()}
      data={NEWSDATA}
      renderItem={renderNewsData}
      contentContainerStyle={styles.flatList}
      ListHeaderComponent={ListHeader}
    />
  );
};

const styles = StyleSheet.create({
  flatList: {
    justifyContent: 'space-between',
  },
});

export default News;
