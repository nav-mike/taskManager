import { FC } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { useBoolean } from "usehooks-ts";

const AuthScreen: FC = () => {
  const { value: isSignInForm, toggle: toggleSignInForm } = useBoolean(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{isSignInForm ? "Sign In" : "Sign Up"}</Text>
      <TextInput style={styles.input} placeholder={"Email"} />
      <TextInput style={styles.input} placeholder={"Password"} />
      {!isSignInForm && (
        <TextInput style={styles.input} placeholder={"Confirm Password"} />
      )}
      <View style={styles.button}>
        <Button
          title={isSignInForm ? "Sign In" : "Sign Up"}
          onPress={() => {}}
          color={"#000"}
        />
      </View>
      <Text style={styles.infoText}>
        {isSignInForm
          ? "Don't have an account? Sign Up and save your tasks in a cloud."
          : "Already have an account? Sign In and start using your tasks from a cloud."}
      </Text>
      <View style={styles.button}>
        <Button
          title={`Switch to ${isSignInForm ? "Sign Up" : "Sign In"} form`}
          onPress={toggleSignInForm}
          color={"#8c8a8a"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderBottomColor: "#cbc9c9",
    borderBottomWidth: 2,
    paddingVertical: 7,
    fontWeight: "bold",
    fontSize: 16,
    width: "80%",
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  infoText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default AuthScreen;
