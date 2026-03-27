import { Table } from "antd";
import type { ShoppingItem } from "../../types/shopping";
import { columns } from "./column";
import { useEffect, useState } from "react";

  type ShoppingProps = {
    filteredShoppingList: ShoppingItem[];
  };

  const PAGE_SIZE = 20;
  const  getTableHeight=()=> {
    return window.innerHeight - 250;
  }

export const ShoppingTable = ({ filteredShoppingList }: ShoppingProps) => {
  const [visibleData, setVisibleData] = useState<ShoppingItem[]>([]);
  const [tableHeight, setTableHeight] = useState(getTableHeight());

  useEffect(() => {
    setVisibleData(filteredShoppingList.slice(0, PAGE_SIZE));
  }, [filteredShoppingList]);

  useEffect(() => {
    const handleResize = () => {
      setTableHeight(getTableHeight());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;

    if (
      target.scrollTop + target.clientHeight >= target.scrollHeight - 10
    ) {
      setVisibleData((prev) => [
        ...prev,
        ...filteredShoppingList.slice(prev.length, prev.length + PAGE_SIZE),
      ]);
    }
  };

  return (
    <Table
      columns={columns}
      dataSource={visibleData}
      pagination={false}
      scroll={{ y: tableHeight }}
      onScroll={handleScroll}
    />
  );
};