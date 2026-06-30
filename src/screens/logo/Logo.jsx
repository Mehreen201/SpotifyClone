import { useEffect } from 'react';
import { Image, View } from 'react-native';
import styles from './LogoStyle';


export default function  Logo ({navigation}){

useEffect(() => {
  setTimeout(() => {
    navigation.replace('SignUp');
  }, 5000);
}, []);

    return (
      <View style={styles.container}>
        <Image style={styles.image}
        source={require('../../../assets/images/logo/logo.png')}
        />
      </View>
    );
  
}
