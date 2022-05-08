import React,{useState} from 'react';
import { StyleSheet, View, TouchableOpacity, Text, FlatList,ImageBackground } from 'react-native';
// import { BlurView } from "@react-native-community/blur";
// import ImageBlur from 'react-native-image-blur';


function ManuAdds(props) {
    //navigation collector
    const x = props.nav;

    //setting up variables
    const   fullpercent = "100%"

    //loading image
    const loading = require("../../appimages/no-img.png");


    //list of man united news
    const [maunitednews,updatenews]= useState([
        {
            key:1,
            Topic: "Blah blah blah man-united shit shit shit f***k",
            image: {uri:"https://thumbs.dreamstime.com/z/dog-shit-islolated-white-background-72949498.jpg"},
            date: "Monday 9 May 2022",
            author:'news api',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },{
            key:2,
            Topic: "Ronaldo has really been a piece of shit you know",
            date: "Sunday 8 May 2022",
            image: {uri:"https://ichef.bbci.co.uk/onesport/cps/624/cpsprodpb/1080B/production/_117659576_ronaldo.jpg"},
            author:'news api',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },{
            key:3,
            Topic: "Is man u really a club or is it just Crappy",
            date: "saturday 7 May 2022",
            image:{uri:"https://cdn.cloudflare.steamstatic.com/steam/apps/1333890/header.jpg?t=1603458805"},
            author:'news api',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },
        {
            key:4,
            Topic: "Is man u really a club or is it just Crappy",
            date: "saturday 7 May 2022",
            image:{uri:"https://media.istockphoto.com/photos/girl-sees-into-the-window-a-funny-baby-girl-fooling-around-picture-id1226397329?k=20&m=1226397329&s=612x612&w=0&h=CjHqDiTRZzOnNxiv5MMWSlB6vR4rcdDcL-Ud99Or2QA="},
            author:'news api',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },{
            key:5,
            Topic: "Is man u really a club or is it just Crappy",
            date: "saturday 7 May 2022",
            image:{uri:"https://theeasywisdom.com/wp-content/uploads/2021/11/Are-you-emotionally-weak-8-Signs-of-a-weak-minded-person-www.theeasywisdom.com_-1068x600.jpg"},
            author:'news api',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },{
            key:6,
            Topic: "Is man u really a club or is it just Crappy",
            date: "saturday 7 May 2022",
            image:{uri:"https://guardian.ng/wp-content/uploads/2019/10/A-woman-down-with-the-flu-Photo-MadameNoire-1.jpg"},
            author:'news api',
            content: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt minus laudantium sapiente, facere eligendi ratione quas neque voluptatem rem nisi illum voluptate, delectus non optio eius rerum, consequatur quia atque?",
        },
    ])
    

    return (
        <View style={{height:fullpercent}}>
            {/* list of all item  */}
            <FlatList data={maunitednews} showsVerticalScrollIndicator={false} renderItem={({item})=>{
                return (
                    // the button 
                    <TouchableOpacity style={{height:120, marginBottom:10, borderRadius:10, overflow:'hidden'}} key={item.key} onPress={()=>{x.navigate('singles',{
                        Title:item.Topic,
                        author :item.author,
                        content: item.content,
                        image: item.image,
                        date: item.date
                    })}} >
                        {/* page not found */}
                        <ImageBackground style={{width:fullpercent, height:fullpercent, borderRadius:10, overflow:'hidden'}} resizeMode="contain" source={loading}>
                            {/* background image itself  */}
                            <ImageBackground source={item.image} resizeMode="cover" style={{width:fullpercent, height:fullpercent, borderRadius:30}} >
                                {/* blur effect  */}
                                {/* <BlurView blurAmount={3} blurType="light" style={{height:fullpercent, width:fullpercent, position:'absolute', zIndex: 2,}} /> */}
                                {/* item contents  */}
                                <View style={{padding:10, display:'flex', justifyContent:'space-between', height:fullpercent, width:fullpercent, backgroundColor:'grey', opacity:0.4,position:'absolute'}}>
                                   
                                </View>
                                <View style={{padding:10, display:'flex', justifyContent:'space-between', height:fullpercent, width:fullpercent, }}>
                                    {/* upper text */}
                                    <Text style={{color:'whitesmoke', fontSize:17, fontWeight:'bold'}}>{item.Topic}</Text>
                                    {/* lower text  */}
                                    <Text style={{alignSelf:'flex-end',color:'whitesmoke', fontSize:15, fontWeight:'bold'}}>{item.date}</Text>
                                </View>
                            </ImageBackground>
                        </ImageBackground>
                    </TouchableOpacity>
                );
            }} />
        </View>
    );
}

export default ManuAdds;