import { Text, View } from "react-native-animatable";
import { StyleSheet } from "react-native";

export default function Menu() {
    return (
        <View style={Styles.containerGeral}>
            <Text style={Styles.containerTexto}>Minha página de Menu</Text>
            <Text>Minha página de Menu</Text>
        </View>
    )
}


const Styles = StyleSheet.create({
    containerGeral:{
        backgroundColor: '#ddd',
        margin: 20,
        fontSize: 24,
        padding: 20
    },
    containerTexto:{
        color: 'blue',
        fontSize: 24,
        padding: 15
    }
})