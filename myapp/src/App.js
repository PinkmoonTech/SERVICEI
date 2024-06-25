// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import RegisterAsService from "./app/screens/RegisterAsService";
// import PlumberViewScreen from "./app/screens/PlumberViewScreen";
// import Header from "./app/screens/Header";
// import Footer from "./app/screens/Footer";
// import Login from "./app/screens/Login";
// import Home from "./app/screens/Home";
// import LoginPage from "./app/screens/loginpage";

// import RegisterAsCustomer from "./app/screens/RegisterAsCustomer";
// import CustomerCards from "./app/screens/CustomerCards";

// // import Header from "./Header";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     // <RegistrationScreen/>
//     // <Header/>

//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name=" " component={Home} options={{ headerShown: true }}/>
//           {/* <Stack.Screen name="Login" component={Login} /> */}
//            <Stack.Screen name="Login" component={LoginPage} />
//           <Stack.Screen name="RegisterAsService" component={RegisterAsService} />
//           <Stack.Screen name="RegisterAsCustomer"component={RegisterAsCustomer}
//           />
//           <Stack.Screen name="CustomerCards" component={CustomerCards} />
//           <Stack.Screen name="Service i" component={PlumberViewScreen} />
//           {/* <Stack.Screen name="LoginPage" component={LoginPage} /> */}

//           {/* <Stack.Screen name="Loginn" component={Header} /> */}
//           {/* <Stack.Screen name="hey" component={Footer} /> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };
// export default App;




// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
// import { NavigationContainer } from "@react-navigation/native";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import RegisterAsService from "./app/screens/RegisterAsService";
// import PlumberViewScreen from "./app/screens/PlumberViewScreen";
// import Header from "./app/screens/Header";
// import Footer from "./app/screens/Footer";
// // import Login from "./app/screens/Login";
// import Home from "./app/screens/Home";
// import LoginPage from "./app/screens/loginpage";
// import RegisterAsCustomer from "./app/screens/RegisterAsCustomer";
// import CustomerCards from "./app/screens/CustomerCards";

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home" >
//           <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
//           <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: true }}/>
//           <Stack.Screen name="RegisterAsService" component={RegisterAsService}options={{ headerShown: true }} />
//           <Stack.Screen name="RegisterAsCustomer" component={RegisterAsCustomer} options={{ headerShown: true }}/>
//           <Stack.Screen name="CustomerCards" component={CustomerCards} options={{ headerShown: true }}/>
//           <Stack.Screen name="Service i" component={PlumberViewScreen} options={{ headerShown: true }}/>
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;



import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native"; // Import StatusBar
import RegisterAsService from "./components/screens/RegisterAsService";
import PlumberViewScreen from "./components/screens/PlumberViewScreen";
import Header from "./components/reuse/Header";
import Footer from "./components/reuse/Footer";
import Home from "./components/screens/Home";
import LoginPage from "./components/screens/loginpage";
import RegisterAsCustomer from "./components/screens/RegisterAsCustomer";
import CustomerCards from "./components/screens/CustomerCards";


const Stack = createStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* Custom StatusBar */}
        <StatusBar
          barStyle="dark-content" // Customize the status bar style (light-content or dark-content)
          backgroundColor="#FFFFFF" // Customize the background color of the status bar
        />
        
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
          <Stack.Screen name="Login" component={LoginPage}  options={{ headerShown: false }}/>
          <Stack.Screen name="RegisterAsService" component={RegisterAsService}  options={{ headerShown: true }}/>
          <Stack.Screen name="RegisterAsCustomer" component={RegisterAsCustomer} options={{ headerShown: true }} />
          <Stack.Screen name="CustomerCards" component={CustomerCards}  options={{ headerShown: true }}/>
          <Stack.Screen name="Service i" component={PlumberViewScreen}  options={{ headerShown: true}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;


// import React from 'react';
// import Routes from '../src/navigation';
// import {Provider} from 'react-redux';
// import store from '../src/redux/reducers';
// import {persistStore} from 'redux-persist';
// import {PersistGate} from 'redux-persist/integration/react';
// import {LogBox, StatusBar, SafeAreaView} from 'react-native';
// import Config from './utils/Config';

// // Initialize the module (needs to be done only once)
// const App = () => {
//   // LogBox.ignoreAllLogs(true);
//   const persistor = persistStore(store);
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Routes />
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;


