import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'; 


import homeScreen from './src/screens/Home';
import noobHome from './src/screens/HomeTwo';
import comingSoonScreen from './src/screens/Comming';
import downloadScreen from './src/screens/Download';

const TabNavigator = createMaterialBottomTabNavigator(  
  {  
      Home: 
      { screen: homeScreen,  
          navigationOptions:
          {  
              tabBarLabel:'Home',  
              tabBarIcon: ({ tintColor }) => (  
                  <View>  
                      <Icon solid color={tintColor} size={25} name={'home'}/>  
                  </View>),  

     
   
                  
          }  
      },  

      Coming: { screen: comingSoonScreen,  
        navigationOptions:{  
            tabBarLabel:'Coming',  
            tabBarIcon: ({ tintColor }) => (  
                <View>  
                    <Icon solid color={tintColor} size={25} name={'video-library'}/>  
                </View>),  
            
              
        }  
    },


    Download:{ screen: downloadScreen,
      navigationOptions:{
        tabBarLabel:'Download',
        tabBarIcon: ({tintColor}) =>(
          <View>
              <Icon type="material-community" solid color={tintColor} size={25} name={'download-circle-outline'} />
          </View>
          ),
   


      }

    },


  },
  {  
    initialRouteName: "Home",  

      activeColor: "white", 
      inactiveColor:"grey",
      barStyle: { backgroundColor: 'black' },    
  
  },  
  
  
  );


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createAppContainer(TabNavigator); 