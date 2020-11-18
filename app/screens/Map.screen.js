import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const MapScreen = ()=>{
    return (
        <ScreenContainer>
            <View>
            <Text style = {styles.txt}>
                Map screen
            </Text>
            </View>
            <Button title="Maps" onPress={() => alert('hello from maps')}/>
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