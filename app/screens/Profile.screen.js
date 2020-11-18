import { Button, View } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const Profile = ()=>{

    handleAddImage = () => {
        alert('handleAddImage')
    }
    return (
        <ScreenContainer>
            <View>
            <Text>
                Profile screen
            </Text>
            </View>
            <Button title="AddImages" onPress={handleAddImage}/>
        </ScreenContainer>
    )
}