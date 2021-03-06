import React, {useContext} from 'react';
import { Button, View, Text, StyleSheet } from "react-native"
import { ScreenContainer } from "react-native-screens"

import { AuthContext } from '../context/auth.context';

export const Profile = ()=>{

    const {signOut} = useContext(AuthContext);
    return (
        <ScreenContainer>
            <View>
            <Text style={styles.txt}>
                Profile screen
            </Text>
            </View>
            <Button title="sign out" onPress={() => signOut()}/>
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