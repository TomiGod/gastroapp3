import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://recipe-book2.p.rapidapi.com/recipes-by-category', {
          params: {
            path: 'Recetas-de-Aperitivos-tapas-listado_receta-1_1.html',
            page: 1
          },
          headers: {
            'x-rapidapi-host': 'recipe-book2.p.rapidapi.com',
            'x-rapidapi-key': '00a23d2089msh1918fe4ef69cb77p1d3ceejsn6cfa56d353d8'
          }
        });
        setRecipes(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Receitas GastroApp</Text>
      <FlatList
        data={recipes}
        keyExtractor={(item, index) => index.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.recipeContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
        contentContainerStyle={styles.listContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  listContentContainer: {
    paddingBottom: 10,
  },
  recipeContainer: {
    flex: 1,
    margin: 5,
    padding: 10,
    backgroundColor: 'lightgrey',
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default App;
