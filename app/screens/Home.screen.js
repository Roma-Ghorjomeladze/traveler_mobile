import { Button, View } from "react-native"
import { ScreenContainer } from "react-native-screens"

export const Home = ()=>{

    hanldeHomeBtn = () => {
        alert('home btn')
    }
    return (
        <ScreenContainer>
            <View>
            <Text>
                Home screen
            </Text>
            </View>
            <Button title="Home" onPress={hanldeHomeBtn}/>
        </ScreenContainer>
    )
}