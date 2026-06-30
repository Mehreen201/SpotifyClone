import {TouchableOpacity, View , Text , ScrollView, Image, FlatList} from 'react-native'; 
import styles from './HomeStyle';
import { Ionicons } from '@expo/vector-icons'; 
import { LinearGradient } from "expo-linear-gradient";



export default function Home (){

      const mediaItems = [
            {
                  id:1,
                  title: "The Joe Rogan Experience",
                  image: require('../../../assets/images/logo/The_Joe_Rogan.png')
            },
            {
                  id: '2',
                  title: 'Discover Weekly',
                  image: require('../../../assets/images/logo/Your_Discover_Weekly.png'),
                },
                {
                  id: '3',
                  title: 'Beast Mode',
                  image: require('../../../assets/images/logo/Beast_mode.png'),
                },
                {
                  id: '4',
                  title: 'The Misfits Podcast',
                  image: require('../../../assets/images/logo/misfits.png'),
                },
                {
                  id: '5',
                  title: 'Lo-Fi Beats',
                  image: require('../../../assets/images/logo/lo-fi.png'),
                },
                {
                  id: '6',
                  title: 'NPR News Now',
                  image: require('../../../assets/images/logo/npr.png'), 
               },
      ];
      

    return(
      

       <View style={styles.container}>
       <View style={styles.header}>

       <Image
       style={styles.avatar}
       source={require('../../../assets/images/logo/Avatar.png')}
       />
       <TouchableOpacity style={styles.all}>
        <Text style={styles.allText}>All</Text>
       </TouchableOpacity>

        <TouchableOpacity style={styles.music}>
        <Text style={styles.musicText}>Music</Text>
       </TouchableOpacity>
       </View>

        <ScrollView>

        
      <FlatList
      data={mediaItems}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
            <View style={styles.mediaItemCard}>
            <Image source={item.image} style={styles.mediaItemImage}/>
             <Text style={styles.mediaItemText}>{item.title}</Text>
            </View>
      )}
      />
      <FlatList
      data={mediaItems}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
            <View style={styles.mediaItemCard}>
            <Image source={item.image} style={styles.mediaItemImage}/>
             <Text style={styles.mediaItemText}>{item.title}</Text>
            </View>
      )}
      />
      <FlatList
      data={mediaItems}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
            <View style={styles.mediaItemCard}>
            <Image source={item.image} style={styles.mediaItemImage}/>
             <Text style={styles.mediaItemText}>{item.title}</Text>
            </View>
      )}
      />
      <FlatList
      data={mediaItems}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
            <View style={styles.mediaItemCard}>
            <Image source={item.image} style={styles.mediaItemImage}/>
             <Text style={styles.mediaItemText}>{item.title}</Text>
            </View>
      )}
      />
      <FlatList
      data={mediaItems}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
            <View style={styles.mediaItemCard}>
            <Image source={item.image} style={styles.mediaItemImage}/>
             <Text style={styles.mediaItemText}>{item.title}</Text>
            </View>
      )}
      />
      <FlatList
      data={mediaItems}
      numColumns={2}
      keyExtractor={(item) => item.id}
      renderItem={({item}) =>(
            <View style={styles.mediaItemCard}>
            <Image source={item.image} style={styles.mediaItemImage}/>
             <Text style={styles.mediaItemText}>{item.title}</Text>
            </View>
      )}
      />
       </ScrollView>


      <LinearGradient
      colors={[
      "rgba(18,18,18,0)",
      "rgba(18,18,18,0.15)",
      "rgba(18,18,18,0.35)",
      "rgba(18,18,18,0.7)",
      "#121212"
     ]}
       style={styles.gradient}
/>
      <View style={styles.bottomBar}>

     <TouchableOpacity style={styles.tab}>
       <Ionicons name="home" size={24} color="#FFFFFF" />
       <Text style={styles.activeText}>Home</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.tab}>
       <Ionicons name="search" size={24} color="#B3B3B3" />
       <Text style={styles.text}>Search</Text>
     </TouchableOpacity>


     <TouchableOpacity style={styles.tab}>
       <Ionicons name="library-outline" size={24} color="#B3B3B3" />
       <Text style={styles.text}>Your Library</Text>
     </TouchableOpacity>

     <TouchableOpacity style={styles.tab}>
       <Image
          source={require('../../../assets/images/logo/premiumIcon.png')}
          style={styles.premiumIcon}
          resizeMode="contain"
          />
       <Text style={styles.text}>Premium</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.tab}>
       <Ionicons name="add" size={24} color="#B3B3B3" />
       <Text style={styles.text}>Create</Text>
     </TouchableOpacity>

       </View>
      </View>
      



















    );
}