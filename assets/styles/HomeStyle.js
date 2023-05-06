import { StyleSheet } from 'react-native'
import { colors } from './Global';

export default styles = StyleSheet.create({
    homeBtn:{
        width:"70%",
        margin:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"flex-end",
        alignItems:"center",
        backgroundColor:colors.primary,
        padding:20,
        borderRadius:5,
        marginBottom:20
    },
    homeText:{
        color:"#fff",
        fontFamily:'Tajawal-Medium',
        fontSize:20,
        marginRight:80
    },
    ownerText:{
        color:colors.primary,
        fontSize:12,
        position:"absolute",
        bottom:30
    }
  });