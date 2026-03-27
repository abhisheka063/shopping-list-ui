import type { optionsType } from "../../../types/shopping";

type subcategoryOptionsType = {
  [key: string]: optionsType[];
};

export const options: optionsType[] = [
  { value: "clothing", label: "Clothing" },
  { value: "fruits", label: "Fruits" },
  { value: "dairy", label: "Dairy" },
  { value: "bakery", label: "Bakery" },
  { value: "meat", label: "Meat" },
  { value: "grains", label: "Grains" },
  { value: "vegetables", label: "Vegetables" },
];

export const subcategoryOptions: subcategoryOptionsType = {
  clothing: [{ value: "shirts", label: "Shirts" }],
  dairy: [
    { value: "milk", label: "Milk" },
    { value: "eggs", label: "Eggs" },
  ],
  meat: [
    { value: "chicken", label: "Chicken" },
    { value: "fish", label: "Fish" },
  ],
  grains: [
    { value: "rice", label: "Rice" },
    { value: "pasta", label: "Pasta" },
  ],
  bakery: [
    { value: "bread", label: "Bread" },
    { value: "pastries", label: "Pastries" },
  ],
  fruits: [
    { value: "apples", label: "Apples" },
    { value: "oranges", label: "Oranges" },
  ],
  vegetables: [
    { value: "leafy greens", label: "Leafy Greens" },
    { value: "root vegetables", label: "Root Vegetables" },
  ],
};
