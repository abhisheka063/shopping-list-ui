const categoryMap = {
  Dairy: ["Milk", "Eggs", "Cheese", "Butter", "Yogurt", "Paneer"],
  Bakery: ["Bread", "Buns", "Croissant", "Cake", "Muffin"],
  Fruits: ["Apples", "Oranges", "Bananas", "Grapes", "Mangoes"],
  Meat: ["Chicken", "Fish", "Mutton", "Prawns"],
  Grains: ["Rice", "Pasta", "Wheat", "Oats", "Barley"],
  Vegetables: ["Tomatoes", "Carrots", "Potatoes", "Onions", "Spinach"]
} as const;

const priceMap = {
  Milk: 4.5, Eggs: 3.2, Cheese: 6, Butter: 5, Yogurt: 3, Paneer: 6.5,
  Bread: 2, Buns: 2.5, Croissant: 3, Cake: 8, Muffin: 3.5,
  Apples: 5, Oranges: 4.8, Bananas: 3, Grapes: 4, Mangoes: 6,
  Chicken: 10.5, Fish: 12, Mutton: 14, Prawns: 13,
  Rice: 6, Pasta: 3.5, Wheat: 5, Oats: 4, Barley: 4.5,
  Tomatoes: 4, Carrots: 2.5, Potatoes: 5, Onions: 3, Spinach: 2
} as const;

// 👇 derive types automatically
type Category = keyof typeof categoryMap;
type Subcategory = keyof typeof priceMap;

const generateData = (count = 100) => {
  const categories = Object.keys(categoryMap) as Category[];

  return Array.from({ length: count }, (_, i) => {
    const category = categories[i % categories.length];
    const subList = categoryMap[category];
    const subcategory = subList[i % subList.length] as Subcategory;

    return {
      name: subcategory,
      category,
      subcategory,
      qty: Math.floor(Math.random() * 10) + 1,
      price: priceMap[subcategory],
      date: `2025-02-${String((i % 28) + 1).padStart(2, "0")}`
    };
  });
};

export const data = generateData(100);