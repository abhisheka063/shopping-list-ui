import dayjs from "dayjs";
import type { optionsType, ShoppingItem } from "../types/shopping";

type InputItemType={
    name: string;
    category: string;
    subcategory: string;
    qty: number;
    price: number;
    date: string;
}

export const addIdToItem = (item: InputItemType[]): ShoppingItem[] => {
  const id = crypto.randomUUID();
  const FinalArray = item.map((item) => ({
    ...item,
    id: id.toString(),
    date: item.date ? dayjs(item.date) : dayjs(),
  }));
  return FinalArray;
};


export const getSubCategory = (data: ShoppingItem[]) => {
    //Create category wise sale  also here to avoid multiple iterations in future
  const subCategory = data.reduce(
    (acc: Record<string, optionsType[]>, item: ShoppingItem) => {
      const catKey = item.category.toLocaleLowerCase();
      const subValue = item.subcategory.toLocaleLowerCase();
      if (!acc[catKey]) {
        acc[catKey] = [{ value: subValue, label: capitalizeFirstLetter(item.subcategory) }];
      } else if (!acc[catKey].some((s: optionsType) => s.value === subValue)) {
        acc[catKey].push({ value: subValue, label: capitalizeFirstLetter(item.subcategory) });
      }
      return acc;
    },
    {},
  );
  return subCategory;
};

export const getSubCategoryData = (data: ShoppingItem[]) => {
  const subCategory = data.reduce(
    (acc: Record<string, ShoppingItem[]>, item: ShoppingItem) => {
      const catKey = item.category.toLocaleLowerCase();
      const subValue = item.subcategory.toLocaleLowerCase();
      if (!acc[catKey]) {
        acc[catKey] =[item];
      } else if (!acc[catKey].some((s: ShoppingItem) => s.subcategory.toLocaleLowerCase() === subValue)) {
        acc[catKey].push(item);
      }
      return acc;
    },
    {},
  );
  return subCategory;
};

export const calculateTotalSpendInCategory = (data: ShoppingItem[], category: string): number => {
    const total=data.reduce((acc,item)=>{
      const currentCategory=item.category.toLocaleLowerCase();
      const inputCategory=category.toLocaleLowerCase();
       if(currentCategory==inputCategory){
        acc[category]=(acc[category]||0)+item.qty*item.price;
       }
        return acc;
    }, {} as Record<string,number>);
    return total[category] || 0;  
}

export const columnCurrencyFormatter = (value: number) => {
  return new Intl.NumberFormat("en-IN", {
    currency: "INR",
    style: "currency",
  }).format(value);
};

export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
