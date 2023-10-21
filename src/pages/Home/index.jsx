import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";


export default function Home() {
    return (
        <View>
            <Text>
                Home Page
            </Text>

            <TouchableOpacity style={StyleSheet.containerBtn}>
                <Text>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleSheet.containerBtn}>
                <Text>Cadastro</Text>
            </TouchableOpacity>
            <TouchableOpacity style={StyleSheet.containerBtn}>
                <Text>História</Text>
            </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    containerBtn:{
        backgroundColor: '#ddd',
        width: 150,
        height: 70,

    }
}
)