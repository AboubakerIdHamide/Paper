import { StyleSheet } from 'react-native'
import { colors } from './Global';

export default styles = StyleSheet.create({
    container:{
      width: '85%',
      height:"94%",
      backgroundColor: '#fff',
      display:'flex',
      justifyContent:'center',
      borderRadius:5,
    },
    alert:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'85%'
    },
    alertText:(score)=>{
      return {
        textAlign:'center',
        fontSize:24,
        fontFamily:'Tajawal-Medium',
        color:score>32?colors.success:colors.error,
        lineHeight:40
      }
    },
    resultIcon:(score)=>{
        const currentColor=score>32?colors.success:colors.error;
      return {
        width:100,
        height:100,
        borderRadius:100,
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        backgroundColor: currentColor,
        shadowColor: currentColor,
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity:  0.21,
        shadowRadius: 8.19,
        elevation: 11,
        marginBottom:25
      };
    },
    routeBtn:{
      width: 45,
      height:45,
      backgroundColor: colors.primary,
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginBottom:10,
    },
    btnContainer:{
      display:'flex',
      flexDirection:"row",
      width:"85%",
      height:50,
      justifyContent:"space-between",
      alignItems:"center"
    },
    success:{
      backgroundColor:colors.success,
    },
    error:{
      backgroundColor:colors.error,
    },
    loading:{ 
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });