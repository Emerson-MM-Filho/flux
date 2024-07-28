import { StyleSheet, FlatList } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface from '@/interfaces/category';
import { useState } from 'react';
import { ThemedText } from './ThemedText';

interface CategoryIconsProps {
    onSearchPress: () => void;
    categories: CategoryInterface[];
    setSelectedCategory: (category: CategoryInterface) => void;
    selectedCategory: CategoryInterface | null;
}

export const CategoryIcons = ({ onSearchPress, categories, setSelectedCategory, selectedCategory }: CategoryIconsProps) => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const columns = 5;

    function createRows(data: CategoryInterface[], columns: number) {
        const rows = Math.floor(data.length / columns);
        let lastRowElements = data.length - (rows * columns);
        while (lastRowElements !== columns) {
            if (lastRowElements === 0) {
                break;
            }
            data.push({
                id: `empty-${lastRowElements}`,
                name: '',
                icon: '',
                color: '',
            });
            lastRowElements += 1;
        }
        return data;
    }

    return (
        <ThemedView>
            {
                showAllCategories ? (
                    <FlatList
                        data={createRows(categories, columns)}
                        keyExtractor={item => item.id}
                        numColumns={columns}
                        columnWrapperStyle={{justifyContent: 'space-between'}}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => setSelectedCategory(item)}
                                    key={item.id}
                                    style={styles.categoryCard}
                                >
                                    <Icon
                                        icon={item.icon}
                                        backgroundColor={item.id.includes('empty') ? 'transparent' : item.color}
                                    />
                                    <ThemedText style={styles.categoryName}>{
                                        (item.name.length > 5) ? item.name.slice(0, 5) + '...' : item.name
                                    }</ThemedText>
                                </TouchableOpacity>
                            );
                        }}
                    />
                ) : (
                    <ThemedView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        {
                            categories.slice(0, 5).map(category => (
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
                            onPress={() => {
                                setShowAllCategories(true);
                                onSearchPress();
                            }}
                        >
                            <Icon icon={require("@/assets/images/search-icon.png")} backgroundColor='#838383'/>
                        </TouchableOpacity>
                    </ThemedView>
                )
            }
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    categoryCard: {
        padding: 8,
        borderRadius: 8,
        marginBottom: 8,
        backgroundColor: '#262626',
        alignItems: 'center',
    },
    categoryName: {
        textAlign: 'center',
        color: 'white',
        fontSize: 12,
        marginTop: 4,
    },
});