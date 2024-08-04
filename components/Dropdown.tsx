import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Icon } from './Icon';
import IconInterface from '@/interfaces/icon';


interface DropdownData {
    label: string;
    value: string;
    image?: React.JSX.Element;
    icon?: IconInterface
}

interface DropdownComponentProps {
    data: DropdownData[];
    searchField?: keyof DropdownData;
    onBlur: () => void;
    onChange: (value: string) => void;
    value: string;
    leftIcon?: IconInterface | React.JSX.Element;
    dropdownStyle?: object;
    selectedTextStyle?: object;
}

const DropdownComponent = ({data, onBlur, onChange, value, searchField, leftIcon, dropdownStyle, selectedTextStyle }: DropdownComponentProps) => {
    return (
        <Dropdown
            data={data}
            style={[styles.dropdown, dropdownStyle]}
            selectedTextStyle={[styles.selectedTextStyle, selectedTextStyle]}
            itemContainerStyle={styles.itemContainerStyle}
            containerStyle={styles.containerStyle}
            activeColor="#222"
            labelField="label"
            valueField="value"
            searchField={searchField}
            value={value}
            onBlur={onBlur}
            onChange={item => onChange(item.value)}
            renderLeftIcon={() => {
                if (leftIcon) {
                    if ('name' in leftIcon) { 
                        return <Icon
                            iconName={leftIcon.name}
                            iconColor={leftIcon.color}
                            backgroundColor='transparent'
                            containerStyle={{
                                width: 24,
                                height: 24,
                                marginRight: 5
                            }}
                        />
                    } else {
                        return leftIcon;
                    }
                }
            }}
            renderItem={(item) => {
                return (
                    <View style={styles.itemContainerStyle}>
                        {item.icon && (
                            <Icon
                                iconName={item.icon?.name}
                                iconColor={item.icon?.color}
                                containerStyle={{
                                    width: 24,
                                    height: 24,
                                    marginRight: 5
                                }}
                            />
                        )}
                        {item.image && item.image}
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