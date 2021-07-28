
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements'
import { LinearGradient } from 'expo-linear-gradient';


import logo from '../../../assets/netflixN.png'
import banner from '../../../assets/thumbs/johnWick.jpg'
import bB from '../../../assets/thumbs/breakingBad.jpg'
import bN from '../../../assets/thumbs/brooklynNine.jpg'
import dD from '../../../assets/thumbs/dareDevil.jpg'
import dark from '../../../assets/thumbs/dark.png'
import dS from '../../../assets/thumbs/demonSlayer.jpg'
import frN from '../../../assets/thumbs/friends.jpg'
import jW from '../../../assets/thumbs/johnWick.jpg'
import jK from '../../../assets/thumbs/jujutsuKaisen.jpg'
import luCi from '../../../assets/thumbs/lucifer.jpg'
import mH from '../../../assets/thumbs/moneyHeist.jpg'
import nT from '../../../assets/thumbs/naruto.jpg'
import pB from '../../../assets/thumbs/peakyBlinder.jpg'
import pnS from '../../../assets/thumbs/punisher.jpg'
import rM from '../../../assets/thumbs/rickMorty.jpg'
import sT from '../../../assets/thumbs/strangerThings.jpg'
import suits from '../../../assets/thumbs/suits.jpeg'



export default function homeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scroller}>
                <View style={styles.scrollWrapper}>
                    <View style={styles.bigFrame}>

                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    scroller: {
        width: '99%',
        backgroundColor: 'black',
    },
    scrollWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bigFrame:{
        width:'98%',
        height:530,
        backgroundColor:'black',
        marginTop:30,
      }, 
});