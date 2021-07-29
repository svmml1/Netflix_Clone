import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
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
      
      bannerPic:{
        width:'100%',
        height:'100%',
        resizeMode: 'stretch',
      },
      header:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
      },
      headContent:{
        flexDirection:'row',
      },

      logoHolder:{
        alignSelf:'flex-start',
        paddingLeft:20,
       flex:1,
       
      },
      headBtnHolder:{
  
        flexDirection:'row-reverse',
      
        flex:1,
        alignItems: 'center',
        
      },

      headLogo:{
        paddingHorizontal:10,
      },
      catBtn:{
        flexDirection:'row',
    
        width:'80%',
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        paddingTop:10,
    
      },
      catText:{
        flex:1,
        fontSize:18,
        color:'white',
        textAlign:'center',
      },
    
    
      bannerPlay:{
        position: 'absolute', //Here is the trick
          bottom: 0, //Here is the trick
          width:"100%",
          height:100,
          alignItems: 'center',
        justifyContent: 'center',
      },
    
      gener:{
        flexDirection:'row',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
      
        
        
      },
    
      BannerBox:{
        flexDirection:'row',
        width:'90%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20,
        
        
      },
    
      genreText:{
        flex:1,
        fontSize:15,
        color:'white',
        textAlign:'center',
      },
    
      bannerBtnSide:{
        flex:1
      },
    
      sideBtnText:{
        color:'white',
        textAlign:'center',
      },
    
      showPlay:{
    
        width:'30%',
        height:'90%',
        flexDirection:'row',
        backgroundColor:'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
    
      },
    
      playBtn:{
        fontWeight:'bold',
        fontSize:18,
      },
    
    
    
    
      thumbFrame:{
        width:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical:10,
        marginTop:10,
      },
    
      
    
      
    
    
    
    
    
    
    
      item:{
        width:110,
        height:150,
        borderRadius:8,
        overflow:'hidden',
        margin:10,
      },
    
      showImage:{
        width:'100%',
        height:'100%',
        
      },
    
    });