import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const RecipeDetails = ({ recipe }) => {
  return (
    <div className="w-11/12 mx-auto mt-8">
      <Card className="shadow-lg rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{recipe.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={recipe.image}
            alt={recipe.name}
            className="w-full h-64 object-cover mb-6 rounded-lg"
          />
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
            <ul className="list-disc pl-5 mb-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Instructions:</h2>
            <ol className="list-decimal pl-5 mb-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
          <div className="mb-6">
            <p className="text-lg font-semibold">
              Prep Time: {recipe.prepTimeMinutes} minutes
            </p>
            <p className="text-lg font-semibold">
              Cook Time: {recipe.cookTimeMinutes} minutes
            </p>
            <p className="text-lg font-semibold">Servings: {recipe.servings}</p>
            <p className="text-lg font-semibold">
              Difficulty: {recipe.difficulty}
            </p>
            <p className="text-lg font-semibold">Cuisine: {recipe.cuisine}</p>
            <p className="text-lg font-semibold">
              Calories per Serving: {recipe.caloriesPerServing}
            </p>
            <p className="text-lg font-semibold">
              Tags: {recipe.tags.join(", ")}
            </p>
            <p className="text-lg font-semibold">
              Rating: {recipe.rating} ({recipe.reviewCount} reviews)
            </p>
            <p className="text-lg font-semibold">
              Meal Type: {recipe.mealType.join(", ")}
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button>
            <Link href="/recipe-list">Back to Recipe List</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RecipeDetails;
