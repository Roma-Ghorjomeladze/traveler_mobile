import React from 'react';
import { StyleSheet, View, StyleSheet } from "react-native"

export const ScreenContainer = ({children})=>{
    <View style = {styles.container}>{children}</View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})