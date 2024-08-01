import React, { useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { Button, StyleSheet, TextInput } from "react-native"
import { CategoryIcons } from "./CategoryIcons"
import { Tag } from './Tag'
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
import { CategoryInterface } from '@/interfaces/category'
import DropdownComponent from './Dropdown'
import Feather from '@expo/vector-icons/Feather';


interface TransactionFormProps {
  style?: any;
  onCancel: () => void;
}

const icon = (icon: string) => (
  <Feather
    style={[{marginRight: 5}]}
    color={'white'}
    name={icon}
    size={20}
  />
)

const operation_type_data = [
  { label: 'Credit Card', value: '1', icon: icon('credit-card') },
  { label: 'Débit', value: '2', icon: icon('dollar-sign') },
];

const bank_account_data = [
  { label: 'Nubank', value: '1', icon: icon('credit-card') },
  { label: 'Inter', value: '2', icon: icon('credit-card') },
  { label: 'Bradesco', value: '3', icon: icon('credit-card') },
  { label: 'C6', value: '4', icon: icon('credit-card') },
]


const TransactionForm = ({ style, onCancel }: TransactionFormProps) => {
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
  const [selectedCategory, setSelectedCategory] = useState<CategoryInterface>(categories[0]);
  const [showInstallmentsField, setShowInstallmentsField] = useState(true);
  const [currentBankAccountIcon, setCurrentBankAccountIcon] = useState(bank_account_data[0].icon);

  const {control, handleSubmit, formState: { errors }, watch} = useForm({
    defaultValues: {
      amount: "0,00",
      due_date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
      name: "",
      bank_account: "1",
      operation_type: "1",
      description: "",
      installments: "1",
    },
  });
    const triggerOperationTypeField = watch('operation_type', '1');
    const triggerBankAccountField = watch('bank_account', '1');

    React.useEffect(() => {
      if (triggerOperationTypeField === '1') {
        setShowInstallmentsField(true);
      } else {
        setShowInstallmentsField(false);
      }

      setCurrentBankAccountIcon(bank_account_data.find(item => item.value === triggerBankAccountField)?.icon || bank_account_data[0].icon);
    }, [triggerOperationTypeField, triggerBankAccountField]);


  const onSubmit = (data: any) => console.log(data);

  const cancelForm = () => {
    onCancel();
  }

  return (
    <ThemedView style={{...styles.mainContainer, ...style}}>
      {
        isSearchingCategory ? null : (
          <ThemedView style={styles.bottomSheetHeader}>
            <ThemedText style={styles.bottomSheetTitle}>New transaction</ThemedText>
            <ThemedText style={{color: "#838383"}} onPress={cancelForm}>
              Cancel
            </ThemedText>
          </ThemedView>
        )
      }
      <CategoryIcons
        searchPressCallback={() => setIsSearchingCategory(true)}
        categorySelectedCallback={() => setIsSearchingCategory(false)}
        cancelCallback={() => setIsSearchingCategory(false)}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        setCategories={setCategories}
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
              <DropdownComponent
                data={bank_account_data}
                onBlur={onBlur}
                onChange={onChange}
                value={value}
                leftIcon={currentBankAccountIcon}
              />
            )}
            name="bank_account"
          />
          <ThemedView style={styles.operationContainer}>
            <Controller
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, onBlur, value } }) => (
                <DropdownComponent
                  data={operation_type_data}
                  onBlur={onBlur}
                  onChange={onChange}
                  value={value}
                  leftIcon={showInstallmentsField ? icon('credit-card') : icon('dollar-sign')}
                  dropdownStyle={{flex: 1}}
                />
              )}
              name="operation_type"
            />
            {
              showInstallmentsField && (
                <Controller
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                      placeholder="Installments"
                      placeholderTextColor="white"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                      style={[styles.textInput, {flex: 1}]}
                    />
                  )}
                  name="installments"
                />
              )
            }

          </ThemedView>
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
  bottomSheetHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 16,
  },
  bottomSheetTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  searchingHeaderStyle: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center"
  },
  operationContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexGrow: 1,
    gap: 8,
  },
});
