import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,

  StyleSheet,
  Dimensions,
  Modal,
  PixelRatio,
  Platform,
  StatusBar
} from "react-native";

// import { Ionicons } from "@expo/vector-icons";
import Icon from 'react-native-vector-icons/Ionicons'; // Import Ionicons from react-native-vector-icons
import { useNavigation } from '@react-navigation/native';
// import Footer from "./Footer";
// import Header from "./Header";

const { width: windowWidth } = Dimensions.get("window");

const scale = (size) => (windowWidth / 320) * size;
const normalize = (size) => {
  const newSize = scale(size);
  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };


  const toggleSecureTextEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };


  const handleLogin = async () => {
    setError('');

    if (!phoneNumber || !pin) {
      setError('Please enter both phone number and pin');
      return;
    }
    if (phoneNumber.length !== 10) {
      setError("Phone number must be 10 digits long");
      return;
    }
    if (pin.length !== 6) {
      setError("PIN must be 6 digits long");
      return;
    }

    const requestBody = { phoneNumber, pin };

    try {
      const response = await fetch('http://192.168.0.113:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(requestBody),
      });

      const result = await response.json();
      if (response.ok) {
        if (result.role === "customer") {
          navigation.navigate('CustomerCards');
        } else if (result.role === "service") {
          navigation.navigate('Home');
        }
      } else {
        setError(result.error || 'Login failed');
      }
    } catch (err) {
      console.error('Error occurred:', err);
      setError('An error occurred. Please try again later.');
    }
  };
  
  return (

    <View style={styles.container}>

 <StatusBar barStyle="dark-content" />
      {/* <Text> <Icon name="home" size={50} /> </Text> */}
      {error ? <Text style={{ color: "red" }}>{error}</Text> : null}

      {/* <Image
          resizeMode="contain"
          source={{
            uri: "https://i.ibb.co/qRH9ZjT/back-Button-Left.png",
          }}
          style={styles.logos} // Use the logo style from styles
        /> */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <Icon name="arrow-back" size={30} color="white" />
      </TouchableOpacity>

{/*       
<TouchableOpacity onPress={handleWelcomeScreen}>
        <Icon name="arrow-back" size={30} color="black" style={styles.icon} />
      </TouchableOpacity> */}


      <Text style={styles.title}>Log in to your account</Text>

      <View style={styles.inputContainer}>

        <TextInput
          style={styles.input}
          placeholder="phone number"
          placeholderTextColor="gray" // Set placeholder text color
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
        <View style={styles.passwordContainer}>
          {/* <TextInput
            style={styles.input}
            placeholder="Pin"
            maxLength={6}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={secureTextEntry}
          /> */}

          <TextInput
            style={styles.input}
            placeholder="Pin"
            placeholderTextColor="gray" // Set placeholder text color
            value={pin}
            onChangeText={setPin}
            keyboardType="numeric"
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity
            style={styles.eyeIcon}
            onPress={toggleSecureTextEntry}
          >
            <Icon
              name={secureTextEntry ? "eye-off" : "eye"}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
          
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={openModal}>
          <Text style={styles.forgotPassword}>
            For assistance with forgotten phone number or PIN, contact{' '}
            <Text style={[styles.adminText, { textDecorationLine: 'underline' }]}>Admin</Text>.
          </Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Admin Phone Number: 8989898987</Text>
              <Text style={styles.modalText}>Admin Email: xxxx@gmail.com</Text>

              <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
                <Text style={styles.closeButtonText}>Cancle</Text>
              </TouchableOpacity>
               
            </View>
          </View>
        </Modal>




        {/* Navigate to RegisterAsCustomer screen */}
        <TouchableOpacity onPress={() => navigation.navigate("RegisterAsCustomer")}>
          <Text style={styles.registerText}>
            Register as Customer
          </Text>
        </TouchableOpacity>

        {/* Navigate to RegisterAsService screen */}
        <TouchableOpacity onPress={() => navigation.navigate("RegisterAsService")}>
          <Text style={styles.registerText}>
            Register as Service Provider
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#b0c4de",
    alignItems: "center",
    justifyContent: "center",
    padding: normalize(20),
    // justifyContent: 'space-between', 
    

  },
  icon: {
    position: "absolute",
    top: StatusBar.currentHeight || 30,  // Use StatusBar height if available
    left: 10, // Adjust the left position as needed
  },
  logo: {
    width:normalize(100),
    height:normalize(50),
    marginBottom: normalize(20),
  },
  title: {
    fontSize: normalize(25),
    color: "#fff",
    marginBottom: normalize(15),
  },
  inputContainer: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: normalize(10),
    padding: normalize(20),
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: normalize(40),
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'black', 
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  eyeIcon: {
    marginLeft: -30,
    paddingVertical: 20,
    paddingBottom: 30,
  },

  loginButton: {
    width: "100%",
    height: 40,
    backgroundColor: "#ccc",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "#007bff",
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
  },
  forgotPassword: {
    color: "#6A1B9A",
    marginBottom: 20,
    marginTop: 10,
    alignSelf: 'flex-start', // Align text to the start of the container
    marginLeft: 0, // Add margin to ensure it's not right at the edge
  },
  adminText: {
    color: "red",
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 1,
    padding: 20,
    // alignItems: 'center',
    elevation: 5,
    borderRadius:15
  },
  modalText: {
    marginBottom: 10,
    // textAlign: 'center',
    color:"black"


  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    // backgroundColor: '#007bff',
    // borderRadius: 5,
  },
  closeButtonText: {
    color: 'black',
    // fontWeight: 'bold',
    textAlign:"center"
  },
  registerText: {
    color: "#6A1B9A",
    marginBottom: 20,
    textAlign: "center", // Center text horizontally
    textDecorationLine: "underline",
  },
  registerLink: {
    textDecorationLine: "underline",
    color: "red",
  },
  

    

  
});

export default Login;
