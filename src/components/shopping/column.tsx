import type { TableProps } from 'antd';
import { Tag } from 'antd';
import type { ShoppingItem } from '../../types/shopping';
import { convertDateToLocaleStringTwoDigit } from '../../utils/DateUtils';

export const columns: TableProps<ShoppingItem>['columns'] = [
  {
    title: 'Item Name',
    dataIndex: 'name',
    key: 'name',
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (name: string, record: ShoppingItem) => {
      const dateAdded = record.date;
      const isNew = (Date.now() - new Date(dateAdded).getTime()) < 24 * 60 * 60 * 1000;
      return isNew ? <Tag color="green">{name}</Tag> : name;
    }
  },
  {
    title: 'Category',
    dataIndex: 'category',
    key: 'category',
    sorter: (a, b) => a.category.localeCompare(b.category),
  },
  {
    title: 'Subcategory',
    dataIndex: 'subcategory',
    key: 'subcategory',
    sorter: (a, b) => a.subcategory.localeCompare(b.subcategory),
  },
  {
    title: 'Quantity',
    dataIndex: 'quantity',
    key: 'quantity',
    sorter: (a, b) => a.qty - b.qty,
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Total',
    key: 'total',
    render: (_, record: ShoppingItem) => record.qty * record.price,
  },
  {
    title: 'Date Added',
    dataIndex: 'dateAdded',
    key: 'dateAdded',
    sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    render: (_,record) => convertDateToLocaleStringTwoDigit(record.date),
  }
];
