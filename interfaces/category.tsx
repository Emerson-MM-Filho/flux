import { Feather } from '@expo/vector-icons';

export const availableIcons = Object.keys(Feather.glyphMap) as (keyof typeof Feather.glyphMap)[];

interface CategoryInterface {
  id: number;
  name: string;
  icon: keyof typeof Feather.glyphMap;
  color: string;
}

export default CategoryInterface;