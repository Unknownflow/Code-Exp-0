import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.fillerContainer}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Hello World! </Text>
          <Image
          style={styles.profilePic}
          source={{
            uri:
              'https://filmdaily.co/wp-content/uploads/2020/04/cute-cat-videos-lede.jpg',
          }}
        />
      </View>
      <View style={styles.fillerContainer}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow'
  },
  text:{
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 60,
    color: 'red',
  },
  titleContainer: {
    backgroundColor: 'orange',
    padding: 50,
    margin: 30,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    flex: 9,
  },
  fillerContainer: {
    width: '50%',
    flex: 1,
    backgroundColor: 'blue',
  },
  profilePic: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 40,
  }
});