import React, { useEffect, useState } from 'react'
import { Controller, useForm } from "react-hook-form"
import { Button, StyleSheet, TextInput, Image, View } from "react-native"
import { CategoryIcons } from "./CategoryIcons"
import { Tag } from './Tag'
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"
import CategoryInterface from '@/interfaces/category'
import DropdownComponent from './Dropdown'
import { useCategories } from '@/hooks/useCategories'
import OperationInterface from '@/interfaces/operation'
import { MultiSelect } from 'react-native-element-dropdown'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import RNDateTimePicker from '@react-native-community/datetimepicker';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

function darkenHexColor(hex: string, amount: number = 40): string {
  // Remove the hash at the start if it's there
  hex = hex.replace(/^#/, '');

  // Parse the r, g, b values
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  // Decrease each color component by the specified amount
  r = Math.max(0, r - amount);
  g = Math.max(0, g - amount);
  b = Math.max(0, b - amount);

  // Convert r, g, b values back to hex
  const newHex = '#' +
      (r < 16 ? '0' : '') + r.toString(16) +
      (g < 16 ? '0' : '') + g.toString(16) +
      (b < 16 ? '0' : '') + b.toString(16);

  return newHex;
}

interface TransactionFormProps {
  style?: any;
  selectedCategoryId?: number;
}

const operation_type_data = [
  { label: 'Credit Card', value: '1', icon: { name: 'credit-card' } },
  { label: 'Débit', value: '2', icon: { name: 'dollar-sign' } },
] as OperationInterface[];

const dropdownLeftIcon = { width: 24, height: 24 }
const bank_account_data = [
  { label: 'Nubank', value: '1', image: <Image source={require("@/assets/images/nubank-logo.png")} style={dropdownLeftIcon}/> },
  { label: 'Inter', value: '2', image: <Image source={require("@/assets/images/inter-logo.png")} style={dropdownLeftIcon}/> },
  { label: 'Bradesco', value: '3', image: <Image source={require("@/assets/images/bradesco-logo.png")} style={dropdownLeftIcon}/> },
  { label: 'C6', value: '4', image: <Image source={require("@/assets/images/c6-logo.png")} style={dropdownLeftIcon}/> },
  { label: 'Banco do Brasil', value: '5', image: <Image source={require("@/assets/images/banco-do-brasil-logo.png")} style={dropdownLeftIcon}/> },
]
const tags_data = [
  { id: 1, name: 'Cinema', color: '#F54545' },
  { id: 2, name: 'Off site work', color: '#F5A245' },
  { id: 3, name: 'Travel', color: '#F5F545' },
  { id: 4, name: 'Food', color: '#45F545' },
  { id: 5, name: 'Health', color: '#45F5F5' },
  { id: 6, name: 'Clothes', color: '#4545F5' },
  { id: 7, name: 'Tech', color: '#A545F5' },
  { id: 8, name: 'Home', color: '#F545F5' },
  { id: 9, name: 'Transport', color: '#F545A2' },
  { id: 10, name: 'Education', color: '#F54545' },
  { id: 11, name: 'Gift', color: '#F5A245' },
  { id: 12, name: 'Other', color: '#F5F545' },
]


const TransactionForm = ({ style, selectedCategoryId }: TransactionFormProps) => {
  const [categories, setCategories] = useState<CategoryInterface[]>(useCategories());
  const [selectedCategory, setSelectedCategory] = useState<CategoryInterface>(categories.find(category => category.id === selectedCategoryId) || categories[0]);
  const [showInstallmentsField, setShowInstallmentsField] = useState(true);
  const [currentBankAccountImage, setCurrentBankAccountImage] = useState(bank_account_data[0].image);
  const [showDatePicker, setShowDatePicker] = useState(false);

  useEffect(() => {
    if (selectedCategoryId) {
      const selected = categories.find(category => category.id === selectedCategoryId);
      if (!selected) {
        console.error(`Category with id ${selectedCategoryId} not found`);
        return;
      }

      setSelectedCategory(selected);
      const newCategories = categories.filter(c => c?.id !== selectedCategoryId);
      newCategories.unshift(selected);
      setCategories(newCategories);
    }
  }, [selectedCategoryId]);

  const {control, handleSubmit, formState: { errors }, watch} = useForm({
    defaultValues: {
      amount: "0,00",
      due_date: new Date(),
      category: selectedCategory.id,
      name: "",
      bank_account: bank_account_data[0].value,
      operation_type: operation_type_data[0].value,
      description: "",
      installments: 1,
      tags: [],
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

      setCurrentBankAccountImage(bank_account_data.find(item => item.value === triggerBankAccountField)?.image || bank_account_data[0].image);
    }, [triggerOperationTypeField, triggerBankAccountField]);


  const onSubmit = (data: any) => {
    console.info(`Creating transaction with data: ${JSON.stringify(data)}`);
  };

  return (
    <ThemedView style={{...styles.mainContainer, ...style}}>
      <Controller
        control={control}
        render={() => (
          <CategoryIcons
            categories={categories}
            selectedCategory={selectedCategory}
            setSelectedCategory={(category) => setSelectedCategory(category)}
            setCategories={setCategories}
          />
        )}
        name="category"
      />
      <ThemedView style={styles.between}>
        <ThemedText style={{color: selectedCategory.color}}>{selectedCategory.name}</ThemedText>
        <Controller
          control={control}
          rules={{ required: true }}
          render={({ field: { onChange, value, ref } }) => {
            if (showDatePicker) {
              return (
                <BottomSheet snapPoints={['50%']} >
                  <BottomSheetView>
                    <RNDateTimePicker
                      value={new Date()}
                      mode="date"
                      display='spinner'
                      onChange={(_, selectedDate) => {
                        onChange(_)
                      }}
                      style={{backgroundColor: "transparent"}}
                    />
                  </BottomSheetView>
                </BottomSheet>
              )
            }

            return (
              <TouchableWithoutFeedback onPress={() => setShowDatePicker(true)}>
                <ThemedText style={{color: "#838383"}}>{value.toLocaleDateString()}</ThemedText>
              </TouchableWithoutFeedback>
            )
          }}
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
              keyboardType='decimal-pad'
              selectTextOnFocus
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
            leftIcon={currentBankAccountImage}
            selectedTextStyle={{  marginLeft: 8 }}
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
              leftIcon={showInstallmentsField ? {name: 'credit-card'} : {name: 'dollar-sign'}}
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
                  value={value.toString()}
                  style={[styles.textInput, {flex: 1}]}
                  keyboardType='number-pad'
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
      <Controller
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, onBlur, value } }) => (
          <ThemedView style={{flexDirection: 'row-reverse'}}>
            <MultiSelect
              style={{flex: 1}}
              data={tags_data}
              onChange={onChange}
              onBlur={onBlur}
              labelField={"name"}
              valueField={"id"}
              value={value}
              placeholder='+ Add tag'
              placeholderStyle={{color: "#838383"}}

              renderRightIcon={() => undefined}
              
              search
              searchField='name'
              searchPlaceholder='Search tags'
              
              flatListProps={{contentContainerStyle: {gap: 8}}}
              
              activeColor='transparent'
              containerStyle={{backgroundColor: "#2E2E2E", borderRadius: 8, padding: 12, borderColor: "#838383", borderWidth: 1}}
              inputSearchStyle={{borderColor: "#838383", borderRadius: 8, color: "white", margin: 0}}

              renderItem={(item, selected) => {
                const tag = (
                  <Tag
                    id={item.id}
                    name={item.name}
                    mainColor={item.color}
                    backgroundColor={darkenHexColor(item.color)}
                  />
                )
                if (!selected) {
                  return tag;
                }
                return (
                  <View style={{
                    borderRadius: 20,
                    borderColor: 'white',
                    borderWidth: 2,
                    padding: 2,
                  }}>
                    {tag}
                  </View>
                )
              }}
              renderSelectedItem={(item, unSelect) => (
                <TouchableWithoutFeedback onPress={() => unSelect && unSelect(item)} style={{marginRight: 8}}>
                  <Tag
                    id={item.id}
                    name={item.name}
                    mainColor={item.color}
                    backgroundColor={darkenHexColor(item.color)}
                  />
                </TouchableWithoutFeedback>
              )}
            />
          </ThemedView>
        )}
        name="tags"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
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
