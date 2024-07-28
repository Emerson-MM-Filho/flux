import { StyleSheet } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface from '@/interfaces/category';

interface CategoryIconsProps {
    onSearchPress: () => void;
    categories: CategoryInterface[];
    setSelectedCategory: (category: CategoryInterface) => void;
    selectedCategory: CategoryInterface | null;
}

export const CategoryIcons = ({ onSearchPress, categories, setSelectedCategory, selectedCategory }: CategoryIconsProps) => {
    return (
        <ThemedView style={styles.container}>
            {
                categories.map((category) => (
                    <TouchableOpacity
                        onPress={() => setSelectedCategory(category)}
                        key={category.id}
                    >
                        <Icon
                            icon={category.icon}
                            backgroundColor={'#262626'}
                            borderWidth={selectedCategory?.id === category.id ? 2 : 0}
                            borderColor={selectedCategory?.id === category.id ? category.color : undefined}
                        />
                    </TouchableOpacity>
                ))
            }
            <TouchableOpacity
                onPress={onSearchPress}
              >
                <Icon icon={require("@/assets/images/search-icon.png")} backgroundColor='#838383'/>
            </TouchableOpacity>
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});