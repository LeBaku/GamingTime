import * as React from 'react';

import {Image, View, Text, StyleSheet, ScrollView} from 'react-native';

import {InnerContainer} from './../components/styles';

export default function Game({ navigation }) {
    return (
        <InnerContainer>
            <ScrollView marginTop={10} showsVerticalScrollIndicator={false} directionalLockEnabled={true}>
                <View style={styles.categoryContainer} marginTop={50}>
                    <Text style={styles.categoryTitle}>Joué récemment</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <Image source={require('./../assets/img/games/satisfactory.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/slaythespire.png')} style={styles.games}/>
                    <Image source={require('./../assets/img/games/simcity.png')} style={styles.games}/>
                </ScrollView>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Complétions</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <View style={styles.gameStyle}>
                        <Image source={require('./../assets/img/games/zeroranger.png')} style={styles.games}/>
                        <View style={styles.opacity}/>
                        <View style={styles.percentage}>
                            <Text style={styles.infos}>100%</Text>
                            <View style={{backgroundColor: "#FFE500", height: 5, width: 100, marginTop: 2, borderRadius: 5}}/>
                        </View>
                    </View>
                    
                    <View style={styles.gameStyle}>
                        <Image source={require('./../assets/img/games/ageofmythology.png')} style={styles.games}/>
                        <View style={styles.opacity}/>
                        <View style={styles.percentage}>
                            <Text style={styles.infos}>84%</Text>
                            <View style={{backgroundColor: "#FFE500", height: 5, width: 84, marginTop: 2, borderRadius: 5}}/>
                        </View>
                    </View>
                    <View style={styles.gameStyle}>
                        <Image source={require('./../assets/img/games/personaroyal.png')} style={styles.games}/>
                        <View style={styles.opacity}/>
                        <View style={styles.percentage}>
                            <Text style={styles.infos}>62%</Text>
                            <View style={{backgroundColor: "#FFE500", height: 5, width: 62, marginTop: 2, borderRadius: 5}}/>
                        </View>
                    </View>
                    <View style={{height: 173}}></View>
                </ScrollView>
                <View style={styles.categoryContainer}>
                    <Text style={styles.categoryTitle}>Vos prochaines sorties</Text>
                </View>
                <ScrollView horizontal={true} style={styles.scrollGame} showsHorizontalScrollIndicator={false}>
                    <View style={styles.gameStyle}>
                        <Image source={require('./../assets/img/games/hades2.png')} style={styles.games}/>
                        <View style={styles.opacity}/>
                        <View style={styles.percentage}>
                            <Text style={styles.infos}>75</Text>
                            <Text style={styles.days}>Jours</Text>
                        </View>
                    </View>
                    <View style={styles.gameStyle}>
                        <Image source={require('./../assets/img/games/hollowknight2.png')} style={styles.games}/>
                        <View style={styles.opacity}/>
                        <View style={styles.percentage}>
                            <Text style={styles.infos}>203</Text>
                            <Text style={styles.days}>Jours</Text>
                        </View>
                    </View>
                    <View style={styles.gameStyle}>
                        <Image source={require('./../assets/img/games/earthblade.png')} style={styles.games}/>
                        <View style={styles.opacity}/>
                        <View style={styles.percentage}>
                            <Text style={styles.infos}>2</Text>
                            <Text style={styles.days}>Ans</Text>
                        </View>
                    </View>
                    <View style={{height: 173}}></View>
                </ScrollView>
                <View style = {{backgroundColor: "#121212", height: 120}}/>
            </ScrollView>
        </InnerContainer>
    );
}

const styles = StyleSheet.create({
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
    opacity: {
        backgroundColor: "#000",
        width: 130,
        height: 173,
        marginTop: -173,
        opacity: 0.5,
        borderRadius: 10,
    },
    gameStyle: {
        alignItems: 'center',
    },
    infos: {
        color: "#FFE500",
        fontSize: 35,
        fontWeight: 'bold',
    },
    percentage: {
        alignItems: 'center',
        marginTop: -140
    },
    days: {
        color: "#FFE500",
        fontSize: 25,
    },
})