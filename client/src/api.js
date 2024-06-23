export const fetchRecipes = async (query = '') => {
  try {
    const url = query 
      ? `https://dummyjson.com/recipes/search?q=${query}` 
      : 'https://dummyjson.com/recipes';
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data); // Log full response
    return data.recipes; // Return the 'recipes' array
  } catch (error) {
    console.error("Error fetching recipes:", error);
    return [];
  }
};
