import {View ,Text,TouchableOpacity, TextInput,Image} from 'react-native';
import styles from './LoginStyle';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { auth, db } from "../../../firebase.config";
import {
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { sendSignInLinkToEmail } from "firebase/auth";
import * as Linking from "expo-linking";


export default function Login ({navigation}){

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const actionCodeSettings = {
  url: "http://localhost:8081/finishSignIn",
  handleCodeInApp: true,
};

  const sendEmailLink = async () => {
  if (!email.trim()) {
    setError(true);
    return;
  }

  try {
    const q = query(
      collection(db, "users"),
      where("email", "==", email)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      alert("Account doesn't exist. Please Sign Up.");
      return;
    }

    await sendSignInLinkToEmail(
      auth,
      email,
      actionCodeSettings
    );

    localStorage.setItem("emailForSignIn", email);

    alert("Login link sent! Check your email.");
  } catch (error) {
    alert(error.message);
    console.log(error);
  }
};
    return (

    <View style={styles.container}>
      <View style= {styles.header}>
      <TouchableOpacity style={styles.backbtn} onPress={()=> navigation.navigate('SignUp')}>
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
        <Text style={styles.headerText}>Log in to Spotify</Text>
     </View>  

      <View style={styles.infoContainer}>
      <Text style={styles.emailText}>Email</Text>
      <TextInput  
      style={[ styles.emailInput,
       error && styles.emailInputError
       ]}
      value={email}
      onChangeText={(text) => {
      setEmail(text);
      setError(false);
      }}
      />

      {error && (
     <Text style={styles.errorText}>
      Please enter your email.
     </Text>
      )}

      <TouchableOpacity style= {styles.button1}
      onPress={sendEmailLink}>
        <Text style={[styles.buttonText, {color:'black'}]}>Continue</Text>
       </TouchableOpacity>
 
      <Text style={styles.logInWithText}>Or log in with</Text>

       <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Home')}>
        <View style={styles.iconContainer}>
         <Image
         source={require('../../../assets/images/logo/google.png')}
         style={styles.googleIcon}
        />
        </View>
        <Text style={styles.iconText}>
         Google
        </Text>
       </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={() => navigation.navigate('Home')} >
        <View style={styles.iconContainer}>
         <Image
         source={require('../../../assets/images/logo/Facebook.png')}
         style={styles.fBIcon}
        />
        </View>
        <Text style={styles.iconText}>
        Facebook
        </Text>
       </TouchableOpacity>

       <Text style={styles.noAccount}>Don't have an Account?</Text>
       <TouchableOpacity>
        <Text style={styles.signUpButton} onPress={() => navigation.navigate('SignUpWith')}>Sign up</Text>
       </TouchableOpacity>
      </View>



    </View>


    );
  
}
