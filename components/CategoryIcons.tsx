import { StyleSheet, FlatList, TextInput } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface from '@/interfaces/category';
import { useState } from 'react';
import { ThemedText } from './ThemedText';

interface CategoryIconsProps {
    onSearchPress: () => void;
    onCategorySelect: () => void;
    categories: CategoryInterface[];
    setCategories: (categories: CategoryInterface[]) => void;
    setSelectedCategory: (category: CategoryInterface) => void;
    selectedCategory: CategoryInterface | null;
}

export const CategoryIcons = ({ onSearchPress, categories, setSelectedCategory, selectedCategory, setCategories, onCategorySelect }: CategoryIconsProps) => {
    const [showAllCategories, setShowAllCategories] = useState(false);
    const [filteredCategories, setFilteredCategories] = useState<CategoryInterface[]>(categories);
    const [searchText, setSearchText] = useState('');
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

    const selectCategory = (category: CategoryInterface) => {
        setSelectedCategory(category);
        setShowAllCategories(false);

        const newCategories = categories.filter(c => c.id !== category.id);
        newCategories.unshift(category);
        setFilteredCategories(newCategories);
        setCategories(newCategories);
        onCategorySelect();
    }

    const onSearch = (e: any) => {
        if (e.nativeEvent.text === '') {
            setFilteredCategories(categories);
            return;
        }

        setSearchText(e.nativeEvent.text);
        const filtered = categories.filter(category => category.name.toLowerCase().startsWith(e.nativeEvent.text.toLowerCase()));
        setFilteredCategories(filtered);
    }

    return (
        <ThemedView>
            {
                showAllCategories ? (
                    <>
                        <TextInput
                            placeholder='Search for a category'
                            style={styles.searchInput}
                            onChange={onSearch}
                        />
                        <FlatList
                            data={createRows(filteredCategories, columns)}
                            keyExtractor={item => item.id}
                            numColumns={columns}
                            columnWrapperStyle={{justifyContent: 'space-between'}}
                            renderItem={({ item }) => {
                                const isEmpty = item.id.includes('empty');
                                let cardStyle = styles.categoryCard;
                                if (isEmpty) cardStyle = {...styles.categoryCard, backgroundColor: 'transparent'};
                                return (
                                    <TouchableOpacity
                                        onPress={() => isEmpty ? null : selectCategory(item)}
                                        key={item.id}
                                        style={cardStyle}
                                    >
                                        <Icon icon={item.icon} backgroundColor={item.color}/>
                                        <ThemedText style={styles.categoryName}>
                                            {(item.name.length > 5) ? item.name.slice(0, 5) + '...' : item.name}
                                        </ThemedText>
                                    </TouchableOpacity>
                                );
                            }}
                        />
                        {
                            searchText !== '' && (
                                <TouchableOpacity onPress={() => setShowAllCategories(false)} style={styles.newCategoryContainer}>
                                    <ThemedText style={styles.newCategoryText}>+ Add "{searchText}"</ThemedText>
                                </TouchableOpacity>
                            )
                        }
                    </>
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
    searchInput: {
        backgroundColor: '#262626',
        color: 'white',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
    },
    newCategoryContainer: {
        padding: 2,
        paddingHorizontal: 8,
        borderRadius: 8,
        alignSelf: 'flex-start',
        backgroundColor: '#262626',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 2,
    },
    newCategoryText: {
        color: '#838383',
    }
});