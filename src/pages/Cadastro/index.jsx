import React from "react";
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from "react-native";

export default function Cadastro() {
    return (
        <View>
            <Text>
                Página de Cadastro
            </Text>

            <TextInput placeholder="Nome" />
            <TextInput placeholder="Telefone" />
            <TextInput placeholder="Data de Nascimento" />

            <TouchableOpacity style={StyleSheet.containerBtn}>
                <Text>Cadastrar</Text>
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