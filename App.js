import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons'; 
import MainCard from './components/MainCard';
import InfoCard from './components/InfoCard';
import * as Location from 'expo-location';
import  getCurrentWeather from './components/api/ConsultApi'


export default function App() {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: darkTheme ? 'lightblack'  :'white',
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
      color:'white'
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
    info:{
      alignItems: 'center',
      backgroundColor: darkTheme ? '#393e54' : '#8f8f8f',
      borderRadius: 20,
      height: 230,
      width: 350,
    },
    infoText : {
      color: darkTheme ? '#e0e0e0' : 'white',
      margin : 5,
      fontSize: 10,
      fontWeight: 'bold'
    },
    infoCards : {
      flexDirection:'row',
      flexWrap: 'wrap',
      
    },
    themeButton :{
      margin:10,
      marginLeft:300,
      alignContent:'center',
      justifyContent:'center',
      width:50,
      height: 50,
      borderRadius: 25,
    },
    squareButton:{
      backgroundColor: darkTheme ? '#f2f2f2' : '#8f8f8f',
      justifyContent: 'center',
      borderRadius:25,
      marginRight:20,
      width:50,
      height:25,
    },
    circleButton:{
      backgroundColor: darkTheme ? '#232634':'#f2f2f2',
      alignSelf:darkTheme ? 'flex-end':'flex-start',
      margin: 5,
      width: 20,
      height: 20,
      borderRadius : 50,

    },
  });
const [darkTheme, setDarkTheme] =useState(true)
const [currentTemperature, setCurrentTemperature] = useState('27')
const [location, setLocation] = useState('TH, Bangkok')
const [wind, setwind] = useState('65')
const [humidity,sethumidity] = useState('80')
const [TempMin,setTempMin] = useState('21')
const [TempMax,setTempMax] = useState('30')
const[currentHour,setCurrentHour] = useState('5.00')
//const onPress = () => darkTheme ? setDarkTheme(false) : setDarkTheme(true);
const [LocationCoords,setLocationCoords] = useState([])



async function getLocation (){
  let {status} = await Location.requestPermissionsAsync()
  if (status !== 'granted'){
    setErroeMsg('Error')
  }else{
    let location = await Location.getCurrentPositionAsync({})
    await setLocationCoords(location.coords)
    console.log(location)
}
useEffect (() =>{
    getLocation()
    getCurrentWeather()
},[])
return (
    <View style={[styles.container,{backgroundColor: darkTheme ? '#232634'  :'#F2F2F2'}]}>

      <TouchableOpacity style={styles.refreshButton}>
      <EvilIcons name="refresh" size={24} color={darkTheme ? 'white' : 'black'} />
      </TouchableOpacity>
      
      <Feather name="sun" style={{marginTop: 50}} size={40} color="orange" />

      <View style={styles.temperature}>
      <Text style={[styles.temperatureText,{color:'white'},{color: darkTheme ? '#e0e0e0' : 'black'}]}>{currentTemperature}</Text>
        <Text style={[styles.temperatureText,{fontSize:14},{color: darkTheme ? '#e0e0e0' : 'black'}]}>°C</Text>
  
      </View>

      <Text style={[styles.temperatureText,{fontSize:14},{color: darkTheme ? '#e0e0e0' : 'black'}]}>{location} {currentHour}</Text>
    

      <View style={styles.cardView}>
        <MainCard title={'ตอนเช้า'} backgroundColor={darkTheme ? '#ff873d' : '#cc6e30'} icon={'morning'} temperature={'24'}></MainCard>
        <MainCard title={'กลางวัน'} backgroundColor={darkTheme ? '#D29600' : '#FCC63F'} icon={'afternoon'} temperature={'31'}></MainCard>
        <MainCard title={'ตอนเย็น'} backgroundColor={darkTheme ? '#008081' : '#38B7B8'} icon={'night'} temperature={'21'}></MainCard>
      </View>
      
      <View style={styles.info}>
      <Text style={styles.infoText}>Information:</Text>
        <View styles ={[styles.infoCards,{flexDirection:'row'},{flexWrap: 'wrap',}]} >
          <InfoCard title={'ลม'} value={wind + 'm/h'} ></InfoCard> 
          <InfoCard title={'ความชื้น'} value={humidity +'%'}></InfoCard>
          <InfoCard title={'อุณหภูมิสูงสุด'} value={TempMax+'°C'}></InfoCard>
          <InfoCard title={'อุณหภูมิต่ำสุด'} value={TempMin+'°C'}></InfoCard>
        
        </View>
      </View>
      
      

      <View style={styles.themeButton}>
        <View style={styles.squareButton}>
        <TouchableOpacity style={[styles.circleButton,{alignSelf: darkTheme ? 'flex-end' : 'flex-start'},{ backgroundColor: darkTheme ? '#232634':'#f2f2f2',}]} onPress={ () => darkTheme ? setDarkTheme(false) : setDarkTheme(true)}>

          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

}      
