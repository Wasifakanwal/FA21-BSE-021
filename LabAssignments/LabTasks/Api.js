import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const RapidAPIKey = 'a2223f969bmsh516d0924c9721c7p13dbd3jsnb61127a387a5';

const BookFinderScreen = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://book-finder1.p.rapidapi.com/api/search',
        params: {
          series: 'Wings of fire',
          book_type: 'Fiction',
          lexile_min: '600',
          lexile_max: '800',
          results_per_page: '25',
          page: '1'
        },
        headers: {
          'X-RapidAPI-Key': RapidAPIKey,
          'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
        }
      };

      const response = await axios.request(options);
      setBooks(response.data);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Book Data</Text>
      {books.map((book, index) => (
        <Text key={index} style={styles.book}>{book.title}</Text>
      ))}
      <Button title="Fetch Book Data" onPress={fetchBooks} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  book: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default BookFinderScreen;
