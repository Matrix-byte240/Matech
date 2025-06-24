import React from 'react';
import { Linking, ScrollView, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
     <ScrollView>

      <View style={styles.line} />

     
      <Text style={styles.name}>RAJI MUJEEB OLAMILEKAN</Text>
      <Text style={styles.role}>Mobile App Developer</Text>

      
      <Text style={styles.text}>123 Your Street</Text>
      <Text style={styles.text}>Your City, ST 12345</Text>
      <Text style={styles.text}>(234) 810-4038-378</Text>
      <Text style={styles.email} onPress={() => Linking.openURL('mailto:leknaola952@gmail.com')}>
      lekanola952@gmail.com
      </Text>

      
      <Text style={styles.skillsTitle}>Skills</Text>
      <Text style={styles.text}>
        HTML, CSS, JavaScript, Accessibility, Figma to Design, Responsive Web Design,
        Technical Writing, Presentation
      </Text>
      </ScrollView>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      padding: 5, 
      borderWidth:10,
      borderColor: 'green',
      backgroundColor: 'White',
      borderLeftWidth: 10,
      borderRightWidth: 10,
      flex: 1,
    },
    line: {
      borderBottomColor: 'green',
      borderBottomWidth: 5,
      marginBottom: 20,
      marginTop: 30,
      marginHorizontal: 15,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      fontFamily: 'Courier New'
    },
    role: {
      fontSize: 16,
      color: 'green',
      marginBottom: 20,
      fontStyle: 'italic'
    },
    text: {
      fontSize: 14,
      marginBottom: 5,
    },
    email: {
      fontSize: 14,
      color: 'gray',
      textDecorationLine: 'underline',
      marginBottom: 20,
      fontStyle: 'italic'
    },
    skillsTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'green',
      marginBottom: 5,
    },
    text: {
      fontStyle: 'normal',
      fontFamily: 'Georgia'
