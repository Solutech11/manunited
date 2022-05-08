import React,{useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,ImageBackground,SafeAreaView } from 'react-native'
import {StatusBar} from 'expo-status-bar'

function Start({navigation}) {
    const cover = {uri:"https://i.pinimg.com/originals/aa/c7/2d/aac72d53ec2785a6d129088c89ed77c5.png"}
    return (
        <SafeAreaView style={styles.body}>
            <ImageBackground source={cover} resizeMode='cover' style={{width:"100%", height:"100%", display:'flex', flexDirection:'column',justifyContent:'flex-end',paddingVertical:10,alignItems:'center' }} >
                <View style={{marginBottom:130,paddingHorizontal:30}}>
                    <Text style={{color:'#f8d82e', fontSize: 22, fontWeight:'bold'}}>Recieve Manchester united update and more...</Text>
                    {/* <Button onPress={()=>{}} title="GET STARTED" color="#f8d82e" /> */}
                    <TouchableOpacity onPress={()=>{navigation.navigate("home")}} style={{backgroundColor:"#f8d82e", borderRadius:30, height:45, display: 'flex', alignItems:'center', justifyContent:'center', marginTop:12}}>
                        <Text style={{color:'#c02033', fontSize: 25, fontWeight: 'bold',}}>GET STARTED</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
            <StatusBar style='white' />
        </SafeAreaView>
    );

}

export default Start

const styles= StyleSheet.create({
    body:{
        flex:1,
        backgroundColor:'white',
        marginTop:50,
        height:'100%'
    },
});