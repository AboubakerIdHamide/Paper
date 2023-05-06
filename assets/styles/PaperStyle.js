import { StyleSheet } from 'react-native';
import { colors } from './Global';

export default styles = StyleSheet.create({
    paperContainer: {
      width: '85%',
      height:"94%",
      backgroundColor: '#fff',
      display:'flex',
      justifyContent:'center',
      borderRadius:5,
    },
    scrollContainer:{
      marginTop:10,
      marginBottom:20
    },
    calcBtn:{
      width: '100%',
      height:60,
      backgroundColor: colors.primary,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      borderRadius:5,
      marginBottom:10,
    },
    calcBtnText:{
      color:'#fff',
      fontFamily:'Tajawal-Medium',
      fontSize:20
    },
    row:{
      width:'100%',
      height:70,
      padding:10,
      display:'flex',
      flexDirection:'row',
      alignItems: 'center',
      gap:10,
      justifyContent:'space-between',
      backgroundColor:'#F4F4F4',
      borderRadius:5,
      marginBottom:4
    },
    btn:{
      width:50,
      height:50,
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#fff',
      borderRadius:5,
    }, 
    inp:{
      height:50,
      padding:5,
      flex:1,
      backgroundColor:"#fff",
      borderRadius:5,
      fontSize:25,
      textAlign:'center',
      fontFamily:'Tajawal-Medium'
    },
    loading:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    question:{
        textAlign:'center',
        paddingTop:6,
        fontSize:25,
        backgroundColor: colors.primary,
        color:'#fff',
    },
    success:{
      backgroundColor:colors.success,
    },
    error:{
      backgroundColor:colors.error,
    }
  });