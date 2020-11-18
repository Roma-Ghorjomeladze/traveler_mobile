import React from 'react';
import { Button, View, Text, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const SettingsScreen = ({navigation})=>{
    return (
        <ScreenContainer>
            <View>
              <Text style={styles.txt}>
                Settings screen
              </Text>
            </View>
            <Button title="Toggle Drawer" onPress={() => {navigation.toggleDrawer()}}/>
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