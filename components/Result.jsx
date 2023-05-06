import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styles from "../assets/styles/ResultStyle";
import { colors } from '../assets/styles/Global';
import { routeStyles } from '../assets/styles/routeStyle';
import * as Font from 'expo-font';
import { 
    View,
    Text,
    TouchableOpacity,
    ActivityIndicator,

} from 'react-native';

const Result = ({navigation, route}) => {
    const [fontLoaded, setFontLoaded] = useState(false);
    const { score }=route.params;

    useEffect(() => {
      async function loadFonts() {
        await Font.loadAsync({
          'Tajawal-Medium': require('../assets/fonts/Tajawal-Medium.ttf'),
        });
        setFontLoaded(true);
      }
  
      loadFonts();
    }, []);


    if (!fontLoaded) {
        return (
          <View style={styles.loading}>
            <ActivityIndicator size={50} color={colors.primary}/>
          </View>
        );
    }

    return (
        <View style={routeStyles.container}>
            <View style={routeStyles.routeBtnContainer}>
                <TouchableOpacity 
                    style={routeStyles.routeBtn}
                    onPress={()=> navigation.goBack()}
                >
                    <Icon name="chevron-left" size={25} color="#FFF"/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={routeStyles.routeBtn}
                    onPress={()=> navigation.navigate("Home")}
                >
                    <Icon name="home" size={25} color="#fff" style={{backgroundColor: 'transparent'}} />        
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <View style={styles.alert}>
                    <View style={styles.resultIcon(score)}>
                        <Icon 
                            name={score < 32 ? "times":"check"}
                            size={70}
                            color="#fff"
                        />
                    </View>
                    <Text style={styles.alertText(score)}>{score >= 32 ? `عمل رائع نتيجتك هي ${score}`:`حظًا سعيدًا في المرة القادمة ، درجاتك ${score}`}</Text>
                </View>
            </View>
        </View>
    )
}

export default Result