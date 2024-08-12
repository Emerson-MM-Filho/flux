import React, { useState } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { ThemedText } from "@/components/ThemedText"
import { ThemedView } from "@/components/ThemedView"
import CategoryInterface from '@/interfaces/category';
import { useCategories } from "@/hooks/useCategories"
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler"
import { Icon } from "@/components/Icon"
import { router } from "expo-router"


export default function searchCategory() {
  const categories = useCategories();
  const [filteredCategories, setFilteredCategories] = useState<CategoryInterface[]>(categories);
  const [searchText, setSearchText] = useState('');

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
    router.back()
    router.setParams({ category_id: category.id.toString() });
  }

  const handleCreateCategory = () => {
    console.debug('Creating category with name:', searchText);
    router.push("categoryForm");
    router.setParams({ category_name: searchText });
  }

  return (
    <ThemedView style={styles.mainContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            onChange={handleSearchInputChange}
            placeholder='Search for a category'
            style={styles.searchInput}
            value={searchText}
          />
          {
            searchText !== '' && (
              <TouchableOpacity
                style={styles.clearSearchButton}
                onPress={() => {
                  setSearchText('');
                  setFilteredCategories(categories);
                }}
              >
                <ThemedText>Clear</ThemedText>
              </TouchableOpacity>
            )
          }
        </View>
        {
          searchText === '' && (
            <ScrollView>
              {filteredCategories.map(item => {
                return (
                  <TouchableOpacity
                    key={item ? item.id : 'empty'}
                    style={styles.categoryCard}
                    onPress={() => item && handleCategorySelection(item)}
                  >
                    {item && (
                      <Icon iconName={item.icon} containerStyle={{ backgroundColor: item.color }} />
                    )}
                    {item && (
                      <ThemedText style={styles.categoryName}>
                        {item.name}
                      </ThemedText>
                    )}
                  </TouchableOpacity>
                )
              })}
            </ScrollView>
          )
        }
        {
          searchText !== '' && (
            <TouchableOpacity style={styles.newCategoryContainer} onPress={handleCreateCategory}>
              <ThemedText style={styles.newCategoryText}>+ Add "{searchText}"</ThemedText>
            </TouchableOpacity>
          )
        }
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
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchInput: {
    backgroundColor: '#262626',
    color: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
    flexGrow: 1,
  },
  clearSearchButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#262626',
    alignSelf: 'flex-start',
  },
  categoryCard: {
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    backgroundColor: '#262626',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
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
