import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Feather from '@expo/vector-icons/Feather';

const data = [
    { label: 'Credit Card', value: '1' },
    { label: 'Débit', value: '2' },
];

interface DropdownComponentProps {
    onBlur: () => void;
    onChange: (value: string) => void;
    value: string;
}

const DropdownComponent = ({onBlur, onChange, value}: DropdownComponentProps) => {
    return (
        <Dropdown
            data={data}
            style={styles.dropdown}
            selectedTextStyle={styles.selectedTextStyle}
            itemContainerStyle={styles.itemContainerStyle}
            containerStyle={styles.containerStyle}
            itemTextStyle={styles.itemTextStyle}
            iconStyle={styles.iconStyle}
            activeColor="#222"
            labelField="label"
            valueField="value"
            value={value}
            onBlur={onBlur}
            onChange={item => {
                onChange(item.value);
            }}
            renderLeftIcon={() => {
                let icon = "credit-card";
                if (value === "2") {
                    icon = "dollar-sign";
                }
                return <Feather
                    style={styles.icon}
                    color={'white'}
                    name={icon}
                    size={20}
                />
            }}
        />
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    dropdown: {
        borderWidth: 1,
        borderColor: "#838383",
        borderRadius: 8,
        padding: 12,
        color: "white",
        flex: 1
    },
    icon: {
        marginRight: 5,
    },
    selectedTextStyle: {
        color: "white",
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    itemContainerStyle: {
        backgroundColor: "#333",
        borderRadius: 8,
    },
    itemTextStyle: {
        color: "white",
    },
    containerStyle: {
        backgroundColor: "#333",
        borderColor: "#838383",
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.25,
    },
});