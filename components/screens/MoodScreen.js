import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Button, StyleSheet } from 'react-native';

const MoodScreen = () => {
  const [mood, setMood] = useState('');
  const [description, setDescription] = useState('');

  const handleSaveMood = () => {
    console.log('Saving mood:', mood, description);
    // Add your save logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>How are you feeling today?</Text>
      <View style={styles.moodContainer}>
        <TouchableOpacity 
          style={[styles.moodButton, mood === 'Sad' && styles.selectedMood]}
          onPress={() => setMood('Sad')}
        >
          <Text style={styles.emoji}>😢</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.moodButton, mood === 'Happy' && styles.selectedMood]}
          onPress={() => setMood('Happy')}
        >
          <Text style={styles.emoji}>😊</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Describe your feelings..."
        style={styles.input}
        multiline
      />
      <Button 
        title="Save Mood"
        onPress={handleSaveMood}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  moodContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  moodButton: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  selectedMood: {
    borderColor: '#007AFF',
    backgroundColor: '#E3F2FD',
  },
  emoji: {
    fontSize: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    marginVertical: 20,
    minHeight: 100,
  },
});

export default MoodScreen;