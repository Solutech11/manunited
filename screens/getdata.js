import AsyncStorage from '@react-native-async-storage/async-storage';

const getfave = async ()=>{
    try {
        const jsonvalue= await AsyncStorage.getItem("@favBookmark")
        return jsonvalue != null ? JSON.parse(jsonvalue) :null
    } catch (error) {
        console.log(error);
    }
}

