import AsyncStorage from '@react-native-async-storage/async-storage';


const storeFave= async (props) =>{
    try {
        const strigifyjson =JSON.stringify(props.value)
        await AsyncStorage.setItem("@favBookmark", strigifyjson)
    } catch (error) {
        console.log(error);
    }
}

export default storeFave;