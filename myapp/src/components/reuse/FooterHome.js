import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');

const FooterHome = () => {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>
        <Text style={styles.link} onPress={() => console.log('Redirect to PINKMOON Technologies')}>
          A product of PINKMOON TECHNOLOGIES
          Terms and Conditions | Privacy Policy |cookies policy
          ©2021.Service i.All Rights Reserved
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    width: windowWidth, // Adjust to full screen width
    backgroundColor: '#b0c4de',
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 15,
    color: 'white',
    marginBottom: 2,
  },
  link: {
    textDecorationLine: 'none',
    color: '#c1205f',
    fontWeight: 'bold',
  },
});

export default FooterHome;
