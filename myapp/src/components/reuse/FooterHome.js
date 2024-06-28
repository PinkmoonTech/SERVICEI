// import React from 'react';
// import { View, Text, StyleSheet, Dimensions } from 'react-native';

// const { width: windowWidth } = Dimensions.get('window');

// const FooterHome = () => {
//   return (
//     <View style={styles.footer}>
//   <Text style={styles.centeredText}>
//     A product of PINKMOON TECHNOLOGIES
//   </Text>
//   <Text style={styles.leftAlignedText}>
//     Terms and Conditions | Privacy Policy | Cookies Policy
//   </Text>
//   <Text style={styles.centeredText}>
//     ©2021.Service i. All Rights Reserved
//   </Text>
// </View>

  
//   );
// };

// const styles = StyleSheet.create({
//   footer: {
//     width: windowWidth, // Adjust to full screen width
//     backgroundColor: '#b0c4de',
//     padding: 1,
//     alignItems: 'center',
//   },
//   centeredText: {
//     textAlign: 'center', // Center align text
//     fontSize: 13, // Adjust font size as needed
//     color: 'red', // Adjust text color as needed
//     marginBottom: 2, // Adjust spacing between lines if needed
//   },
//   leftAlignedText: {
//     textAlign: 'left', // Left align text
//     fontSize: 13, // Adjust font size as needed
//     color: 'red', // Adjust text color as needed
//     marginBottom: 2, // Adjust spacing between lines if needed
//   },
// });

// export default FooterHome;


import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

const FooterHome = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.footerContent}>
        <Text style={styles.centeredText}>
          A product of PINKMOON TECHNOLOGIES
        </Text>
        <Text style={styles.leftAlignedText}>
          Terms and Conditions | Privacy Policy | Cookies Policy
        </Text>
        <Text style={styles.centeredText}>
          ©2021.Service i. All Rights Reserved
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: windowWidth,
    backgroundColor: '#b0c4de',
    paddingVertical: 2,
  },
  footerContent: {
    alignItems: 'center',
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 13,
    color: 'red',
    marginBottom: 2, // Adjust spacing between lines if needed
  },
  leftAlignedText: {
    textAlign: 'left',
    fontSize: 13,
    color: 'red',
    marginBottom: 2, // Adjust spacing between lines if needed
  },
});

export default FooterHome;

