import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import MainCard from './components/MainCard'


export default function App() {
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkTheme ?'white' : '#333333',
    alignItems: 'center',
    
  },
  temperature: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  temperatureText: {
    color: darkTheme ? '#e0e0e0' : 'black',
    fontSize: 40,
  },
  refreshButton :{
    position: 'absolute',
    margin: 30,
    alignSelf: 'flex-start'
  },
  cardView: {
    color: darkTheme ? 'black': 'white',
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
const [darkTheme, setDarkThem] =useState(true)
const [currentTemperature, setCurrentTemperature] = useState('27')
const [location, setLocation] = useState('BR, Fortaleza')

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" size={24} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>
      <Feather name="sun" style={{marginTop: 50}} size={40} color="orange" />
       <View style={styles.temperature}>
        <Text style={[styles.temperatureText,{color:'white'}]}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText,{fontSize:14},{color:'white'}]}>°C</Text>
      <StatusBar style="auto" />
      </View>
      <View style={styles.cardView}>
        <MainCard title={'ตอนเช้า'} backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} icon={'morning'} temperature={'24'}></MainCard>
        <MainCard title={'กลางวัน'} backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} icon={'afternoon'} temperature={'31'}></MainCard>
        <MainCard title={'ตอนเย็น'} backgroundColor={darkTheme ? '#008081' : '#38B7B8'} icon={'night'} temperature={'21'}></MainCard>
      </View>
      <View>
        <Text style={styles.infoText}>Information</Text>
      </View>
    </View>
  );
}

