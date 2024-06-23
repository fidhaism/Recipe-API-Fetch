import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import './RecipeList.css'; // Import the CSS file for RecipeList

const RecipeList = ({ recipes }) => {
  return (
    <Grid container spacing={4}>
      {recipes && recipes.length > 0 ? (
        recipes.map((recipe) => (
          <Grid item key={recipe.id} xs={12} sm={6} md={4} lg={3}>
            <Card className="glassmorphism-card">
              {recipe.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={recipe.image}
                  alt={recipe.name}
                />
              )}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {recipe.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {recipe.cuisine}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))
      ) : (
        <Typography variant="h6" component="div">
          No recipes found
        </Typography>
      )}
    </Grid>
  );
};

export default RecipeList;
