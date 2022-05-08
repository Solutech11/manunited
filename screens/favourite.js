import React, {useState} from 'react';
import { StyleSheet,View,Text,TouchableOpacity,FlatList } from 'react-native'


function Favourites(props) {
    function textbreaker (text){
        return text.slice(0, 50)+"...";
    }
    
    const getfave = async ()=>{
        try {
            const jsonvalue= await AsyncStorage.getItem("@favBookmark")
            return jsonvalue != null ? JSON.parse(jsonvalue) :null
        } catch (error) {
            console.log(error);
        }
    }
    const [favlist,updatefavelist]= useState(getfave)

    return(
        <View>
            <Text style={{fontSize: 26, color:'#c02033', alignSelf:'center', fontWeight: 'bold', }}>Favourite</Text>

            <FlatList data={favlist} renderItem={({item})=>{
                return(
                    <TouchableOpacity key={item.key}>
                        {/* console.log(); */}
                        <Text>kkk</Text>
                    </TouchableOpacity>
                );
            }} />

        </View>
    );
}

export default Favourites;