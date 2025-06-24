import { useState } from "react";
import {
    Image,
    ScrollView,
    StatusBar,
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
      <StatusBar backgroundColor={"white"} barStyle={'light-content'}/>
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
            style={{ width: 200, height: 200, marginBottom: 50 }}
          />
        </View>

        <View
          style={{
            paddingLeft: 1,
            borderBottomWidth: 1,
            marginBottom: 10,
            fontsize: 25,
            borderBottomColor: "#ccc",
            padding: 7,
            paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={styles.input1}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#ccc",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 20,
            // marginBottom: 70,
            fontSize: 25,
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

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleSignIn}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
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
  input1: {
    paddingHorizontal: 20,
    borderColor: "white",
  },
  input2: {
    flex: 1,
    borderBottomColor: "#ccc",
  },
  signInButton: {
    backgroundColor: "red",
    height: 60,
    padding: 15,
    bordercolor: "black",
    borderRadius: 50,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30,
  },
  signInButtonText: {
    color: "white",
    fontWeight: "condensedBold",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  forgotText: {
    color: "#ccc",
    textAlign: "center",
    marginButtom: 50,
    fontStyle: "italic",
    marginTop: 5,
    paddingLeft: 10,
    color: "#ccc",
    fontFamily: "arial",
    textDecorationLine: "underline",
  },
  signUpText: {
    textAlign: "center",
    color: "black",
    fontsize: 16,
    fontWeight: "bold",
    marginTop: 20,
  },
});
