import { useState } from "react"
import { Filters } from "../components/shopping/Filters"
import { PageHeader } from "../components/shopping/PageHeader"
import { ShoppingForm } from "../components/shopping/ShoppingForm"
import { ShoppingTable } from "../components/shopping/ShoppingTable"
import type { ShoppingItem } from "../types/shopping"
import { addIdToItem } from "../utils/ShoppingItemUtils"
import data from "../mock/data.json"

export const Home = () => {
    const [shoppingList,setShoppingList] = useState<ShoppingItem[]>(addIdToItem(data));
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [subcategoryFilter, setSubcategoryFilter] = useState<string>("");
    const [categoryFilter, setCategoryFilter] = useState<string>("");
    const addItemsToList = (item:ShoppingItem) => {
        setShoppingList([...shoppingList,item])
    }

    const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const onSubcategoryFilterChange = (subcategory:string) => {
        setSubcategoryFilter(subcategory);
    }

    const onCategoryFilterChange = (category:string) => {
        setCategoryFilter(category);
    }
    const filteredShoppingList = shoppingList.filter(item => {
        const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSubcategory = subcategoryFilter ? item.subcategory === subcategoryFilter : true;
        const matchesCategory = categoryFilter ? item.category === categoryFilter : true;
        return matchesSearchTerm && matchesSubcategory && matchesCategory;
    });

    console.log("Filtered Shopping List:", filteredShoppingList,data);

    return(
        <>
        <PageHeader />
        <ShoppingForm addItemsToList={addItemsToList} />
        <Filters 
            shoppingList={shoppingList} 
            searchTerm={searchTerm} 
            setSearchTerm={onSearchTermChange} 
            subcategoryFilter={subcategoryFilter} 
            setSubcategoryFilter={onSubcategoryFilterChange} 
            categoryFilter={categoryFilter} 
            setCategoryFilter={onCategoryFilterChange}
        />
        <ShoppingTable filteredShoppingList={filteredShoppingList} />
        </>
    )
}