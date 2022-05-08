import React, { useState } from 'react';
import { StyleSheet,ScrollView,SafeAreaView,View,Text,ImageBackground, TouchableOpacity } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {StatusBar} from 'expo-status-bar'



function Singles({navigation, route}) {
    //collecting parsed data
    const {Title,author,content,image,date} = route.params;

    const fullPercent="100%"
    return (
        <SafeAreaView style={{width:'100%', height: fullPercent, }} >

            <TouchableOpacity style={{zIndex:20, position:'absolute',marginTop:41,marginLeft:13,borderRadius:10,}} onPress={()=>{navigation.pop()}}>
                <View style={{width:fullPercent, height:fullPercent, backgroundColor:'#cbcdc2', opacity:0.5, position: 'absolute', borderRadius:10 }}></View>
                <View style={{padding:5}}>
                    <Ionicons name='chevron-back' size={24} color="black" />
                </View>
                
            </TouchableOpacity>

            {/* <Text>{Title}</Text> */}
            <ImageBackground source={image} style={{width:fullPercent, height:'60%', position:'absolute'}}></ImageBackground>

            {/* middle box  */}
            <View style={{position:'absolute', height:"16%", width:'80%',overflow:'hidden', alignSelf:'center',
        marginTop:'45%',zIndex: 10, borderRadius:20}}>
            {/* opacity */}
                <View style={{position:'absolute', height:fullPercent,width:fullPercent, opacity:0.9, backgroundColor:'#cbcdc2'}}></View>

                {/* text cntent in box  */}
                <View style={{position: 'relative',zIndex: 30, paddingHorizontal:20, paddingVertical:20,justifyContent:'space-between', height:'100%'}}>
                    <Text style={{fontWeight:'bold', fontSize: 13,letterSpacing:1}}>{date}</Text>
                    <Text style={{fontSize:23, fontWeight:'bold'}}>{Title}</Text>
                    <Text style={{fontWeight:'bold'}}>Published by {author}</Text>
                </View>
            </View>
            {/* body  */}
            <View style={{flex:20, width:fullPercent, height:"50%", backgroundColor:'white', marginTop:"65%", borderTopLeftRadius:20,borderTopRightRadius:20, paddingTop:"25%"}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <Text style={{fontSize:17, paddingHorizontal:10, letterSpacing:0.5}}>
                        {content}
                    </Text>
                </ScrollView>
                
            </View>
            <TouchableOpacity>
                
            </TouchableOpacity>

            <StatusBar style='auto' />
        </SafeAreaView>
    );
}

export default Singles;


const styles = StyleSheet.create({

})