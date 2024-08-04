import { StyleSheet, FlatList, TextInput, ScrollView, View } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface, { CreateCategoryInterface, availableIcons } from '@/interfaces/category';
import { useState } from 'react';
import { ThemedText } from './ThemedText';
import { router } from 'expo-router';

const availableColors = [
  '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE', '#FFC0CB', '#FFD700', '#FF8C00',
  '#FF1493', '#FF00FF', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#A52A2A', '#D2691E', '#FF7F50', '#6495ED',
  '#DC143C', '#00FFFF', '#00008B', '#008B8B', '#B8860B', '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#556B2F',
];


interface CategoryIconsProps {
  categorySelectedCallback: () => void;
  cancelCallback: () => void;
  categories: CategoryInterface[];
  setCategories: (categories: CategoryInterface[]) => void;
  setSelectedCategory: (category: CategoryInterface) => void;
  selectedCategory: CategoryInterface | null;
}

export const CategoryIcons = ({
  categories,
  setSelectedCategory,
  selectedCategory,
  setCategories,
  categorySelectedCallback,
  cancelCallback
}: CategoryIconsProps) => {
  const [contentToShow, setContentToShow] = useState("quickSelect");
  const [filteredCategories, setFilteredCategories] = useState<CategoryInterface[]>(categories);
  const [newCategory, setNewCategory] = useState<CreateCategoryInterface | null>(null);
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
    categorySelectedCallback();
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
    cancelCallback();
  }

  const handleTouchCreateCategory = () => {
    if (searchText === '') return;


    // TODO: An AI should be able to suggest a color and icon based on the category name
    setNewCategory({
      name: searchText,
      icon: 'plus',
      color: '#262626',
    });
    setSearchText('');
    setContentToShow("newCategory");
  }

  const handleCategoryNameChange = (e: any) => {
    if (!newCategory) return;

    setNewCategory({
      ...newCategory,
      name: e.nativeEvent.text,
    });
  }

  const cancelCategoryCreation = () => {
    setNewCategory(null);
    setContentToShow("search");
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
              <TouchableOpacity onPress={() => handleTouchCreateCategory()} style={styles.newCategoryContainer}>
                <ThemedText style={styles.newCategoryText}>+ Add "{searchText}"</ThemedText>
              </TouchableOpacity>
            )
          }
        </>
      )}
      {contentToShow === "newCategory" && (
        <ThemedView>
          <ThemedView style={styles.searchingHeaderStyle}>
            <ThemedText>Create category</ThemedText>
            <TouchableOpacity onPress={cancelCategoryCreation}>
              <ThemedText style={{ color: '#838383' }}>Cancel</ThemedText>
            </TouchableOpacity>
          </ThemedView>
          <ThemedView style={{gap: 16, marginTop: 16}}>
            <ThemedView style={styles.newCategoryPreviewContainer}>
              <Icon
                iconName={newCategory?.icon}
                iconSize={32}
                containerStyle={{
                  ...styles.newCategoryPreviewIcon,
                  backgroundColor: newCategory?.color
                }}
              />
              <TextInput
                style={styles.categoryNameInput}
                value={newCategory?.name}
                onChange={handleCategoryNameChange}
                placeholder='Category name'
                selectTextOnFocus
              />
            </ThemedView>
            <ThemedText>Icon</ThemedText>
            <ScrollView horizontal style={{backgroundColor: "#454444", borderRadius: 8}}>
              <FlatList
                data={availableIcons.slice(0, 30)}
                keyExtractor={item => item}
                numColumns={10}
                columnWrapperStyle={{ justifyContent: 'space-between'}}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (!newCategory) return;
                      setNewCategory({
                        ...newCategory,
                        icon: item,
                      });
                    }}
                    key={item}
                  >
                    <Icon
                      iconName={item}
                      iconColor={newCategory?.icon === item ? newCategory.color : undefined}
                      containerStyle={{
                        backgroundColor: newCategory?.icon === item ? '#262626' : '#838383',
                        borderWidth: newCategory?.icon === item ? 2 : 0,
                        borderColor: newCategory?.color,
                        margin: 4,
                      }}
                    />
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
            <ThemedText>Color</ThemedText>
            <ScrollView horizontal style={{backgroundColor: "#454444", borderRadius: 8}}>
              <FlatList
                data={availableColors}
                keyExtractor={item => item}
                numColumns={10}
                columnWrapperStyle={{ justifyContent: 'space-between'}}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      if (!newCategory) return;
                      setNewCategory({
                        ...newCategory,
                        color: item,
                      });
                    }}
                    key={item}
                  >
                    <View style={{
                        backgroundColor: item,
                        borderWidth: newCategory?.color === item ? 2 : 0,
                        borderColor: newCategory?.color === item ? "white" : "transparent",
                        margin: 4,
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                      }}
                    ></View>
                  </TouchableOpacity>
                )}
              />
            </ScrollView>
          </ThemedView>
        </ThemedView>
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