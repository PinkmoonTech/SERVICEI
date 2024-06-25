
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
// const Routes = () => {
//     const options = {
//       headerShown: false,
//       cardOverlayEnabled: true,
//       cardStyleInterpolator: ({current, next, layouts}) => {
//         return {
//           cardStyle: {
//             transform: [
//               {
//                 translateX: current.progress.interpolate({
//                   inputRange: [0, 1],
//                   outputRange: [screenWidth, 0],
//                 }),
//               },
//             ],
//           },
//         };
//       },
//     };
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

// export default Routes;
