import { StyleSheet } from "react-native";
const styles= StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: '#121212',
        overflow:"visible",
    },
    // header
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
    // media item card
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
    sectionTitle: {
        color: "#fff",
        fontSize: 24,
        fontWeight: "700",
        marginHorizontal: 16,
        marginTop: 25,
        marginBottom: 15,
      },

    // Recents List

    recentCard:{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#181818',
        margin: 8,
        borderRadius: 8,
        alignItems: 'center',
        overflow: 'hidden',
        height: 70,
    },
    recentImage:{
        width: 50,
        height: 50,
        resizeMode:'stretch'
    },
    recentText:{
        color: '#ffffff',
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 2,
    },
    recentSubtitleText:{
        color: '#B3B3B3',
        fontSize: 12,
        marginTop: 2,
    },

    // Recommended Stations
    recommendationsList: {
        paddingHorizontal: 16,
    },

    recommendationCard: {
        width: 150,
        marginRight: 18,
    },

    recommendationImage: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },

    recommendationTitle: {
        color: "#fff",
        fontSize: 15,
        fontWeight: "700",
        marginTop: 10,
    },

    recommendationSubtitle: {
        color: "#B3B3B3",
        fontSize: 13,
        marginTop: 4,
        lineHeight: 18,
    },

    // Mini Player
    miniPlayer: {
        position: "absolute",
        left: 8,
        right: 8,
        bottom: 88,
        height: 64,
        backgroundColor: "#751323",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
       zIndex: 5,
       },
    miniImage: {
        width: 48,
        height: 48,
        borderRadius: 4,
    },
    miniInfo: {
        flex: 1,
        marginLeft: 10,
    },

    miniTitle: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "600",
    },
    miniArtist: {
        color: "#D9D9D9",
        fontSize: 12,
        marginTop: 2,
    },
     miniIcon: {
        marginHorizontal: 8,
    },

    // Bottom Bar
    gradient: {
       position: "absolute",
       left: 0,
       right: 0,
       bottom: 88,
       height: 60,
    },
    bottomBar: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 88,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(18,18,18,0.82)",
        borderTopWidth: 0.5,
        borderTopColor: "rgba(255,255,255,0.08)",
        zIndex: 2,
    },
    barShadow: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 25,
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