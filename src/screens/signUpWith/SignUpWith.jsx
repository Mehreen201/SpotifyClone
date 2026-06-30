import {View ,Text,TouchableOpacity, TextInput,Image} from 'react-native';
import styles from './SignUpWithStyle';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function SignUpWith ({navigation}){
    return (

    <View style={styles.container}>
      <View style= {styles.header}>
      <TouchableOpacity style={styles.backbtn} onPress={()=> navigation.navigate('SignUp')}>
        <Ionicons name="arrow-back" size={20} color="white" />
      </TouchableOpacity>
        <Text style={styles.headerText}>Sign up to start listening</Text>
     </View>  

      <View style={styles.infoContainer}>
      <Text style={styles.emailText}>What's your email?</Text>
      <Text style={styles.emailTextPara}>You'll need to confirm this email later.</Text>
      <TextInput style={styles.emailInput}>
      </TextInput>

      <TouchableOpacity style= {styles.button1} onPress={() => navigation.navigate('SignUpWith')}>
        <Text style={[styles.buttonText, {color:'black'}]}>Continue</Text>
       </TouchableOpacity>
 
      <Text style={styles.signUpWithText }>Or sign up with</Text>

       <TouchableOpacity style={styles.button2}>
        <View style={styles.iconContainer}>
         <Image
         source={require('../../../assets/images/logo/google.png')}
         style={styles.googleIcon}
        />
        </View>
        <Text style={styles.google}>
        Google
        </Text>
       </TouchableOpacity>

       <Text style={styles.signUpWithText}>Already have an Account?</Text>
       <TouchableOpacity>
        <Text style={styles.loginButton}  onPress={() => navigation.navigate('Login')}>Log in</Text>
       </TouchableOpacity>
      </View>



    </View>


    );
  
}
