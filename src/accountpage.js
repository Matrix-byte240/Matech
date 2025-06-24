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
      <StatusBar backgroundColor={"red"} barStyle={"light-content"} />
      <View style={styles.container}>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/Left Arrow.png")}
              style={{ width: 30, height: 30 }}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.header}>Create Account</Text>
        <Text style={styles.subHeader}>
          Create Account And Enjoy All Service
        </Text>

        <View
          style={{
            paddingLeft: 1,
            borderWidth: 1,
            marginBottom: 30,
            fontsize: 25,
            borderColor: "#ccc",
            borderRadius: 10,
            padding: 7,
            paddingHorizontal: 20,
            paddingVertical: 15,
          }}
        >
          <TextInput
            style={styles.input1}
            placeholder="Name"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>

        <View
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
            paddingHorizontal: 20,
                        paddingVertical: 15,
            marginBottom: 30,
            fontSize: 25,
          }}
        >
          <TextInput
            style={styles.input2}
            placeholder="Email"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View
          style={{
            paddingLeft: 1,
            borderWidth: 1,
            marginBottom: 10,
            fontsize: 25,
            borderColor: "#ccc",
            borderRadius: 10,
            // padding: 7,
             paddingVertical: 15,
            flexDirection: "row",
            justifyContent: "space-between",
             paddingHorizontal: 20,
          }}
        >
          <TextInput
            style={styles.input1}
            placeholder="Password"
            value={password}
          />

          <TouchableOpacity activeOpacity={0.6}>
            <Image
              source={require("../assets/icons/Eye Icon.png")}
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={handleSignIn}
          style={styles.signInButton}
        >
          <Text style={styles.signInButtonText}>Sign In</Text>
        </TouchableOpacity>

        <Text
          style={{ fontWeight: "800", alignItems: "center", marginBottom: 30, textAlign: 'center' }}
        >
          Or Sign In With
        </Text>

        <View style={styles.bottomicon}>
          <TouchableOpacity>
            <Image
              source={require("../assets/icons/apple.png")}
              style={{ width: 50, height: 50, borderRadius: 30, borderWidth: 1, padding: 15, borderColor: '#ccc', }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../assets/icons/google.png")}
              style={{ width: 50, height: 50, borderWidth: 1, borderRadius: 30, padding: 15, borderColor: '#ccc', }}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Image
              source={require("../assets/icons/facebook.png")}
              style={{ width:50, height: 50, borderRadius: 30, padding: 15, borderColor: '#ccc', borderWidth: 1, }}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.bottomtext}>
          <TouchableOpacity>
          <Text style={{fontStyle: 29, textAlign: 'center', fontWeight: 'bold'}} >Already Have An Account </Text>
         
        </TouchableOpacity>
        </View>



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
  header: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 30,
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
    backgroundColor: "blue",
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
    color: "blue",
    textAlign: "right",
    marginButtom: 50,

    marginTop: 1,
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
  bottomicon: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-end",
    marginBottom: 130,
    
  },
  
});