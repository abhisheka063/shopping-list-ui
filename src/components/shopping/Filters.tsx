import type { ShoppingItem } from "../../types/shopping"

type Props={
    shoppingList: ShoppingItem[];
    searchTerm: string;
    setSearchTerm: (event: React.ChangeEvent<HTMLInputElement>) => void;
    subcategoryFilter: string;
    setSubcategoryFilter: (subcategory:string) => void;
    categoryFilter: string;
    setCategoryFilter: (category:string) => void;
}

export const Filters = (props: Props) => {
    return(
        <>
        Filters
        </>
    )
}