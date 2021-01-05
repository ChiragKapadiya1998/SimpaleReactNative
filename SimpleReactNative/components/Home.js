import React from 'react';
import { SafeAreaView, View,Image, FlatList, StyleSheet,Button, Text, StatusBar, } from 'react-native';




const Home = ({navigation}) => {
     return (
    <SafeAreaView style={styles.container}>
        <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
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