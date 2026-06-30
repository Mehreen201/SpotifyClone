import {View ,Text,TouchableOpacity, TextInput,Image} from 'react-native';
import styles from './LoginStyle';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';



export default function Login ({navigation}){

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
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
      onPress={() => {
      if (email === '') {
       setError(true);
      }else{
       navigation.navigate('Home');
      }
      }}>
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
