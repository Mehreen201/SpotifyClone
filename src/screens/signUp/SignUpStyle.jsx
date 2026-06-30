import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#121212",
    justifyContent:'center',
    alignItems: "center",
   
},
image:{
    width:80,
    height:80,
    marginTop:60,
},
heading:{
    fontSize: 32,
    fontWeight: '700',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 30,
    lineHeight: 40,
    fontFamily:'Roboto',
},
button1:{
    marginTop:150,
    borderRadius: 999,
    width:'90%',
    height:50,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:'#1DB954'
},
button2:{
    marginTop:5,
    borderRadius: 999,
    width:'90%',
    height:50,
    borderWidth:1,
    borderColor:'#535353',
    justifyContent:'center',
    alignItems:"center",
},
buttonText:{ 
    fontSize:16,
    fontWeight:'bold',
    fontFamily:'Roboto',
},
})
export default styles;