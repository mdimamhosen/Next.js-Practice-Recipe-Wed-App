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

export default function RecipeList({ recipes }) {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mb-4">
        <Link
          href="/"
          className="flex items-center justify-center bg-blue-500 text-white rounded-lg p-2"
        >
          Home
        </Link>
        <h1 className="text-2xl font-bold mt-4">Recipe List</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {recipes.map((recipe) => (
          <Card
            key={recipe.id}
            className="shadow-lg rounded-lg overflow-hidden"
          >
            <CardHeader>
              <CardTitle className="text-xl font-semibold">
                {recipe.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover mb-4"
              />
              <div className="mb-4">
                <h2 className="text-lg font-semibold">Ingredients:</h2>
                <ul className="list-disc pl-5">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-lg font-semibold">Instructions:</h2>
                <ol className="list-decimal pl-5">
                  {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                  ))}
                </ol>
              </div>
              <h2 className="text-lg font-semibold mt-4">
                Rating: {recipe.rating}
              </h2>
            </CardContent>
            <CardFooter>
              <Link href={`/recipe-list/${recipe.id}`} passHref>
                <Button>View Recipe</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
