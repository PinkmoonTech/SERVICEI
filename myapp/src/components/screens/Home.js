// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   TouchableOpacity,
//   ImageBackground,
//   ScrollView,
//   Platform,
//   StatusBar,
// } from "react-native";
// import Footer from '../reuse/Footer';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import FooterHome from "../reuse/FooterHome";
// import FastImage from "react-native-fast-image";

// // import { MaterialIcon } from "@expo/vector-icons";

// // import { useImageDimensions } from "@react-native-community/hooks";
// // import { Dimensions } from "react-native";

// const Home = ({ navigation }) => {
//   return (
//     <View style={{ flex: 1 }}>
//       <ScrollView contentContainerStyle={styles.container}>
//         <View style={styles.header}>
//           <Image
//             resizeMode="contain"
//             source={{
//               uri: "https://i.ibb.co/L9NqxNk/Pi7-Tool-r3logo-removebg-preview.png",
//             }}
//             style={styles.logo} // Use the logo style from styles
//           />
//           {/* <Text style={styles.serviceText}>
//           Service <Text style={styles.italic}>i</Text>
//         </Text> */}
//           {/* <Text style={styles.serviceText}>
//       Service <Text style={styles.italic}>i</Text><Text style={styles.superscript}>R</Text>
//     </Text> */}
//           <Text style={styles.serviceText}>
//             Service <Text style={styles.italic}>i</Text><View style={styles.superscriptContainer}><Text style={styles.superscript}>R</Text></View>
//           </Text>

//           <View style={styles.buttonContainer}>
//             <TouchableOpacity
//               style={styles.iconButton}
//               onPress={() => navigation.navigate("Login")}
//             >
//               <Icon name="account-circle" size={24} color="white" />
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.middleContent}>
//           <ImageBackground
//             source={{
//               uri: "https://i.ibb.co/XL83qt8/plumberimg.jpg",
//             }}
//             style={styles.middleImage}
//           >

//             <Text style={styles.overlayText}>A Platform for Customer to enable right service</Text>

//           </ImageBackground>
//         </View>

//         <FooterHome />
//       </ScrollView>
//     </View>
//   );

// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#f0f0f0",
//     alignItems: "center",
//     flex: 1,
//     // justifyContent: "space-between",
//     // paddingTop:Platform.OS ==="android"? StatusBar.currentHeight:0

//   },
//   header: {
//     width: "100%",
//     backgroundColor: "#b0c4de",
//     paddingVertical: 10,
//     paddingHorizontal: 1,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//   },
//   logo: {
//     width: 80, // Increased width
//     height: 40, // Increased height
//     // marginRight: 'auto',
//     paddingHorizontal: 1,
//     marginLeft: -18,
//     // paddingRight:2
//     marginTop: 1
//   },
//   iconButton: {
//     backgroundColor: "#007bff",
//     borderRadius: 5,
//     padding: 10,
//     paddingLeft: 20,
//     paddingRight: 20
//   },
//   middleContent: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     width: "300%",
//     // paddingHorizontal: 80,
//     // paddingVertical:1,
//     marginLeft: 270,
//     // marginTop:0,
//     // marginBottom:"10"
//     marginBottom: 15
//   },

//   middleImage: {
//     width: "55%", // Adjusted width to center horizontally
//     aspectRatio: 10 / 6, //height will be "30%" // Adjusted height to center vertically
//     //  alignItems:"center",

//   },
//   overlayText: {
//     color: "#c1205f",
//     fontSize: 22,
//     // textAlign: "center",
//     // paddingHorizontal: 20,
//     // marginBottom:60,
//     // paddingBottom:50
//     paddingTop: 10,
//     paddingRight: 290,
//     paddingLeft: 15,
//     fontWeight: "bold"

//   },

//   serviceText: {
//     fontSize: 25, // Adjust your main text size
//     // Other styles for serviceText
//     color: "green"
//   },
//   italic: {
//     fontStyle: 'italic', // Italic style for the "i"
//   },
//   superscriptContainer: {
//     flexDirection: 'row',
//     alignItems: 'flex-start',

//   },
//   superscript: {
//     fontSize: 12, // Smaller font size for the superscript
//     lineHeight: 20, // Adjust line height if needed
//     position: 'relative',
//     top: -5, // Adjust top position for the superscript effect
//     color: "green"
//   },

// });

// export default Home;

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Platform,
  StatusBar,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FooterHome from '../reuse/FooterHome';
import FastImage from 'react-native-fast-image';
import Dots from 'react-native-dots-pagination';
const {width: windowWidth, height: windowHeight} = Dimensions.get('window');

const scale = size => (windowWidth / 320) * size;
const normalize = size => {
  const newSize = scale(size);
  if (Platform.OS === 'android') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

// Import your images from the assets folder
const images = [
  require('../../assets/images/photo1.jpg'),
  require('../../assets/images/ph2.jpg'),
  require('../../assets/images/ph3.jpg'),
  require('../../assets/images/ph4.jpg'),
  require('../../assets/images/ph5.jpg'),
];
const images1 = [
  require('../../assets/images/ele1.jpg'),
  require('../../assets/images/ele2.jpg'),
  require('../../assets/images/ele3.jpg'),
  require('../../assets/images/ele4.jpg'),
  require('../../assets/images/ele5.jpg'),
];
const images2 = [
  require('../../assets/images/pa1.jpg'),
  require('../../assets/images/pa2.jpg'),
  require('../../assets/images/pa3.jpg'),
  require('../../assets/images/pa4.jpg'),
  require('../../assets/images/pa5.jpg'),
];


const {width} = Dimensions.get('window'); // Get the device width

const Home = ({navigation}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleScroll = event => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / width);
    setCurrentImageIndex(index);
  };

  useEffect(() => {
    const updateDimensions = () => {
      const {width, height} = Dimensions.get('window');
      setWindowWidth(width);
      setWindowHeight(height);
    };

    // Dimensions.addEventListener('change', updateDimensions);
    return () => {
      // Dimensions.removeEventListener('change', updateDimensions);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(
    Dimensions.get('window').width,
  );
  const [windowHeight, setWindowHeight] = useState(
    Dimensions.get('window').height,
  );

  return (
    <View style={{flex: 1}}>
      <View style={styles.header}>
        <Image
          resizeMode="contain"
          source={{
            uri: 'https://i.ibb.co/L9NqxNk/Pi7-Tool-r3logo-removebg-preview.png',
          }}
          style={styles.logo}
        />
        <Text style={styles.serviceText}>
          Service <Text style={styles.italic}>i</Text>
          <View style={styles.superscriptContainer}>
            <Text style={styles.superscript}>R</Text>
          </View>
        </Text>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => navigation.navigate('Login')}>
          <Icon name="account-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.middleContent}>
            <Text style={styles.title}>Maintenance Experts</Text>
            <Text style={styles.title2}>Simplified</Text>
            <ImageBackground
              source={{
                uri: 'https://i.ibb.co/XL83qt8/plumberimg.jpg',
              }}
              style={styles.middleImage}>
              <Text style={styles.overlayText}>
                A Platform for Customer to enable right service
              </Text>
            </ImageBackground>
            <Text style={styles.description}>
              Service i ensures all your home maintenance needs are met. We offer
              services across various categories, supported by over 1000+ skilled
              professional vendors.
            </Text>
          </View>

          <View style={styles.imageContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}>
              {images.map((image, index) => (
                <FastImage
                  key={index}
                  source={image}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.cover}
                />
              ))}
            </ScrollView>
            <Dots
              length={images.length}
              active={currentImageIndex}
              activeColor="#007bff"
            />
          </View>
          <View style={styles.imageContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}>
              {images1.map((images1, index) => (
                <FastImage
                  key={index}
                  source={images1}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.cover}
                />
              ))}
            </ScrollView>
            <Dots
              length={images1.length}
              active={currentImageIndex}
              activeColor="#007bff"
            />
          </View>
          <View style={styles.imageContainer}>
            <ScrollView
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              onScroll={handleScroll}
              scrollEventThrottle={16}>
              {images2.map((images2, index) => (
                <FastImage
                  key={index}
                  source={images2}
                  style={styles.image}
                  resizeMode={FastImage.resizeMode.cover}
                />
              ))}
            </ScrollView>
            <Dots
              length={images2.length}
              active={currentImageIndex}
              activeColor="#007bff"
            />
          </View>
        </View>
      </ScrollView>

      <FooterHome />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  header: {
    width: '100%',
    backgroundColor: '#b0c4de',
    paddingVertical: 10,
    paddingHorizontal: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 40,
    paddingHorizontal: 1,
    marginLeft: -18,
    marginTop: 1,
  },
  iconButton: {
    backgroundColor: '#007bff',
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  middleContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: Dimensions.get('window').height,
  },
  middleImage: {
    width: '100%',
    aspectRatio: 10 / 9,
  },

  overlayText: {
    color: '#c1205f',
    fontSize: 22,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  serviceText: {
    fontSize: 25,
    color: 'green',
  },
  italic: {
    fontStyle: 'italic',
  },
  superscriptContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  superscript: {
    fontSize: 12,
    lineHeight: 20,
    position: 'relative',
    top: -5,
    color: 'green',
  },
  imageContainer: {
    marginVertical: 20,
    // height: 300,
    marginBottom: 40,
    width: width, // Ensure the container is full width
  },
  image: {
    width: width, // Ensure each image takes up the full width
    height: 200,
    borderRadius: 10,
    marginHorizontal: 5, // Provide space between images
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
   paddingBottom:2
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    paddingBottom:10
   
  },
  description: {
    fontSize: 16,
    color: 'black', // Change color as needed
    textAlign: 'center',
    margin: 20,
  },
});

export default Home;
