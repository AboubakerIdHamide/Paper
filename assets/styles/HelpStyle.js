import { StyleSheet } from 'react-native';
import { colors } from './Global';

export default styles = StyleSheet.create({
    helpContainer: {
      width: '85%',
      height:"94%",
      backgroundColor: '#fff',
      display:'flex',
      alignItems:'flex-end',
      borderRadius:5,
      paddingTop:50,
    },
    headingText:{
      marginBottom:30,
      width:"100%",
      textAlign:"center",
      fontFamily:'Tajawal-Medium',
      fontSize:24,
      color:colors.success
    },
    subText:{
      marginBottom:35,
      width:"100%",
      textAlign:"center",
      fontFamily:'Tajawal-Medium',
      fontSize:16,
      lineHeight:22
    },
    footerText:{
      width:"100%",
      textAlign:"center",
      fontFamily:'Tajawal-Medium',
      fontSize:14,
      color:colors.success
    },
    loading:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });