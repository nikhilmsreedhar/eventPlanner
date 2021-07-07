import * as React from 'react';
import axios from 'axios';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
=======
>>>>>>> c34471f4a33911c12f4510bbbc42f006059a6a11
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import {
  useFonts,
  Comfortaa_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/dev';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { TextInput, HelperText } from 'react-native-paper';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

export default function LoginPage() {
  let [fontsLoaded] = useFonts({
    Comfortaa_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });
  const theme = createMuiTheme({
    palette: {
      secondary: {
        main: '#5b06d5'
      }
    }
  });

  
  const navigation = useNavigation();
  function navigateBack() {
    navigation.goBack();
}

const userBlank = () => {
  return (username == "");
};


const [username, setUser] = React.useState('');
const [pass, setPass] = React.useState('');
const [loginMessage,setLoginMessage] = React.useState('');

const handleUserChange = (event) => {
  setUser(event.target.value);
};
const handlePassChange = (event) => {
  setPass(event.target.value);
};

// This is where the logic for the login function will be added
const login = (username, pass) => {
  if (username == "" && pass  == ""){
    setLoginMessage("Please enter username and password");
  }
  else if (username == "" && pass != ""){
    setLoginMessage("Please enter username");
  }
  else if (username != "" && pass == ""){
    setLoginMessage("Please enter password");
  }
  else{
<<<<<<< HEAD
    axios.post('https://togethrgroup1.herokuapp.com/login', { 
      UserName: username,
=======
    axios.post('https://togethrgroup1.herokuapp.com/api/login', { 
      UserName: user,
>>>>>>> c34471f4a33911c12f4510bbbc42f006059a6a11
      Password: pass
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
<<<<<<< HEAD
      console.log(error);
    });
    if (error){
      setLoginMessage("User not found");
    }
=======
      setLoginMessage('Incorrect Username or Password');
      console.log(error);
    });
    
>>>>>>> c34471f4a33911c12f4510bbbc42f006059a6a11
  }
}


  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigateBack()}>
      <Ionicons name="arrow-back"  size={30} color="back" />
    </TouchableOpacity>
    <View style={styles.center}>
        <Text h1 style={styles.title}>Log In</Text>
        <Text style={styles.verticalDivider}></Text>
        
        <MuiThemeProvider theme={theme}>
        <TextField 
          style={{width: 500}}
          color = 'secondary'
          label="username" 
          variant="outlined" 
          value={username}
          onChange={handleUserChange}
          />

        <Text Text style={styles.inputDivider}></Text>

        <TextField 
          style={{width: 500}}
          type="password"
          color = 'secondary'
          label="Password" 
          variant="outlined" 
          value={pass}
          onChange={handlePassChange}
          />
          <HelperText type="error">
          {loginMessage}
          </HelperText>
          </MuiThemeProvider>

          <Text style={styles.inputDivider}></Text>

         <TouchableOpacity  onPress={() => login(username, pass)} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
         </TouchableOpacity>
   </View>
   </View>
    
    </SafeAreaView>
    

    
  );
}


const styles = StyleSheet.create({
  title: {
    fontSize: 50, 
    fontFamily: 'Comfortaa_400Regular',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    margin: 25
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
   verticalDivider: {
    height:25,
  },
  inputDivider: {
    height:20,
  },
  loginButton: {
    backgroundColor: "black",
    borderColor:"black",
    alignSelf: 'stretch',
    height:50,
    borderWidth:3,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 5,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Roboto_500Medium'
  }, 
});
  