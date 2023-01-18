import {
    View,
    Text,
    ImageBackground,
    TouchableOpacity,
    Image,
} from 'react-native'
import {TextBox,UIButton} from '../components'
import {images,logo} from '../constant'
function Welcome(props)
{
    return (
        <View style={{flex:1}}>
            <Text>Hello World</Text>
        </View>
    )
}
export default Welcome