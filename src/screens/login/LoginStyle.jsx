import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#121212",
},
header:{
    marginTop: 40,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
},
backbtn: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
},
headerText:{
    fontSize: 20,
    fontWeight: '700',
    color: '#FFFFFF',
    marginLeft: 20,
    flex: 1,
    fontFamily:'Roboto',
    textAlign:'center',
},
infoContainer:{
    flex:1,
},
emailText:{
    marginLeft:20,
    fontSize: 24,
    fontWeight: '700',
    color: '#FFFFFF',
    marginTop: 80,
    fontFamily:'Roboto',
},
emailInput:{
    marginTop:20,
    marginLeft:20,
    borderRadius:5,
    borderWidth:0.5,
    borderColor:'#535353',
    height:50,
    width:'90%',
    color:'white'
},
logInWithText:{
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom:30,
    fontFamily:'Roboto',
    textAlign:'center',
},
emailInputError: {
  borderColor: 'red',
  borderWidth: 2,
},

errorText: {
  color: 'red',
  marginLeft: 20,
  marginTop: 5,
},
button1:{
    marginTop:20,
    marginLeft:20,
    marginBottom:30,
    borderRadius: 999,
    width:'90%',
    height:50,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:'#1DB954'
},
button2:{
    marginBottom:10,
    marginLeft:20,
    borderRadius: 999,
    width:'90%',
    height:50,
    borderWidth:1,
    borderColor:'#535353',
    justifyContent:'center',
    alignItems:"center",
    flexDirection: 'row',
},
buttonText:{ 
    fontSize:16,
    fontWeight:'bold',
    fontFamily:'Roboto',
},
iconContainer: {
    position: 'absolute',
    left: 20,
},
googleIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
},
fBIcon: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
},
iconText:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'bold',
    fontFamily:'Roboto',
    marginLeft: 12,
    textAlign:'center',
},
noAccount:{
    marginTop:120,
    fontSize: 16,
    fontWeight: '400',
    color: '#ffffff',
    fontFamily:'Roboto',
    textAlign:'center',
},
signUpButton:{
    fontSize:16,
    fontWeight:'700',
    fontFamily:'Roboto',
    color:'#ffffff',
    marginTop:15,
    textAlign:'center',
},
})
export default styles;