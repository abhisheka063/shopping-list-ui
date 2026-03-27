import type { FormInstance } from "antd";
import type { Dayjs } from "dayjs";

export type ShoppingItem = {
  id: string;
  name: string;
  category: string;
  subcategory: string;
  qty: number;
  price: number;
  date: Dayjs;
};

export type ShoppingHeaderProps={
    shoppingList: ShoppingItem[];
    searchTerm: string;
    onSearchTermChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    subcategoryFilter: string|undefined;
    onSubcategoryFilterChange: (subcategory:string|undefined) => void;
    categoryFilter: string;
    onCategoryFilterChange: (category:string) => void;
    form:FormInstance;
    FilterCategories:{value:string,label:string}[];
    FilterSubCategories:Record<string, { value: string; label: string }[]>;
    filteredShoppingList:ShoppingItem[];
    ItemsCount?:number;
    
}

export type optionsType={
    value:string;
    label:string;
}

export type ChartData = {
  AllCategories: string[];
  TotalSpending: number;
  CategoryWiseSale: number[];
  HighestCostItem: ShoppingItem;
  AverageCost: number;
  TotalItemCount: number;
};
