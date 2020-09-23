import React, {Component} from 'react';
import { render } from 'react-dom';
import {View,  Text, Button} from 'react-native';
import { TextInput } from 'react-native-paper';

class Search extends Component{

    // chuyển đến textInput(trường) tiếp theo
    _focusNextField(nextField) {
        this.refs[nextField].focus()
    }
    render() {
        const { navigation } = this.props;
        return(
            <View >
                <Text>Search Screen</Text>
                <Text>Search Screen</Text>
                <Text>Search Screen</Text>
                <Text>Search Screen</Text>
                <Button
                    title='go to profile'
                    onPress={() => navigation.navigate('Profile')}
                />

                    <TextInput
                       ref='1'
                       placeholder='Normal'
                       returnKeyType='next'
                       blurOnSubmit={false}
                       onSubmitEditing={() => this._focusNextField('2')}
                       onSubmitEditing={() => this.refs}

                   />
                   <TextInput
                       ref='2'
                       keyboardType='email-address'
                       placeholder='Email Address'
                       returnKeyType='next'
                       blurOnSubmit={false}
                       onSubmitEditing={() => this._focusNextField('3')}
                   />
                   <TextInput
                       ref='3'
                       keyboardType='url'
                       placeholder='URL'
                       returnKeyType='next'
                       blurOnSubmit={false}
                       onSubmitEditing={() => this._focusNextField('4')}
                   />
                   <TextInput
                       ref='4'
                       keyboardType='numeric'
                       placeholder='Numeric'
                       blurOnSubmit={false}
                       onSubmitEditing={() => this._focusNextField('5')}
                   />
                   <TextInput
                       ref='5'
                       keyboardType='numbers-and-punctuation'
                       placeholder='Numbers & Punctuation'
                       returnKeyType='done'
                   />
            </View>
        );
    }
}
// const Search = ({navigation}) => {
//     return(
//         <View style={{flex:1,justifyContent:'center',alignItems: 'center'}}>
//             <Button
//                 title='go to profile'
//                 onPress={() => navigation.navigate('Profile')}
//             />
            
//         </View>
//     );
// }
export default Search;

// export default class Search extends Component{
//     constructor(props) {
//         super(props);
//         this.passTextInput = null
//     }
//     // chuyển đến textInput(trường) tiếp theo
//     _focusNextField(nextField) {
//         this.refs[nextField].focus()
//     }

//     render(){
        
//         return(
//             <View>
//             <TextInput
//                     ref='1'
//                     placeholder='Normal'
//                     returnKeyType='next'
//                     blurOnSubmit={false}
//                     onSubmitEditing={() => this._focusNextField('2')}
//                 />
//                 <TextInput
//                     ref='2'
//                     keyboardType='email-address'
//                     placeholder='Email Address'
//                     returnKeyType='next'
//                     blurOnSubmit={false}
//                     onSubmitEditing={() => this._focusNextField('3')}
//                 />
//                 <TextInput
//                     ref='3'
//                     keyboardType='url'
//                     placeholder='URL'
//                     returnKeyType='next'
//                     blurOnSubmit={false}
//                     onSubmitEditing={() => this._focusNextField('4')}
//                 />
//                 <TextInput
//                     ref='4'
//                     keyboardType='numeric'
//                     placeholder='Numeric'
//                     blurOnSubmit={false}
//                     onSubmitEditing={() => this._focusNextField('5')}
//                 />
//                 <TextInput
//                     ref='5'
//                     keyboardType='numbers-and-punctuation'
//                     placeholder='Numbers & Punctuation'
//                     returnKeyType='done'
//                 />
//         </View>
//         );
//     }
// }
