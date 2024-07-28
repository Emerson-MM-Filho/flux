import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { Button, StyleSheet, TextInput } from "react-native"
import { CategoryIcons } from "./CategoryIcons"
import { Tag } from './Tag'
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
import { CategoryInterface } from '@/interfaces/category'


interface TransactionFormProps {
  style?: any;
}


const TransactionForm = ({ style }: TransactionFormProps) => {
  const [isSearchingCategory, setIsSearchingCategory] = useState(false);
  const [categories, setCategories] = useState<CategoryInterface[]>([
    {
      id: "1",
      name: "Food",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#F54545",
    },
    {
      id: "2",
      name: "Transport",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#F5A445",
    },
    {
      id: "3",
      name: "Health",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#45F545",
    },
    {
      id: "4",
      name: "Education",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#45F5A4",
    },
    {
      id: "5",
      name: "Entertainment",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#4545F5",
    },
    {
      id: "6",
      name: "Salary",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#A445F5",
    },
    {
      id: "7",
      name: "Savings",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#F545F5",
    },
    {
      id: "8",
      name: "Rent",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#F545A4",
    },
    {
      id: "9",
      name: "Pets",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#F5A445",
    },
    {
      id: "10",
      name: "Others",
      icon: require("@/assets/images/cart-icon.png"),
      color: "#A4F545",
    },
  ]);
  const [selectedCategory, setSelectedCategory] = useState<CategoryInterface | null>(categories[0]);


  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "0,00",
      due_date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
      name: "Name",
      bank_account: "",
      operation_type: "Débito",
      description: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ThemedView style={{...styles.mainContainer, ...style}}>
      <CategoryIcons
        onSearchPress={() => setIsSearchingCategory(true)}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      {!isSearchingCategory && (
        <>
          <ThemedView style={styles.between}>
            <ThemedText style={{color: selectedCategory.color}}>{selectedCategory.name}</ThemedText>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                    placeholder="Due Date"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    style={{color: "#838383"}}
                  />
              )}
              name="due_date"
            />
          </ThemedView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ThemedView style={styles.amountContainer}>
                <ThemedText style={styles.amountText}>- $</ThemedText>
                <TextInput
                  placeholder="Amount"
                  placeholderTextColor="white"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  style={{...styles.amountText, ...styles.amountInput}}
                />
              </ThemedView>
            )}
            name="amount"
          />
          {errors.amount && <ThemedText>This is required.</ThemedText>}
          <ThemedView style={styles.typeContainer}>
            <ThemedText style={styles.typeItem}>Fixo</ThemedText>
            <ThemedText style={{...styles.typeItem, backgroundColor: "#B4B4B4", color: "#262626"}}>Variável</ThemedText>
            <ThemedText style={styles.typeItem}>Extra</ThemedText>
          </ThemedView>
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Name"
                placeholderTextColor="white"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            )}
            name="name"
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Bank Account"
                placeholderTextColor="white"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            )}
            name="bank_account"
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Operation Type"
                placeholderTextColor="white"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={styles.textInput}
              />
            )}
            name="operation_type"
          />
          <Controller
            control={control}
            rules={{ required: true }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                placeholder="Description"
                placeholderTextColor="white"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                style={{...styles.textInput, height: 120}}
                multiline={true}
                numberOfLines={4}
              />
            )}
            name="description"
          />
          <ThemedView style={styles.tagContainer}>
            <Tag
              id={1}
              name="Food"
              mainColor="#F54545"
              backgroundColor="#8F1616"
            />
            <ThemedText style={{color: "#838383", fontSize: 12}}>+ New Tag</ThemedText>
          </ThemedView>
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </>
      )}
    </ThemedView>
  );
};

export default TransactionForm;

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
  },
  between: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  amountText: {
    fontSize: 32,
    lineHeight: 48,
  },
  amountInput: {
    fontSize: 32,
    lineHeight: 48,
    color: "white",
  },
  typeContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  typeItem: {
    padding: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#838383",
    borderRadius: 8,
    padding: 12,
    color: "white",
  },
  tagContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
