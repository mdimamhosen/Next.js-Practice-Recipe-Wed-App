import RecipeDetails from "@/components/recipe-details";
import React from "react";
async function getRecipes(id) {
  try {
    const apiResponse = await fetch(`https://dummyjson.com/recipes/${id}`);
    const data = await apiResponse.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}
const page = async ({ params }) => {
  const getRecipeDetails = await getRecipes(params?.details);
  return (
    <div>
      <RecipeDetails recipe={getRecipeDetails} />
    </div>
  );
};

export default page;
