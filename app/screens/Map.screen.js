import { Button, View } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const MapScreen = ()=>{

    handleAddImage = () => {
        alert('handleAddImage')
    }
    return (
        <ScreenContainer>
            <View>
            <Text>
                MapScreen screen
            </Text>
            </View>
            <Button title="AddImages" onPress={handleAddImage}/>
        </ScreenContainer>
    )
}