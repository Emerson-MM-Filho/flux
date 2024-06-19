import CategoryInterface from "./category"
import TagInterface from "./tag"

interface TransactionInterface {
  id: number;
  title: string;
  date: string;
  value: string;
  category: CategoryInterface;
  tags: TagInterface[];
}

export default TransactionInterface;
