import { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function FormScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={{
          uri: "https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg?ga=GA1.1.798136446.1747141255&semt=ais_hybrid&w=740",
        }}
        style={styles.profileImage}
      />

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Phone number:</Text>
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Password:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.butt}>Sign-IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 40,
    alignItems: "flex-start",
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: "center",
    marginBottom: 30,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  label: {
    width: 100,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    borderRadius: 3,
    flex: 1,
  },
  button: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'flex-end'
  },
});
