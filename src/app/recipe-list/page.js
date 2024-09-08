import RecipeList from "@/components/ui/recipe-list";
import React from "react";
async function getRecipes() {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const data = await apiResponse.json();
    return data?.recipes;
  } catch (error) {
    throw new Error("Failed to fetch recipes");
  }
}
const page = async () => {
  const recipes = await getRecipes();
  return (
    <div>
      <RecipeList recipes={recipes} />
    </div>
  );
};

export default page;
