import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const Home = ()=>{
    return (
        <ScreenContainer>
            <View>
            <Text style = {styles.txt}>
                Home screen
            </Text>
            </View>
            <Button title="Home" onPress={() => {alert('zd')}}/>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
    txt: {
        width: "100%",
        fontSize: 25,
        marginBottom: 40,
    }
})