import { StyleSheet, FlatList, TextInput } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface from '@/interfaces/category';
import { useState } from 'react';
import { ThemedText } from './ThemedText';
import { router } from 'expo-router';

interface CategoryIconsProps {
  categories: CategoryInterface[];
  setCategories: (categories: CategoryInterface[]) => void;
  selectedCategory: CategoryInterface | null;
  setSelectedCategory: (category: CategoryInterface) => void;
}

export const CategoryIcons = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  setCategories,
}: CategoryIconsProps) => {
  const [contentToShow, setContentToShow] = useState("quickSelect");
  const [filteredCategories, setFilteredCategories] = useState<CategoryInterface[]>(categories);
  const [searchText, setSearchText] = useState('');
  const columns = 5;

  function createRows(data: any[], columns: number) {
    const rows = Math.floor(data.length / columns);
    let lastRowElements = data.length - (rows * columns);
    while (lastRowElements !== columns) {
      if (lastRowElements === 0) {
        break;
      }
      data.push(null);
      lastRowElements += 1;
    }
    return data;
  }

  const handleCategorySelection = (category: CategoryInterface) => {
    setSelectedCategory(category);
    setContentToShow("quickSelect");

    const newCategories = categories.filter(c => c?.id !== category.id);
    newCategories.unshift(category);
    setFilteredCategories(newCategories);
    setCategories(newCategories);
    setSearchText('');
  }

  const handleSearchInputChange = (e: any) => {
    if (e.nativeEvent.text === '') {
      setFilteredCategories(categories);
      return;
    }

    setSearchText(e.nativeEvent.text);
    const filtered = categories.filter(category => category?.name.toLowerCase().startsWith(e.nativeEvent.text.toLowerCase()));
    setFilteredCategories(filtered);
  }

  const cancelCategorySearch = () => {
    setContentToShow("quickSelect");
    setFilteredCategories(categories);
    setSearchText('');
  }

  const handleCreateCategory = () => {
    console.debug('Opening category form with name:', searchText);
    router.setParams({ category_name: searchText });
    router.push("categoryForm");
  }

  return (
    <ThemedView>
      {contentToShow === "quickSelect" && (
        <ThemedView style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {
            categories.slice(0, 5).map(category => (
              <TouchableOpacity
                onPress={() => setSelectedCategory(category)}
                key={category.id}
              >
                <Icon
                  iconName={category.icon}
                  iconColor={selectedCategory?.id === category.id ? category.color : undefined}
                  containerStyle={{
                    backgroundColor: '#262626',
                    borderWidth: selectedCategory?.id === category.id ? 2 : 0,
                    borderColor: selectedCategory?.id === category.id ? category.color : undefined,
                  }}
                />
              </TouchableOpacity>
            ))
          }
          <TouchableOpacity onPress={() => router.push("searchCategory")}>
            <Icon iconName={"search"} containerStyle={{ backgroundColor: '#838383' }} />
          </TouchableOpacity>
        </ThemedView>
      )}
      {contentToShow === "search" && (
        <>
          <ThemedView style={styles.searchingHeaderStyle}>
            <TouchableOpacity onPress={cancelCategorySearch}>
              <Icon iconName="arrow-left" iconColor='#838383'/>
            </TouchableOpacity>
            <ThemedText style={{ color: '#838383' }}>Search category</ThemedText>
            <ThemedText></ThemedText>
          </ThemedView>
          <TextInput
            placeholder='Search for a category'
            style={styles.searchInput}
            onChange={handleSearchInputChange}
          />
          <FlatList
            data={createRows(filteredCategories, columns)}
            keyExtractor={item => item ? item.id.toString() : Math.random().toString()}
            numColumns={columns}
            columnWrapperStyle={{ justifyContent: 'space-between' }}
            renderItem={({ item }) => {
              let cardStyle = styles.categoryCard;
              if (!item) cardStyle = { ...styles.categoryCard, backgroundColor: 'transparent' };
              return (
                <TouchableOpacity
                  onPress={() => item === null ? null : handleCategorySelection(item)}
                  key={item ? item.id : 'empty'}
                  style={cardStyle}
                >
                  {item && (
                    <Icon iconName={item.icon} containerStyle={{ backgroundColor: item.color }} />
                  )}
                  {item && (
                    <ThemedText style={styles.categoryName}>
                      {(item.name.length > 5) ? item.name.slice(0, 5) + '...' : item.name}
                    </ThemedText>
                  )}
                </TouchableOpacity>
              );
            }}
          />
          {
            searchText !== '' && (
              <TouchableOpacity
                onPress={handleCreateCategory}
                style={styles.newCategoryContainer}
              >
                <ThemedText style={styles.newCategoryText}>+ Add "{searchText}"</ThemedText>
              </TouchableOpacity>
            )
          }
        </>
      )}
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
  },
  searchingHeaderStyle: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  categoryNameInput: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  newCategoryPreviewContainer: {
    alignItems: 'center',
    gap: 16,
  },
  newCategoryPreviewIcon: {
    width: 64,
    height: 64,
  },
});