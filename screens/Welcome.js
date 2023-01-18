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
            <ImageBackground 
             source={images.background}
             resizeMode='cover'
             style={{
                flex:1,
             }}
            >
                <View style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center',
                    //backgroundColor:'yellow',
                }}>
                    <Image 
                        source={images.logo}
                        style={{
                            width:150,//width/height ~= 31/40
                            height:194
                        }}
                    />
                </View>
                <View style={{
                    flex:1,
                    backgroundColor:'purple',
                }}>
                    <UIButton/>
                </View>
                <Text>Hello World</Text>
            </ImageBackground>
        </View>
    )
}
export default Welcome