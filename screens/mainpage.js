import React,{useState} from 'react';
import { StyleSheet,ScrollView,View,FlatList,Text,TouchableOpacity,ImageBackground,SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import ManuAdds from './buttomSelections/manutd';
import Versus from './buttomSelections/versus';
import Ronaldo from './buttomSelections/ronaldo';
import Players from './buttomSelections/players';
import Score from './buttomSelections/score';
// import ButtomNav from "./CustomNavigation";
import {FontAwesome, Foundation} from '@expo/vector-icons'
import Favourites from './favourite'
import {StatusBar} from 'expo-status-bar'


function Mainpage({navigation}) {

    // 100% vaiable
    const fullPercent="100%";
    const selected= [styles.MidNavBTNselected, styles.MidNavBTNselectedText, "flex"],
        unselected= [styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"];


    //category button config
    const [manuntdStyle, setmanuntdstyl]=useState(selected)
    const [versusStyle, setVersusstyle]= useState(unselected)
    const [RonaldoStyle, setronaldoStyle]= useState([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])
    const [playerStyle, SetplayerStyle]= useState([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])
    const [Scorestyle, setScorestyle]= useState([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])

    function cateegorycheck(type) {
        if(type==="manutd"){
            setmanuntdstyl([styles.MidNavBTNselected, styles.MidNavBTNselectedText,"flex"]);
            setVersusstyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setronaldoStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            SetplayerStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setScorestyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])
        }else if (type=="versus") {
            setVersusstyle([styles.MidNavBTNselected, styles.MidNavBTNselectedText,"flex"]);
            setmanuntdstyl([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setronaldoStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            SetplayerStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setScorestyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])

        }else if (type=="ronaldo") {
            setronaldoStyle([styles.MidNavBTNselected, styles.MidNavBTNselectedText,"flex"]);
            setmanuntdstyl([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setVersusstyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            SetplayerStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setScorestyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])

        }else if (type=="players") {
            SetplayerStyle([styles.MidNavBTNselected, styles.MidNavBTNselectedText,"flex"]);
            setmanuntdstyl([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setronaldoStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setVersusstyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setScorestyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])

        }else if (type=="score") {
            setScorestyle([styles.MidNavBTNselected, styles.MidNavBTNselectedText,"flex"]);
            setmanuntdstyl([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setronaldoStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            SetplayerStyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"]);
            setVersusstyle([styles.MidNavBTNunselected,styles.MidNavBTNunselectedText, "none"])

        }
    }

    //text breaker
    function textbreaker (text){
        return text.slice(0, 50)+"...";
    }

    //list of all latest news
    const [latestnews,updatelatest]= useState([
        {
            key:1,
            Title:'I hate ronaldo so studip',
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



    //pages display style
    const [homepge, sethomeview]=useState('flex');
    const [favepge, setfaveview]=useState('none')

    //switches functions buttom nav
    const selectedtab= ['#c02033','black'];
    const Unselectedtab= ['grey','grey'];

    //setting style for buttom nav
    const [home,homeSwitch]= useState(selectedtab);
    const [Favourite,favSwitch]= useState(Unselectedtab);

    // function to change pages nd nav style 
    function pagesSwitch(switchType) {
        // home style 
        if (switchType==="home") {
            homeSwitch(selectedtab)
            favSwitch(Unselectedtab)
            sethomeview('flex');
            setfaveview("none");
        }else{
            favSwitch(selectedtab);
            homeSwitch(Unselectedtab);
            sethomeview("none")
            setfaveview('flex')
        }
    }

    const loading = require("../appimages/no-img.png");


    return(
    <SafeAreaView style={{marginTop:41, paddingHorizontal:13,width:'100%', height: fullPercent, }}>
    <View style={{display:favepge}}>
        <Favourites />
    </View>
    <View style={{display:homepge}}>
        {/* uper nav */}
        <View style={styles.upperNav}>
            <Text style={{fontWeight:'bold', fontSize:23}} >Latest News</Text>

            <TouchableOpacity style={{display: 'flex', flexDirection:'row', alignItems:'center'}} onPress={()=>{
                navigation.navigate("hotnews");
            }}>
                <Text style={{color:'#73aae4', fontWeight:'bold',fontSize:14, marginRight: 12,}}>See All</Text>
                <AntDesign name="arrowright" size={24} color="#73aae4" />
            </TouchableOpacity>
        </View>
        
        {/* upperslide images  */}
        <View>
            <FlatList  style={{display:'flex', alignItem:'center'}} legacyImplementation={false} showsHorizontalScrollIndicator={false}  data={latestnews} horizontal renderItem={({item})=>{
                return <TouchableOpacity key={item.key} onPress={()=>{navigation.navigate('singles',{
                    Title:item.Title,
                    author :item.author,
                    content: item.content,
                    image: item.image,
                    date: item.date
                })}}>
                <ImageBackground  source={loading} style={{marginLeft:10, width:300, height:240,borderRadius:10,overflow:'hidden',alignSelf:'center',marginHorizontal:3,backgroundColor:'rgba(120, 115, 115, 0.56)' }}>

                    <ImageBackground source={item.image} resizeMode="cover" style={{height:"100%", width:"100%", display: 'flex',flexDirection:'column', justifyContent:'space-between',}}>
                    <View style={{padding:10, display:'flex', justifyContent:'space-between', height:fullPercent, width:fullPercent, backgroundColor:'grey', opacity:0.4,position:'absolute'}}>
                                    
                                    </View>

                        {/* <View></View> */}

                        <View style={{paddingHorizontal:15}}>
                            <Text style={{color:'white', fontSize:18, fontWeight:'bold'}}>by {item.author}</Text>
                            <Text style={{color:'white', fontSize:30, fontWeight:'bold'}}>{item.Title}</Text>
                        </View>
                        <Text style={{paddingHorizontal:15, paddingBottom:10, color:'white', fontSize: 15, fontWeight: 'bold',}}>{textbreaker(item.content)}</Text>
                    </ImageBackground>
                </ImageBackground>
                </TouchableOpacity>
            }} />
        </View>

        {/* middle nav */}
        <ScrollView style={{marginTop:20}} horizontal showsHorizontalScrollIndicator={false} automaticallyAdjustContentInsets={true}>
            <TouchableOpacity style={manuntdStyle[0]} onPress={()=>{
                // switchSelector("manutd");
                cateegorycheck("manutd");
            }} >
                <Text style={manuntdStyle[1]} >ManUtd</Text>
            </TouchableOpacity>

            <TouchableOpacity style={versusStyle[0]} onPress={()=>{
                cateegorycheck("versus");
                // switchSelector("versus");
                
            }} >
                <Text style={versusStyle[1]}>Versus</Text>
            </TouchableOpacity>

            <TouchableOpacity style={RonaldoStyle[0]} onPress={()=>{
                cateegorycheck("ronaldo");
                // switchSelector("versus");
                
            }} >
                <Text style={RonaldoStyle[1]}>Ronaldo</Text>
            </TouchableOpacity>

            <TouchableOpacity style={playerStyle[0]}  onPress={()=>{
                cateegorycheck("players");
                // switchSelector("versus");
                
            }} >
                <Text style={playerStyle[1]}>Player</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Scorestyle[0]} onPress={()=>{
                cateegorycheck("score");
                // switchSelector("versus");
                
            }} >
                <Text style={Scorestyle[1]}>Score</Text>
            </TouchableOpacity>
        </ScrollView>


        {/* for all the buttom tabs */}
        <View style={{height:400, marginTop:15, display:manuntdStyle[2],}}>
           <ManuAdds nav={navigation} /> 
        </View>

        <View style={{height:400, marginTop:15, display:versusStyle[2],}}>
           <Versus nav={navigation} /> 
        </View>
        <View style={{height:400, marginTop:15, display:RonaldoStyle[2],}}>
           <Ronaldo nav={navigation} /> 
        </View>
        <View style={{height:400, marginTop:15, display:playerStyle[2],}}>
           <Players nav={navigation} /> 
        </View>
        <View style={{height:400, marginTop:15, display:Scorestyle[2],}}>
           <Score nav={navigation} /> 
        </View>
        
        
    </View>


    {/* favourite tab  */}
    


    
    {/* custom nav  */}
    <View style={{position:'absolute',marginTop:630, alignItems:'center', justifyContent:'flex-end', alignSelf:'center',width: fullPercent,}}>
    <View style={{backgroundColor:'whitesmoke', width:"80%", display: 'flex', flexDirection:'row',justifyContent:'space-between', padding:10, borderRadius:600, paddingHorizontal:36}}>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{
                pagesSwitch("home")
            }} >
                <FontAwesome name='home' size={35} color={home[0]} />
                <Text style={{fontWeight:'bold', color: home[1]}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center'}} onPress={()=>{
                pagesSwitch("fav")
            }} >
                <FontAwesome name='heart' size={35} color={Favourite[0]} />
                <Text style={{fontWeight:'bold', color: Favourite[1]}}>Favorite</Text>
            </TouchableOpacity>
    </View>
    </View>
    <StatusBar style='white' />

    </SafeAreaView>
    );
}

export default Mainpage;


const styles= StyleSheet.create({
    upperNav:{
        display: 'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20,
        marginTop:10
    },
    MidNavBTNselected:{
        backgroundColor:'#c02033',
        padding:6,
        borderRadius:15,
        marginRight:10,
        width: 80,
        alignItems:'center',
        
    },
    MidNavBTNselectedText:{
        color:'white',
        fontWeight: 'bold',
    },
    MidNavBTNunselected:{
        backgroundColor:'transparent',
        borderWidth: 0.5,
        borderColor:'grey',
        padding:6,
        borderRadius:15,
        marginRight:10,
        width: 80,
        alignItems:'center',
        // color:'white',
        // fontWeight: 'bold',
    },
    MidNavBTNunselectedText:{
        color:'black',
        fontWeight: 'bold',
    },
})