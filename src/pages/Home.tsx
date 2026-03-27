import {  useMemo, useState,lazy,Suspense } from "react"
import { PageHeader } from "../components/shopping/PageHeader"
import { ShoppingForm } from "../components/shopping/ShoppingForm"
import { ShoppingTable } from "../components/shopping/ShoppingTable"
import type { ChartData, ShoppingItem } from "../types/shopping"
import { addIdToItem, calculateTotalSpendInCategory, capitalizeFirstLetter, getSubCategory, getSubCategoryData } from "../utils/ShoppingItemUtils"
import { ShoppingTableHeader } from "../components/shopping/ShoppingTableHeader"
import { Form, Spin } from "antd"
import { data } from "../mock/generator/dataGenerator"
const LazyReportCharts = lazy(() => import("../components/shopping/ReportCharts"));

export const Home = () => {
    const [shoppingList,setShoppingList] = useState<ShoppingItem[]>(addIdToItem(data));
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [subcategoryFilter, setSubcategoryFilter] = useState<string|undefined>(undefined);
    const [categoryFilter, setCategoryFilter] = useState<string>("");
    const [viewReport, setViewReport] = useState<boolean>(false);
    const [form]= Form.useForm();

    const onViewReport=():void=>{
        setViewReport(prev => !prev);
    }

    const addItemsToList = (item:ShoppingItem) => {
        const formattedData:ShoppingItem={
            ...item,
            id: crypto.randomUUID(),
        }
        setShoppingList(prevList => [formattedData,...prevList]);
    }

    const onSearchTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    }

    const onSubcategoryFilterChange = (subcategory:string|undefined) => {
        setSubcategoryFilter(subcategory);
    }

    const onCategoryFilterChange = (category:string) => {
        if(category!==categoryFilter){
            form.setFieldsValue({subcategory:undefined});
            setSubcategoryFilter(undefined);
        }
        setCategoryFilter(category);
    }
    
    const filteredShoppingList = useMemo(() => {
        return shoppingList.filter(item => {
            const matchesSearchTerm = item.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesSubcategory = subcategoryFilter ? item.subcategory.toLowerCase() === subcategoryFilter : true;
            const matchesCategory = categoryFilter ? item.category.toLowerCase() === categoryFilter : true;
            return matchesCategory && matchesSubcategory && matchesSearchTerm;
        });
    }, [shoppingList, searchTerm, subcategoryFilter, categoryFilter]);

    const FilterCategories=useMemo(()=>{
        const uniqueCategories=Object.keys(getSubCategory(shoppingList)).map(key=>({value:key.toLocaleLowerCase(),label:capitalizeFirstLetter(key)}));
        return uniqueCategories;
    }, [shoppingList]);



    const chartData:ChartData|null=useMemo(()=>{
        if(!viewReport) return null;
        const TotalItemCount:number=filteredShoppingList.map(item=>item.name).length;
        const TotalSpending:number=filteredShoppingList.reduce((total,item)=>total+(item.price*item.qty),0);
        const subCategoryData=getSubCategoryData(filteredShoppingList);
        const AllCategories=Object.keys(subCategoryData);
        const CategoryWiseSale=Object.keys(subCategoryData).map((item)=> calculateTotalSpendInCategory(subCategoryData[item],item));
        const HighestCostItem:ShoppingItem=filteredShoppingList.reduce((acc,item)=>{
            if(item.price>acc?.price){
                acc=item;
            }
            return acc;
        },filteredShoppingList[0])

        const AverageCost=filteredShoppingList.reduce((total,item)=>total+(item.price*item.qty),0)/filteredShoppingList.length;
        return{ AllCategories, TotalSpending, CategoryWiseSale, HighestCostItem, AverageCost,TotalItemCount}

    }, [filteredShoppingList,viewReport]);


    return(
        <>
        <PageHeader onViewReport={onViewReport} />
        <ShoppingForm addItemsToList={addItemsToList} />
        <ShoppingTableHeader 
            shoppingList={shoppingList} 
            searchTerm={searchTerm} 
            onSearchTermChange={onSearchTermChange} 
            subcategoryFilter={subcategoryFilter} 
            onSubcategoryFilterChange={onSubcategoryFilterChange} 
            categoryFilter={categoryFilter} 
            onCategoryFilterChange={onCategoryFilterChange}
            form={form}
            FilterCategories={FilterCategories}
            FilterSubCategories={getSubCategory(shoppingList)}
            ItemsCount={filteredShoppingList.length}
            filteredShoppingList={filteredShoppingList}
        />
        <ShoppingTable filteredShoppingList={filteredShoppingList} />
        {chartData && (
            <Suspense fallback={<Spin />}>
                <LazyReportCharts view={viewReport} onViewReport={onViewReport} chartData={chartData} />
            </Suspense>
        )}
        </>
    )
}