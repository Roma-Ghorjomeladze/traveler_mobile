import React from  'react';
import { Button, StyleSheet } from "react-native"

export const AddTravelImages = ({title, onClick})=>{
    <Button style = {styles.btn} title={title} onPress = {onClick}/>
}

const styles = StyleSheet.create({
    btn: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5
    }
})