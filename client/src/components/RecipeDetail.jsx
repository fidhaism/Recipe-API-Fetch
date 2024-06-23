// RecipeDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, CardMedia } from '@mui/material';

const RecipeDetail = () => {
  const { id } = useParams(); // Extract id from URL params
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true);
        // Replace with your API endpoint for fetching recipe details by id
        const response = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await response.json();
        setRecipe(data); // Assuming data structure matches the provided example
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipe:', error);
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return <Typography variant="h6">Loading...</Typography>;
  }

  if (!recipe) {
    return <Typography variant="h6">Recipe not found</Typography>;
  }

  return (
    <Container>
      <Card sx={{ maxWidth: 600, margin: 'auto', marginTop: 20 }}>
        <CardMedia
          component="img"
          height="300"
          image={recipe.image}
          alt={recipe.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {recipe.name}
          </Typography>
          <Typography variant="subtitle1">Ingredients:</Typography>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <Typography variant="subtitle1">Instructions:</Typography>
          <ol>
            {recipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          <Typography variant="subtitle1">Prep Time: {recipe.prepTimeMinutes} minutes</Typography>
          <Typography variant="subtitle1">Cook Time: {recipe.cookTimeMinutes} minutes</Typography>
          <Typography variant="subtitle1">Servings: {recipe.servings}</Typography>
          <Typography variant="subtitle1">Difficulty: {recipe.difficulty}</Typography>
          <Typography variant="subtitle1">Cuisine: {recipe.cuisine}</Typography>
          <Typography variant="subtitle1">Calories per Serving: {recipe.caloriesPerServing}</Typography>
          <Typography variant="subtitle1">Rating: {recipe.rating}</Typography>
          <Typography variant="subtitle1">Review Count: {recipe.reviewCount}</Typography>
          <Typography variant="subtitle1">Meal Type: {recipe.mealType.join(', ')}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RecipeDetail;
