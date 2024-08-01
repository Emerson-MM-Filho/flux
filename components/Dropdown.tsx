import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';


interface DropdownData {
    label: string;
    value: string;
    image?: string;
    icon?: React.JSX.Element;
}

interface DropdownComponentProps {
    data: DropdownData[];
    searchField?: keyof DropdownData;
    onBlur: () => void;
    onChange: (value: string) => void;
    value: string;
    leftIcon?: React.JSX.Element;
    dropdownStyle?: object;
}

const DropdownComponent = ({data, onBlur, onChange, value, searchField, leftIcon, dropdownStyle }: DropdownComponentProps) => {
    return (
        <Dropdown
            data={data}
            style={[styles.dropdown, dropdownStyle]}
            selectedTextStyle={styles.selectedTextStyle}
            itemContainerStyle={styles.itemContainerStyle}
            containerStyle={styles.containerStyle}
            activeColor="#222"
            labelField="label"
            valueField="value"
            searchField={searchField}
            value={value}
            onBlur={onBlur}
            onChange={item => onChange(item.value)}
            renderLeftIcon={() => leftIcon}
            renderItem={(item) => {
                return (
                    <View style={styles.itemContainerStyle}>
                        {item.icon}
                        <Text style={styles.itemTextStyle}>{item.label}</Text>
                    </View>
                );
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
    },
    selectedTextStyle: {
        color: "white",
        marginLeft: 8,
    },
    itemContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 8,
        padding: 8,
        gap: 8,
    },
    itemTextStyle: {
        color: "white",
        flex: 1,
        fontSize: 16,
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