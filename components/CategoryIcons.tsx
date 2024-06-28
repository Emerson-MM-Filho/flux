import { StyleSheet } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface CategoryIconsProps {
    onSearchPress: () => void;
}

export const CategoryIcons = ({ onSearchPress }: CategoryIconsProps) => {
    return (
        <ThemedView style={styles.container}>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626' borderWidth={2} borderColor='#DC9E00'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <TouchableOpacity
                onPress={onSearchPress}
              >
                <Icon icon={require("@/assets/images/search-icon.png")} backgroundColor='#838383'/>
            </TouchableOpacity>
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});