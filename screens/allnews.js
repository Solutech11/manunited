import React,{useState} from 'react';
import {StatusBar} from 'expo-status-bar'
import { StyleSheet,View,Text,SafeAreaView,TouchableOpacity,FlatList, ImageBackground } from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import Sizedbox from './addons/sizedbox'

function Hotnews({navigation}) {
    const fullPercent="100%"
    function textbreaker (text){
        return text.slice(0, 300)+"...";
    }

    //list of all latest news
    const [latestnews,updatelatest]= useState([
        {
            key:1,
            Title:'I hate ronaldo so studip they are dumb nonsense nd foolish ughhhhh',
            author:'me',
            date:"Sunday, 1 May 2022",
            image:{uri:"https://i.pinimg.com/originals/aa/c7/2d/aac72d53ec2785a6d129088c89ed77c5.png"},
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },
        {
            key:2,
            Title:'blah,blah',
            author:'news api',
            date:"Sunday, 1 May 2022",
            image:{uri:"https://e3.365dm.com/22/04/2048x1152/skynews-ronaldo-football_5734936.jpg"},
            content: "Open the project with the Expo Go app on iOS or Android, or in your web browser ... app we will install all of the examples' dependencies using expo install ..."
        },
        {
            key:3,
            Title:'blah,blah',
            author:'news api',
            date:"Sunday, 1 May 2022",
            image:{uri:"https://resources.premierleague.com/photos/2022/04/16/4651fbcf-b72e-45b9-81d5-db5171abd261/GettyImages-1240024270.jpg?width=860&height=573"},
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },
        {
            key:4,
            Title:'blah,blah',
            author:'news api',
            date:"Sunday, 1 May 2022",
            image:{uri:"https://resources.premierleague.com/photos/2022/04/16/4651fbcf-b72e-45b9-81d5-db5171abd261/GettyImages-1240024270.jpg?width=860&height=573"},
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },
        {
            key:5,
            Title:'blah,blah',
            author:'news api',
            date:"Sunday, 1 May 2022",
            image:{uri:"https://resources.premierleague.com/photos/2022/04/16/4651fbcf-b72e-45b9-81d5-db5171abd261/GettyImages-1240024270.jpg?width=860&height=573"},
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },
        {
            key:6,
            Title:'blah,blah',
            author:'news api',
            date:"Sunday, 1 May 2022",
            image:{uri:"	https://assets.manutd.com/AssetPicker/images/0/0/1…d7a6c3233_202204280922391651178754649_xlarge.webp"},
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        }
    ])

    //loading image
    const loading=require('../appimages/no-img.png')

    return(
        <SafeAreaView style={{marginTop:41, paddingHorizontal:13,width:'100%', height: fullPercent, }}>
            {/* upperbar */}
            <View style={styles.upper}>
                <TouchableOpacity style={{flex:1}} onPress={()=>{
                    navigation.pop()
                }}>
                    <Ionicons name='chevron-back' size={24} color="black" />

                </TouchableOpacity>
                <Text style={{fontSize: 26, flex: 2, color:'#c02033', alignSelf:'center', fontWeight: 'bold', }}>Hot Updates</Text>

            </View>

            
            {/* body */}
            <View style={{flex:1, paddingBottom:"15%"}}>
                <FlatList data={latestnews} showsVerticalScrollIndicator={false} renderItem={({item})=>{
                    return (
                        <TouchableOpacity key={item.key} onPress={()=>{navigation.navigate('singles',{
                            Title:item.Title,
                            author :item.author,
                            content: item.content,
                            image: item.image,
                            date: item.date
                        })}} style={{marginTop:30}}>
                            {/* the image  */}
                            <ImageBackground source={loading} style={{width:fullPercent, borderRadius:10,overflow:'hidden', height:185}}>
                                <ImageBackground source={item.image} style={{flex:1}}></ImageBackground>
                            </ImageBackground>
                            <Sizedbox height={15} width={1} />

                            {/* text section  */}
                            <View>
                                {/* date */}
                                <Text style={{fontWeight:"500"}}>{item.date}</Text>
                                <Sizedbox height={8} width={1} />

                                {/* title  */}
                                <Text style={{fontWeight:'600', fontSize:18}}>{item.Title}</Text>
                                <Sizedbox height={8} width={1} />

                                {/* content  */}
                                <Text style={{fontWeight: '900',letterSpacing:0.5,fontSize:15}}>{textbreaker(item.content)} </Text>
                                <Sizedbox height={8} width={1} />

                                {/* author  */}
                                <Text style={{fontWeight: 'bold',}}>Published by {item.author}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }} />
            </View>


            <StatusBar style='auto' />

        </SafeAreaView>
    );
}

export default Hotnews;


const styles =StyleSheet.create({
    upper:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        width:'100%'

    }
})