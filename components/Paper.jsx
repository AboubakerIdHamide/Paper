import React, { useState, useEffect, useCallback } from 'react';
import * as Font from 'expo-font';
import styles from '../assets/styles/PaperStyle';
import { defaultQuetions } from '../utils/quetions';
import Row from './Row';
import { colors } from '../assets/styles/Global';
import { routeStyles } from '../assets/styles/routeStyle';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { 
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList
} from 'react-native';


const Paper = ({navigation}) => {
  const [questions, setQuestions] = useState(defaultQuetions);
  const [loading, setLoading] = useState(true);
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'Tajawal-Medium': require('../assets/fonts/Tajawal-Medium.ttf'),
      });
      setLoading(false);
    }

    loadFonts();
  }, []);

  const setCorrect = useCallback((id, correct)=>{
    setQuestions(prevQuestions => {
      const index = prevQuestions.findIndex(q => q.id === id);
      const updatedQuestion = { ...prevQuestions[index], correct };
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = updatedQuestion;

      let currentScore=0;
      updatedQuestions.map((Q)=>{
        if(Q.correct=="yes"){
          currentScore++;
        }
      })
      setScore(currentScore)
      return updatedQuestions;
    });

    
  }, [])

  const clearPaper = useCallback(()=>{
    setQuestions(prevQuestions => {
      const updatedQuestions = prevQuestions.map((Q)=>{
        if(Q.correct=="yes" || Q.correct=="no"){
          return {...Q, correct:""};
        }
        return Q;
    })
    setScore(0);

    return updatedQuestions;
    });
  }, [])

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
            onPress={clearPaper}
          >
              <Icon name="retweet" size={25} color="#fff" style={{backgroundColor: 'transparent'}} />        
          </TouchableOpacity>
      </View>

      <View style={styles.paperContainer}>
          <FlatList
            style={styles.scrollContainer}
            keyExtractor={q=>q.id}
            data={questions}
            renderItem={({item: question})=>(
              <Row question={question} setCorrect={setCorrect}/>
            )}
          />
        <TouchableOpacity 
          style={styles.calcBtn}
          onPress={()=> navigation.navigate("Result", { score })}
        >
          <Text style={styles.calcBtnText}>النتيجة</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Paper