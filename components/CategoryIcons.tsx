import { StyleSheet } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface from '@/interfaces/category';
import { router } from 'expo-router';

interface CategoryIconsProps {
  categories: CategoryInterface[];
  selectedCategory: CategoryInterface | null;
  setSelectedCategory: (category: CategoryInterface) => void;
}

export const CategoryIcons = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoryIconsProps) => {
  return (
    <ThemedView style={styles.categoryListContainer}>
      {
        categories.slice(0, 5).map(category => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(category)}
            key={category.id}
          >
            <Icon
              iconName={category.icon}
              iconColor={selectedCategory?.id === category.id ? category.color : undefined}
              containerStyle={[
                styles.categoryIconContainer, 
                {
                  borderWidth: selectedCategory?.id === category.id ? 2 : 0,
                  borderColor: selectedCategory?.id === category.id ? category.color : undefined
                }
              ]}
            />
          </TouchableOpacity>
        ))
      }
      <TouchableOpacity onPress={() => router.push("searchCategory")}>
        <Icon iconName={"search"} containerStyle={styles.searchIconContainer} />
      </TouchableOpacity>
    </ThemedView>
  )
};

const styles = StyleSheet.create({
  categoryListContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  categoryIconContainer: {
    backgroundColor: '#262626',
  },
  searchIconContainer: {
    backgroundColor: '#838383'
  }
});