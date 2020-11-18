import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const AddTravel = ()=>{
    return (
        <ScreenContainer>
            <View>
            <Text style={styles.txt}>
                AddTravel screen
            </Text>
            </View>
            <Button title="Add Travel" onPress={() => alert('added')}/>
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