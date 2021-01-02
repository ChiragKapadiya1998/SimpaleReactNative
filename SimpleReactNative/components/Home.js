import React from 'react';
import { SafeAreaView, View,Image, FlatList, StyleSheet,Button, Text, StatusBar, } from 'react-native';

const DATA = [
  {
    id: 1,
    title: 'First name',
    name:'chirag',
  },
  {
    id: 2,
    title: 'Second name',
    name:'ravi'
  },
  {
    id: 3,
    title: 'Third name',
    name:'ravi'
  },
  {
    id: 4,
    title: 'forth name',
    name:'ravi'
  },
  {
    id: 5,
    title: 'five name',
    name:'ravi'
  },
  {
    id: 6,
    title: 'six name',
    name:'ravi'
  },
  {
    id: 7,
    title: 'seven name',
    name:'ravi'
  },
  
];

const Item = ({ title ,name}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text>{name}</Text>
  </View>
);

const Home = ({navigation}) => {
    const renderItem = ({ item }) => (
      <Item title={item.title} />,
      <Item name={item.name}/>
    );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
        <Button
        title="Count"
        onPress={() => navigation.navigate('Count')}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f112',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default Home;