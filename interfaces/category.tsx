import { Feather } from '@expo/vector-icons';

interface CategoryInterface {
  id: number;
  name: string;
  icon: keyof typeof Feather.glyphMap;
  color: string;
}

export default CategoryInterface;