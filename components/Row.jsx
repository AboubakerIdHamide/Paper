import Icon from 'react-native-vector-icons/FontAwesome5';
import React, {memo} from 'react';
import styles from '../assets/styles/PaperStyle';
import { colors } from '../assets/styles/Global';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

const Row = ({question, setCorrect}) => {
  return (
    <View style={[styles.row, question.correct=="yes"?styles.success:question.correct=="no"?styles.error:null]}>
        {question.correct=="yes"?(
          <TouchableOpacity style={styles.btn} onPress={()=>setCorrect(question.id, 'no')}>
            <Icon name="times" size={25} color={colors.error} style={{backgroundColor: 'transparent'}} />
          </TouchableOpacity>
        ):question.correct=="no"?(
          <TouchableOpacity style={styles.btn} onPress={()=>setCorrect(question.id, 'yes')}>
            <Icon name="check" size={25} color={colors.success} style={{backgroundColor: 'transparent'}} />
          </TouchableOpacity>
        ):(
          <>
            <TouchableOpacity style={styles.btn} onPress={()=>setCorrect(question.id, 'yes')}>
              <Icon name="check" size={25} color={colors.success} style={{backgroundColor: 'transparent'}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={()=>setCorrect(question.id, 'no')}>
              <Icon name="times" size={25} color={colors.error} style={{backgroundColor: 'transparent'}} />
            </TouchableOpacity>
          </>
        )}
        <TextInput
          style={styles.inp}
          placeholder={`الجواب ${question.id}`}
          keyboardType='numeric'
          maxLength={4}
          editable={question.correct==""?true:false}
        />
        <Text style={[styles.btn, styles.question]}>{question.id}</Text>
    </View>
  )
}

export default memo(Row)