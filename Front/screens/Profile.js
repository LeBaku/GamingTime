import React, {useState} from 'react'
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

import {Image, View, Text, StyleSheet, Pressable, Modal, TouchableWithoutFeedback, ScrollView} from 'react-native';

const Profile = ({navigation}) => {
    return (
        <InnerContainer>
            <Image source={require('./../assets/img/img2.png')} style={styles.banner}/>
            <Image source={require('./../assets/img/img3.png')} style={styles.profilePicture}/>
            {/* <Pressable onPress={() => setModalVisible(true)}> */}
                <Image source={require('./../assets/img/settings.png')} style={styles.settings} />
            {/* </Pressable> */}
            <Text style={styles.pseudo}>Pseudo</Text>
            <View style={styles.squareContainer}>
                <View style={styles.square}>
                    <Text style={styles.squareText}>Jeux</Text>
                    <Text style={styles.squareData}>25</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.squareText}>Terminés</Text>
                    <Text style={styles.squareData}>14</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.squareText}>Avis</Text>
                    <Text style={styles.squareData}>4</Text>
                </View>
            </View>
            <ScrollView marginTop={10} showsVerticalScrollIndicator={false} directionalLockEnabled={true}>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Collection</Text>
                    <Text style={styles.showAll}>Voir tout</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/img/games/darksouls.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/celeste.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/deadcells.png')} style={styles.games}/>
                </ScrollView>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Jeux Préférés</Text>
                    <Text style={styles.showAll}>Voir tout</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/img/games/supermario.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/castlevania_order.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/celeste.png')} style={styles.games}/>
                </ScrollView>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Avis récents</Text>
                    <Text style={styles.showAll}>Voir tout</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <View style={styles.review}>
                        <View style={styles.squareReview}>
                            <Image source={require('./../assets/img/games/isaac.png')} style={styles.gamesReview}/>
                            <View style={styles.stars}>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                            </View>
                            <Text style={styles.textReview}>Je trouve le jeu vraiment très bien avec les cacas qui explosent et tout, beaucoup de contenus ...</Text>
                        </View>
                        <View style={styles.squareReview}>
                            <Image source={require('./../assets/img/games/hollowknight.png')} style={styles.gamesReview}/>
                            <View style={styles.stars}>
                                <Ionicons name={'star'} color={'red'} size={18}/>
                                <Ionicons name={'star'} color={'red'} size={18}/>
                                <Ionicons name={'star'} color={'red'} size={18}/>
                                <Ionicons name={'star'} color={'red'} size={18}/>
                                <Ionicons name={'star'} color={'red'} size={18}/>
                            </View>
                            <Text style={styles.textReview}>Trop stylé le chevalier du vide la c’est un 5 étoiles direct même pas de réfléchir tu connais. Ce ...</Text>
                        </View>
                        <View style={styles.squareReview}>
                            <Image source={require('./../assets/img/games/wipeout.png')} style={styles.gamesReview}/>
                            <View style={styles.stars}>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                                <Ionicons name={'star'} color={'yellow'} size={18}/>
                            </View>
                            <Text style={styles.textReview}>La vitesse ca va vraiment beaucoup trop vite a         vrooooooooooooooooooooooooooooooooooooo...</Text>
                        </View>
                    </View>
                </ScrollView>
                <View style = {{backgroundColor: "#121212", height: 120}}/>
            </ScrollView>
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
        marginLeft: 350,
        marginTop: -180,
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    centeredModalView: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        flex: 1,
    },
    modalView: {
        margin: 80,
        borderRadius: 20,
        padding: 130,
        alignItems: "center",
        shadowColor: "#FFF",
        shadowOpacity: 0.6,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: "#121212"
    },
    pseudo: {
        color: "#FFF",
        fontSize: 20,
        marginTop: 140,
    },
    squareContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    square: {
        marginLeft: 10,
        marginRight: 10,
        height: 40,
        width: 95,
        backgroundColor: "#323030",
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    squareText: {
        color: "#FFF",
        fontSize: 13,
    },
    squareData: {
        color: "#FFE500",
        fontWeight: 'bold',
        fontSize: 18,
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
    review: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        flexDirection: 'row',
    },
    gamesReview: {
        marginTop: -40,
        width: 76,
        height: 101,
        resizeMode: 'contain',
    },
    squareReview: {
        height: 130,
        width: 180,
        marginTop: 20,
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: "#323030",
        borderRadius: 15,
    },
    stars: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: -50,
        marginLeft: 80,
        marginRight: 5,
    },
    textReview: {
        marginTop: 32,
        marginRight: 10,
        marginLeft: 10,
        color: "#FFF",
        fontSize: 13,
    },
})

export default Profile;