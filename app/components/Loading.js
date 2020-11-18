import React from  'react';
import { View, Text,  StyleSheet, Dimensions } from "react-native"

export const LoadingComponent = ()=>{
    return (
      <View style={styles.container}>
        <Text>
          Loading...
        </Text>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: Math.round(Dimensions.get('window').width),
      height: Math.round(Dimensions.get('window').height),
      justifyContent: "center",
      alignItems: "center",
    }
})