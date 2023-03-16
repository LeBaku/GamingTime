import * as React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Image } from 'react-native';

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

import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

export default function Search({ navigation }) {
    const [text, onChangeText] = React.useState(false);
    return (
        <InnerContainer>
            <View>
                <TextInput style={styles.input} onChangeText={onChangeText} value={text} placeholder="Recherche"/>
                <Ionicons name={'search'} color={"#D9D9D9"} size={20} style={{marginTop: -25, marginLeft: 10}}/>
            </View>
            <ScrollView marginTop={10} showsVerticalScrollIndicator={false} directionalLockEnabled={true}>
                <View style={styles.categoryContainer} marginTop={30}>
                    <Text style={styles.categoryTitle}>Jeux en tendances</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/img/games/pizzatower.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/thymesia.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/cursedgolf.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/bearbreakfast.png')} style={styles.games}/>
                </ScrollView>
                <View style={styles.categoryContainer} marginTop={30}>
                    <Text style={styles.categoryTitle}>Vos amis ont aimé</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/img/games/castlevania.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/eldenring.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/entergungeon.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/noita.png')} style={styles.games}/>
                </ScrollView>
                <View style={styles.categoryContainer} marginTop={30}>
                    <Text style={styles.categoryTitle}>Sortie anticipées</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/img/games/scorn.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/godofwar.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/hogwarts.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/zelda.png')} style={styles.games}/>
                </ScrollView>
                <View style = {{backgroundColor: "#121212", height: 120}}/>
            </ScrollView>
        </InnerContainer>
    );
}

const styles = StyleSheet.create({
    input: {
        marginTop: 40,
        height: 30,
        width: 380,
        borderWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
        paddingLeft: 30,
        backgroundColor: "#313131",
        color: "#D9D9D9",
        borderRadius: 10,
    },
    categoryContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 15,
        justifyContent: 'space-between',
    },
    categoryTitle: {
        color: "#FFF",
        fontSize: 30,
    },
    showAll: {
        color: "#FFE500",
        marginRight: 10,
        marginTop: 10,
    },
    scrollGame: {
        marginTop: 10,
        marginRight: 10,
    },
    games: {
        width: 130,
        height: 173,
        resizeMode: 'contain',
        marginLeft: 10,
        marginRight: 10,
    },
});