import React, { useState, useEffect } from 'react';
import { Container, Box } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import RecipeList from './components/RecipeList';
import { fetchRecipes } from './api';

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadRecipes = async (query = '') => {
    setLoading(true);
    const fetchedRecipes = await fetchRecipes(query);
    console.log("Fetched data:", fetchedRecipes); // Log full response
    setRecipes(fetchedRecipes);
    setLoading(false);
  };

  useEffect(() => {
    loadRecipes();
  }, []);

  useEffect(() => {
    setFilteredRecipes(recipes);
  }, [recipes]);

  const handleSearch = (query) => {
    if (query === '') {
      setFilteredRecipes(recipes);
    } else {
      const filtered = recipes.filter(recipe =>
        recipe.name.toLowerCase().includes(query.toLowerCase()) ||
        recipe.ingredients.some(ingredient => 
          ingredient.toLowerCase().includes(query.toLowerCase())
        )
      );
      setFilteredRecipes(filtered);
    }
  };

  return (
    <div id="root">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <Container className="container">
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <p>Loading...</p>
          </Box>
        ) : (
          <RecipeList recipes={filteredRecipes} />
        )}
      </Container>
      <Footer />
    </div>
  );
};

export default App;
