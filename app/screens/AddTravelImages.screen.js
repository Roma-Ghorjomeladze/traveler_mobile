import { Button, View } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const AddTravelImages = ()=>{

    handleAddImage = () => {
        alert('handleAddImage')
    }
    return (
        <ScreenContainer>
            <View>
            <Text>
                AddTravelImages screen
            </Text>
            </View>
            <Button title="AddImages" onPress={handleAddImage}/>
        </ScreenContainer>
    )
}