import { TouchableOpacity, View, Text, Image, FlatList } from "react-native";
import styles from "./HomeStyle";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

export default function Home() {

  const mediaItems = [
    {
      id: "1",
      title: "The Joe Rogan Experience",
      image: require("../../../assets/images/logo/The_Joe_Rogan.png"),
    },
    {
      id: "2",
      title: "Discover Weekly",
      image: require("../../../assets/images/logo/Your_Discover_Weekly.png"),
    },
    {
      id: "3",
      title: "Beast Mode",
      image: require("../../../assets/images/logo/Beast_mode.png"),
    },
    {
      id: "4",
      title: "The Misfits Podcast",
      image: require("../../../assets/images/logo/misfits.png"),
    },
    {
      id: "5",
      title: "Lo-Fi Beats",
      image: require("../../../assets/images/logo/lo-fi.png"),
    },
    {
      id: "6",
      title: "NPR News Now",
      image: require("../../../assets/images/logo/npr.png"),
    },
  ];

  const recommendations = [
    {
      id: "1",
      title: "NPR News Now",
      subtitle: "Podcast • NPR",
      image: require("../../../assets/images/logo/npr.png"),
    },
    {
      id: "2",
      title: "Lo-Fi Beats",
      subtitle: "Playlist",
      image: require("../../../assets/images/logo/lo-fi.png"),
    },
    {
      id: "3",
      title: "Discover Weekly",
      subtitle: "Made For You",
      image: require("../../../assets/images/logo/Your_Discover_Weekly.png"),
    },
    {
      id: "4",
      title: "Beast Mode",
      subtitle: "Workout Playlist",
      image: require("../../../assets/images/logo/Beast_mode.png"),
    },
  ];

  const recents = [
    {
      id: "1",
      title: "Tere Jeha",
      artist: "Talwinder, Push Kahlon",
      image: require("../../../assets/images/logo/tere_jeha.jpg"),
    },
    {
      id: "2",
      title: "Tose Naina Lage",
      artist: "Shilpa Rao",
      image: require("../../../assets/images/logo/tose_naina_lage.jpg"),
    },
    {
      id: "3",
      title: "Deal 2",
      artist: "INDERZY, Talwinder",
      image: require("../../../assets/images/logo/deal_2.jpg"),
    },
  ];

  return (
    <View style={styles.container}>

      {/* Header */}

            <View style={styles.header}>
              <Image
                style={styles.avatar}
                source={require("../../../assets/images/logo/Avatar.png")}
              />

              <TouchableOpacity style={styles.all}>
                <Text style={styles.allText}>All</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.music}>
                <Text style={styles.musicText}>Music</Text>
              </TouchableOpacity>
            </View>
            
      <FlatList
        data={[{ id: "home" }]}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 180 }}
        renderItem={() => (
          <>
                        {/* Media Grid */}

            <FlatList
              data={mediaItems}
              numColumns={2}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.mediaItemCard}>
                  <Image
                    source={item.image}
                    style={styles.mediaItemImage}
                  />

                  <Text style={styles.mediaItemText}>
                    {item.title}
                  </Text>
                </View>
              )}
            />

            {/* Your Recent Rotation */}

            <Text style={styles.sectionTitle}>
              Your recent rotation
            </Text>

            <FlatList
              data={recents}
              scrollEnabled={false}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.recentCard}>
                  <Image
                    source={item.image}
                    style={styles.recentImage}
                  />

                  <View
                    style={{
                      flex: 1,
                      marginLeft: 12,
                      justifyContent: "center",
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={styles.recentText}
                    >
                      {item.title}
                    </Text>

                    <Text
                      numberOfLines={1}
                      style={styles.recentSubtitleText}
                    >
                      {item.artist}
                    </Text>
                  </View>

                  <TouchableOpacity>
                    <Ionicons
                      name="ellipsis-vertical"
                      size={22}
                      color="#B3B3B3"
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />

            {/* Recommended Stations */}

            <Text style={styles.sectionTitle}>
              Recommended Stations
            </Text>

            <FlatList
              data={recommendations}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={
                styles.recommendationsList
              }
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.recommendationCard}
                >
                  <Image
                    source={item.image}
                    style={styles.recommendationImage}
                  />

                  <Text
                    numberOfLines={1}
                    style={styles.recommendationTitle}
                  >
                    {item.title}
                  </Text>

                  <Text
                    numberOfLines={2}
                    style={styles.recommendationSubtitle}
                  >
                    {item.subtitle}
                  </Text>
                </TouchableOpacity>
              )}
            />
                      </>
        )}
      />

      {/* Mini Player */}

      <View style={styles.miniPlayer}>
        <Image
          source={require("../../../assets/images/logo/lo-fi.png")}
          style={styles.miniImage}
        />

        <View style={styles.miniInfo}>
          <Text
            numberOfLines={1}
            style={styles.miniTitle}
          >
            Lo-Fi Beats
          </Text>

          <Text
            numberOfLines={1}
            style={styles.miniArtist}
          >
            Spotify
          </Text>
        </View>

        <TouchableOpacity style={styles.miniIcon}>
          <Ionicons
            name="laptop-outline"
            size={22}
            color="#B3B3B3"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniIcon}>
          <Ionicons
            name="heart-outline"
            size={22}
            color="#FFFFFF"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.miniIcon}>
          <Ionicons
            name="play"
            size={28}
            color="#FFFFFF"
          />
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}

      <BlurView
        intensity={70}
        tint="dark"
        style={styles.bottomBar}
      >
        <LinearGradient
          colors={[
            "rgba(0,0,0,0.45)",
            "rgba(0,0,0,0.15)",
            "transparent",
          ]}
          style={styles.barShadow}
        />

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="home"
            size={24}
            color="#FFFFFF"
          />
          <Text style={styles.activeText}>
            Home
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="search"
            size={24}
            color="#B3B3B3"
          />
          <Text style={styles.text}>
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Ionicons
            name="library-outline"
            size={24}
            color="#B3B3B3"
          />
          <Text style={styles.text}>
            Your Library
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
        <Image
        source={require("../../../assets/images/logo/premiumIcon.png")}
        style={styles.premiumIcon}
        resizeMode="contain"
        />
       <Text style={styles.text}>Premium</Text>
       </TouchableOpacity>

       <TouchableOpacity style={styles.tab}>
       <Ionicons
       name="add"
       size={24}
       color="#B3B3B3"
       />
      <Text style={styles.text}>Create</Text>
      </TouchableOpacity>

        </BlurView>

  </View>
);
}