import React from 'react'
import { Controller, useForm } from "react-hook-form"
import { Button, StyleSheet, TextInput } from "react-native"
import { CategoryIcons } from "./CategoryIcons"
import { Tag } from './Tag'
import { ThemedText } from "./ThemedText"
import { ThemedView } from "./ThemedView"

const TransactionForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      amount: "49,25",
      due_date: "19/06/2024",
      name: "Mercado Público",
      bank_account: "",
      operation_type: "Débito",
      description: "",
    },
  });
  const onSubmit = (data: any) => console.log(data);

  return (
    <ThemedView style={styles.mainContainer}>
      <CategoryIcons />
      <ThemedView style={styles.between}>
        <ThemedText>Mercado</ThemedText>
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
      <ThemedText>
        <Tag
          id={1}
          name="Food"
          mainColor="#F54545"
          backgroundColor="#8F1616"
        />
        <ThemedText style={{color: "#838383"}}>+ New Tag</ThemedText>
      </ThemedText>
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
  }
});
