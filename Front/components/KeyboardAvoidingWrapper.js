import React from 'react';

// keyboard avoiding view
import { KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';

const KeyboardAvoidingWrapper = ({children}) => {
    return(
            <ScrollView style = {{flex: 1, backgroundColor: "#121212"}}>
                <KeyboardAvoidingView behavior='position' styled={{flex: 1}} keyboardVerticalOffset={-100}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    {children}
                </TouchableWithoutFeedback>
                </KeyboardAvoidingView>
            </ScrollView>
    );
}

export default KeyboardAvoidingWrapper;