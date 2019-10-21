import React from 'react'
import { View, SafeAreaView, StyleSheet, ImageBackground, Button } from 'react-native'
// import { _getData } from '../lib/utils';
// import  Button  from './Button';


const Drawer = (props) => {

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/lighthousestars.jpg')} style={styles.background}>
        <View>
        <Button
          title="Go to Details"
          onPress={() => props.navigation.navigate('Details')}
        />
        <Button
          title="Go to Sample1"
          onPress={() => props.navigation.navigate('Sample1')}
        />
        <Button
          title="Go to Sample2"
          onPress={() => props.navigation.navigate('Sample2')}
        />
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Drawer;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  button: {
    marginTop: 10,
    padding: 10,
  },
  background: {
    width: '100%',
    height: '100%',
},

})