import {TouchableOpacity,Text} from 'react-native'
function UIButton(props){
    return (
        <TouchableOpacity style={{
            borderWidth:3,
            borderColor:'white',
            borderRadius:5,
            height:70,
            marginHorizontal:90,
            marginVertical:10,
        }}>

        </TouchableOpacity>
    )
}
export default UIButton