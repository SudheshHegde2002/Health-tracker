import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Health quote */}
      <Text style={styles.quote}>
        "Take care of your body. It's the only place you have to live."
      </Text>

      {/* Main content placeholder */}
      <View style={styles.mainContent}>
        {/* Additional content can go here */}
      </View>

      {/* Bottom navigation bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Tips')}
        >
          <Icon name="lightbulb-outline" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('FeelGood')}
        >
          <Icon name="mood" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.iconButton, styles.middleButton]} 
          onPress={() => navigation.navigate('Mood')}
        >
          <Icon name="sentiment-satisfied" size={36} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Report')}
        >
          <Icon name="assessment" size={28} color="white" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.iconButton} 
          onPress={() => navigation.navigate('Calendar')}
        >
          <Icon name="calendar-today" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  quote: {
    fontSize: 22,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#4A90E2',
    marginVertical: 20,
    fontFamily: 'serif',  // Adjust the font to suit your app's design
  },
  mainContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#2196F3',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  iconButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  middleButton: {
    backgroundColor: '#FFC107',
    borderRadius: 35,
    padding: 15,
    elevation: 3,
    marginHorizontal: 10,
  },
});

export default HomeScreen;