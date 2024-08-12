import { StyleSheet, FlatList, TextInput, ScrollView, View } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CategoryInterface, { availableIcons } from '@/interfaces/category';
import { useState } from 'react';
import { ThemedText } from './ThemedText';

const availableColors = [
    '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082', '#EE82EE', '#FFC0CB', '#FFD700', '#FF8C00',
    '#FF1493', '#FF00FF', '#00FF00', '#00FFFF', '#0000FF', '#8A2BE2', '#A52A2A', '#D2691E', '#FF7F50', '#6495ED',
    '#DC143C', '#00FFFF', '#00008B', '#008B8B', '#B8860B', '#A9A9A9', '#006400', '#BDB76B', '#8B008B', '#556B2F',
];

export interface CreateCategoryInterface {
    id?: CategoryInterface['id'];
    name?: CategoryInterface['name'];
    icon?: CategoryInterface['icon'];
    color?: CategoryInterface['color'];
}

interface CategoryFormProps {
    categorie: CreateCategoryInterface;
}

const generateCategoryId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

const CategoryForm = ({ categorie }: CategoryFormProps) => {
    const [newCategory, setNewCategory] = useState<CategoryInterface>({
        id: categorie.id || parseInt(generateCategoryId()),
        name: categorie.name || '',
        icon: categorie.icon || availableIcons[0],
        color: categorie.color || availableColors[0],
    });

    const handleCategoryNameChange = (e: any) => {
        if (!newCategory) return;

        setNewCategory({
            ...newCategory,
            name: e.nativeEvent.text,
        });
    }

    return (
        <ThemedView>
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
                        onChange={handleCategoryNameChange}
                        placeholder='Category name'
                        selectTextOnFocus
                    />
                </ThemedView>
                <ThemedText>Icon</ThemedText>
                {/* <ScrollView horizontal style={{ backgroundColor: "#454444", borderRadius: 8 }}> */}
                    <FlatList
                        data={availableIcons.slice(0, 30)}
                        keyExtractor={item => item}
                        numColumns={10}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
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
                {/* </ScrollView> */}
                <ThemedText>Color</ThemedText>
                {/* <ScrollView horizontal style={{ backgroundColor: "#454444", borderRadius: 8 }}> */}
                    <FlatList
                        data={availableColors}
                        keyExtractor={item => item}
                        numColumns={10}
                        columnWrapperStyle={{ justifyContent: 'space-between' }}
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
                {/* </ScrollView> */}
            </ThemedView>
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
});