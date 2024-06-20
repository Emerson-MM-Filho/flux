import { StyleSheet } from 'react-native'
import { Icon } from './Icon'
import { ThemedView } from './ThemedView'

export const CategoryIcons = () => {
    return (
        <ThemedView style={styles.container}>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626' borderWidth={2} borderColor='#DC9E00'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/cart-icon.png")} backgroundColor='#262626'/>
            <Icon icon={require("@/assets/images/search-icon.png")} backgroundColor='#838383'/>
        </ThemedView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});