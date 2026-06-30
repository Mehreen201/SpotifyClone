import { Image,Text, TouchableOpacity, View } from 'react-native';
import styles from './SignUpStyle';



export default function  SignUp ({navigation}){
    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={require('../../../assets/images/logo/signupLogo.png')}
        />
      <Text style={styles.heading}>
      Millions of songs.{"\n"}
      Free on Spotify.
      </Text>

        <TouchableOpacity style= {styles.button1} onPress={() => navigation.navigate('SignUpWith')}>
        <Text style={[styles.buttonText, {color:'black'}]}>Sign up Free</Text>
       </TouchableOpacity>

       <TouchableOpacity style= {styles.button2} onPress={() => navigation.navigate('Login')}>
        <Text style= {[styles.buttonText, {color:'white'}]}>Log in</Text>
       </TouchableOpacity>
      




      </View>
    );
  
}
