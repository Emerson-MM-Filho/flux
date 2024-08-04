import React, { useState } from "react"
import { StyleSheet, TextInput, FlatList } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import { ScrollView } from "react-native-gesture-handler"
import CategoryInterface from '@/interfaces/category';
import { useCategories } from "@/hooks/useCategories"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Icon } from "@/components/Icon"
import { router } from "expo-router"


export default function searchCategory() {
  const categories = useCategories();
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

  const handleSearchInputChange = (e: any) => {
    if (e.nativeEvent.text === '') {
      setFilteredCategories(categories);
      return;
    }

    setSearchText(e.nativeEvent.text);
    const filtered = categories.filter(category => category?.name.toLowerCase().startsWith(e.nativeEvent.text.toLowerCase()));
    setFilteredCategories(filtered);
  }

  const handleCategorySelection = (category: CategoryInterface) => {
    console.debug(`Selected category: ${category.id}-${category.name}`);
    router.back()
    router.setParams({ category_id: category.id.toString() });
  }

  return (
    <ThemedView style={styles.mainContainer}>
      <ScrollView>
        <TextInput
          onChange={handleSearchInputChange}
          placeholder='Search for a category'
          style={styles.searchInput}
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
                key={item ? item.id : 'empty'}
                style={cardStyle}
                onPress={() => item && handleCategorySelection(item)}
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
            <TouchableOpacity style={styles.newCategoryContainer}>
              <ThemedText style={styles.newCategoryText}>+ Add "{searchText}"</ThemedText>
            </TouchableOpacity>
          )
        }
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#2E2E2E",
    gap: 16,
    padding: 16,
    height: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  title: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchInput: {
    backgroundColor: '#262626',
    color: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
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
});
