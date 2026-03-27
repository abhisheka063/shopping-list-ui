import type { TableProps } from 'antd';
import { Tag } from 'antd';
import type { ShoppingItem } from '../../types/shopping';
import dayjs from 'dayjs';
import { capitalizeFirstLetter, columnCurrencyFormatter } from '../../utils/ShoppingItemUtils';

export const columns: TableProps<ShoppingItem>['columns'] = [
  {
    title: 'Item Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name: string, record: ShoppingItem) => {
      const dateAdded = record.date;
      const isNew = dayjs().diff(dateAdded, 'day') <= 2;
      const formattedName = capitalizeFirstLetter(name);
      return isNew ? <> {formattedName} <Tag variant="outlined" color="#36A2EB">New</Tag></> : formattedName;
    }
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    render: (category: string) => capitalizeFirstLetter(category),
    sorter: (a, b) => a.category.localeCompare(b.category),
  },
  {
    title: 'Subcategory',
    dataIndex: 'subcategory',
    key: 'subcategory',
    render: (subcategory: string) => capitalizeFirstLetter(subcategory),
    sorter: (a, b) => a.subcategory.localeCompare(b.subcategory),
  },
  {
    title: 'Quantity',
    dataIndex: 'qty',
    key: 'qty',
    sorter: (a, b) => a.qty - b.qty,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
    render: (price: number) => columnCurrencyFormatter(price),
  },
  {
    title: 'Total',
    key: 'total',
    render: (_, record: ShoppingItem) => columnCurrencyFormatter(record.qty * record.price),
  },
  {
    title: 'Date',
    dataIndex: 'dateAdded',
    key: 'dateAdded',
    sorter: (a, b) => a.date.valueOf() - b.date.valueOf(),
    render: (_,record) => record.date ? record.date.format("DD MMM YYYY") : dayjs().format("DD MMM YYYY"),
  }
];
