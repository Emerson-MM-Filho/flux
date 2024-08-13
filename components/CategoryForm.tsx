import { StyleSheet, FlatList, TextInput, View, Button } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface, { availableIcons } from '@/interfaces/category';
import { useState } from 'react';
import { ThemedText } from './ThemedText';
import IconInterface from '@/interfaces/icon';
import { addCategory, useCategories } from "@/hooks/useCategories"
import { router } from 'expo-router'

const availableColors = [
    '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE', '#FFC0CB', '#FFD700', '#FF8C00',
    '#FF1493', '#FF00FF', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#A52A2A', '#D2691E', '#FF7F50', '#6495ED',
    '#DC143C', '#00FFFF', '#00008B', '#008B8B', '#B8860B', '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#556B2F',
];

interface CreateCategoryInterface {
    id?: CategoryInterface['id'];
    name?: CategoryInterface['name'];
    icon?: CategoryInterface['icon'];
    color?: CategoryInterface['color'];
}

interface CategoryFormProps {
    categorie: CreateCategoryInterface;
}

const generateCategoryId = () => {
    return useCategories().length
}

const CategoryForm = ({ categorie }: CategoryFormProps) => {
    const [newCategory, setNewCategory] = useState<CategoryInterface>({
        id: categorie.id || generateCategoryId(),
        name: categorie.name || '',
        icon: categorie.icon || availableIcons[0],
        color: categorie.color || availableColors[0],
    });

    const handleNameChange = (e: any) => {
        const name = e.nativeEvent.text as string
        console.debug(`Setting '${name}' as new name`)
        setNewCategory({
            ...newCategory,
            name,
        });
    }

    const handleIconChange = (icon: IconInterface['name']) => {
        console.debug(`Setting '${icon}' as new icon`)
        setNewCategory({
            ...newCategory,
            icon
        });
    }

    const handleColorChange = (color: string) => {
        console.debug(`Setting '${color}' as new color`)
        setNewCategory({
            ...newCategory,
            color
        });
    }

    const handleSave = () => {
        addCategory(newCategory)
        
        router.dismiss(2)
        router.setParams({ category_id: newCategory.id.toString() });
    }

    return (
        <ThemedView style={{ gap: 16, marginTop: 16 }}>
            <ThemedView style={styles.previewContainer}>
                <Icon
                    iconName={newCategory.icon}
                    iconSize={32}
                    containerStyle={{
                        ...styles.previewIcon,
                        backgroundColor: newCategory?.color
                    }}
                />
                <TextInput
                    style={styles.textInput}
                    value={newCategory?.name}
                    onChange={handleNameChange}
                    placeholder='Category name'
                    selectTextOnFocus
                />
            </ThemedView>
            <ThemedText>Icon</ThemedText>
            <FlatList
                data={availableIcons}
                style={styles.optionsContainer}
                keyExtractor={item => item}
                numColumns={5}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleIconChange(item)}
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
            <ThemedText>Color</ThemedText>
            <FlatList
                data={availableColors}
                style={styles.optionsContainer}
                keyExtractor={item => item}
                numColumns={5}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => handleColorChange(item)}
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
            <Button title="Submit" onPress={handleSave} />
        </ThemedView>
    );
};

export default CategoryForm;

const styles = StyleSheet.create({
    textInput: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
    },
    previewContainer: {
        alignItems: 'center',
        gap: 16,
    },
    previewIcon: {
        width: 64,
        height: 64,
    },
    optionsContainer: {
        maxHeight: '30%',
        padding: 8,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#838383',
    }
});