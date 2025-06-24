import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function SignInScreen() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSignIn = () => {
    console.log("email:", email, "Password:", password);
  };

  const handleForgotPassword = () => {};

  const handleSignUp = () => {};

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/Left Arrow.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={require("../assets/icons/Question.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.logo}>
          <Image
            source={require("../assets/images/Tesla_Logo.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            height: 50,
            backgroundColor: "#ccc",
            borderRadius: 10,
            borderColor: 'white',
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <TextInput
            style={styles.input1}
            placeholder="Email Address"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            borderRadius={10}
            paddingHorizontal={20}
          />
        </View>

        <View
          style={{
            marginTop: 10,
            borderWidth: 1,
            height: 50,
            backgroundColor: "#ccc",
            borderRadius: 10,
            alignItems:"center",
            borderColor: 'white',
            flexDirection:"row",
            paddingHorizontal:20
          }}
        >
          <TextInput
            style={styles.input2}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={require("../assets/icons/Eye Icon.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp}>
          <Text style={styles.signUpText}>New User Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1,
    backgroundColor: "white",
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    marginTop: 70,
    alignItems: "center",
    marginButtom: 100,
  },
  signIn: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
    color: "black",
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginButtom: 50,
  },
  input1: {
    paddingHorizontal: 20,
    borderColor: "white",
  },
  input2: {
    flex:1
  },
  forgotText: {
    color: "black",
    textAlign: "left",
    marginButtom: 50,
    fontStyle: "italic",
    marginTop: 5,
    paddingLeft: 10,
    color: "blue",
    fontFamily: "arial",
    textDecorationLine: "underline",
  },
  signInButton: {
    backgroundColor: "#007BFF",
    height: 50,
    padding: 15,
    bordercolor: "black",
    borderRadius: 8,
    alignItems: "center",
    marginTop: 20,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  signUpText: {
    textAlign: "center",
    color: "black",
    fontsize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});
