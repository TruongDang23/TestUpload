import {TextInput} from 'react-native'
function TextBox()
{
    return (
        <TextInput style={{
            borderWidth:2,
            borderColor:'white',
            width:200,
            height:30,
            marginBottom:5,
            paddingHorizontal:5,
        }}
        cursorColor={'black'}/>
    )
}
export default TextBox