import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { routeStyles } from '../assets/styles/routeStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../assets/styles/Global';
import styles from "../assets/styles/HelpStyle";
import * as Font from 'expo-font';


const Help = ({navigation}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Tajawal-Medium': require('../assets/fonts/Tajawal-Medium.ttf'),
      });
      setLoading(false);
    }

    loadFonts();
  }, []);

  if (loading) {
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
            onPress={()=> navigation.navigate("Paper")}
          >
              <Icon name="list-ol" size={25} color="#fff" style={{backgroundColor: 'transparent'}} />        
          </TouchableOpacity>
      </View>
      <View style={styles.helpContainer}>
        <Text style={styles.headingText}>بسم الله الرحمن الرحيم</Text>
        <Text style={styles.subText}>يمثل كل صف في الجدول سؤالًا .</Text>
        <Text style={styles.subText}>يحتوي كل سؤال على حقل إدخال حيث يمكنك إدخال إجابتك.</Text>
        <Text style={styles.subText}>بعد إدخال إجابتك ، ستحتاج إلى التحقق منها.</Text>
        <Text style={styles.subText}>بمجرد النقر على  زر الخطاء او الصحيح ، ستصبح حقول الإدخال غير قابلة للتعديل.</Text>
        <Text style={styles.subText}>استمر في إدخال الإجابات  لكل صف في الجدول</Text>
        <Text style={styles.subText}>بعد التحقق من الإجابات يمكنك الظغط على زر النتيجة لترى الحاصل النهائي</Text>
        <Text style={styles.subText}>بعد الإنهاء يمكنك الضغط على زر الإعادة لبدء سلسلة جديدة</Text>
        <Text style={styles.footerText}>وفقنا الله وإياكم لما يحبه ويرضاه</Text>
      </View>
    </View>
  )
}

export default Help