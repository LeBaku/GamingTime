import React from 'react'
import Constants from 'expo-constants';
import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    Avatar,
    StyledContainer,
} from './../components/styles';

import Ionicons from 'react-native-vector-icons/Ionicons';

import {Image, View, Text, StyleSheet} from 'react-native';

import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

import {ip} from './../components/Global';

// API client
import axios from 'axios';

const Profile = ({navigation}) => {

    const url = ip + '/user/get';

    const getInfo = (credentials) => {
        axios
        .get(url, credentials)
        .then(() => {
            const result = response.data;
            const { data, status } = result;
            if (status !== 'SUCCESS') {
                console.log('oups')
            } else {
                console.log(data)
            }
        })
        .catch((error) => {
            console.log(error);
        })
    }

    return (
        <InnerContainer>
            <Image source={require('./../assets/img/img2.png')} style={styles.banner}/>
            <Image source={require('./../assets/img/img3.png')} style={styles.profilePicture}/>
            <Ionicons name='settings-sharp' size={35} color={"#FFF"} style={styles.settings} />
        </InnerContainer>
    );
};

const styles = StyleSheet.create({
    profilePicture : {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: -50,
    },
    banner: {
        height: '15%',
        minWidth: '100%',
        borderWidth: 4,
        borderTop: 0,
        borderColor: "#FFF",
    },
    settings: {
        marginTop: -170,
        paddingLeft: 350,
    }
})

export default Profile;