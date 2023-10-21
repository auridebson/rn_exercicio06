import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Login() {
    return (
        <View>
            <Text>
                Faça seu login
            </Text>

            <TextInput style={Styles.containerCampos} placeholder="E-mail" />
            <TextInput style={Styles.containerCampos} placeholder="Password" />

            <TouchableOpacity style={StyleSheet.containerBtn}>
                <Text>Logar</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    containerBtn:{
        backgroundColor: '#ddd',
        padding: 10,
        margin: 10
    },
    containerCampos:{
        width: 120,
        backgroundColor: '#eee',
        padding: 10,
        margin: 10
    }
}
)