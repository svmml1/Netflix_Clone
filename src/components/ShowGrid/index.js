import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import ShowThumbnails from '../ShowThumb';
import { styles } from './styles'

export function ShowGrid({title,showList}) {
  return (
    <View style={styles.genreGrid}>
        <Text style={styles.generHead}>{title}</Text>
        <View style={styles.genreShows}>
            <ShowThumbnails showList={showList}/>
        </View>
  </View>
  );
}

