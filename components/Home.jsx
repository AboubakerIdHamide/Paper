import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { routeStyles } from '../assets/styles/routeStyle';
import styles from '../assets/styles/HomeStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Font from 'expo-font';
import { colors } from '../assets/styles/Global';

const Home = ({navigation}) => {
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
        <TouchableOpacity 
          style={styles.homeBtn}
          onPress={()=> navigation.navigate("Paper")}
        >
            <Text style={styles.homeText}>بدء</Text>
            <Icon name="list-ol" size={20} color="#FFF"/>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.homeBtn}
          onPress={()=> navigation.navigate("Help")}
        >
            <Text style={styles.homeText}>مساعدة</Text>
            <Icon name="question" size={15} color="#FFF"/>
        </TouchableOpacity>
        <Text style={styles.ownerText}>Made By Id Hamide Aboubaker</Text>
    </View>
  )
}

export default Home