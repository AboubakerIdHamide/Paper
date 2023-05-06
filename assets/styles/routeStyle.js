import { StyleSheet } from 'react-native'
import { colors } from './Global';

export const routeStyles = StyleSheet.create({
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
    routeBtnContainer:{
      display:'flex',
      flexDirection:"row",
      width:"85%",
      height:50,
      justifyContent:"space-between",
      alignItems:"center",
    },
    container: {
        paddingTop:60,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:10,
    },
  });