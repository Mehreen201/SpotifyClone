import { StyleSheet } from "react-native";
const styles= StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#121212',
    },
    header:{
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        paddingTop:40,
        height:100,
    },   
    avatar:{
        width:40,
        height:40,
        borderRadius:50,
    },
    all:{
        width:40,
        height:30,
        borderRadius:999,
        backgroundColor:'#1DB954',
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
    },
    allText:{
        fontSize:12,
        fontFamily:'Roboto',
        color:'#000000'
    },
    music:{
        width:50,
        height:30,
        borderRadius:999,
        backgroundColor:'#535353',
        marginLeft:10,
        justifyContent:'center',
        alignItems:'center',
    },
     musicText:{
        fontSize:12,
        fontFamily:'Roboto',
        color:'white'
    },
    mediaItemCard:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#2A2A2A',
        margin: 8,
        borderRadius: 8,
        alignItems: 'center',
        overflow: 'hidden',
        height: 50,
    },
    mediaItemImage:{
        width: 50,
        height: 50,
        resizeMode:'stretch'
    },
    mediaItemText:{
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',
        flex: 1,
        paddingHorizontal: 10,
    },
    bottomBar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height:100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#121212', 
        zIndex: 2,
        elevation:20,
    },
    gradient: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 90,
        height: 70,
        zIndex: 10,
    },
    tab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    premiumIcon: {
        width: 24,
        height: 24,
    },
    activeText: {
        color: '#FFFFFF',
        fontSize: 12,
        marginTop: 4,
        fontWeight: '600',
    },
    text: {
        color: '#B3B3B3',
        fontSize: 12,
        marginTop: 4,
    },

})
export default styles;