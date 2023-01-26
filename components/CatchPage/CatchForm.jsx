import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Button } from "react-native-paper";

const CatchForm = () => {
  const navigation = useNavigation();
  const [formCatch, setFormCatch] = useState({});

  const handleChange = (name, value) => {
    setFormCatch({ ...formCatch, [name]: value });
  };
  const handleSubmit = () => {
    navigation.navigate("ResultPage");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name...</Text>
        <TextInput
          name="name"
          style={styles.input}
          onChangeText={(text) => handleChange("name", text)}
          value={formCatch.name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age...</Text>
        <TextInput
          name="age"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(numeric) => handleChange("age", numeric)}
          value={formCatch.age}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender...</Text>
        <Picker
          selectedValue={formCatch.gender}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => handleChange("gender", itemValue)}
        >
          <Picker.Item label="Man" value="man" />
          <Picker.Item label="Woman" value="Woman" />
          <Picker.Item label="Other" value="Other" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height...(cm)</Text>
        <TextInput
          name="height"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(numeric) => handleChange("height", numeric)}
          value={formCatch.height}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight...(kg)</Text>
        <TextInput
          name="weight"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(numeric) => handleChange("weight", numeric)}
          value={formCatch.weight}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Caractere...</Text>
        <TextInput
          name="caractere"
          style={styles.input}
          onChangeText={(text) => handleChange("caractere", text)}
          value={formCatch.caractere}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Main hobby...</Text>
        <TextInput
          name="hobby"
          style={styles.input}
          onChangeText={(text) => handleChange("hobby", text)}
          value={formCatch.hobby}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Other hooby...</Text>
        <TextInput
          name="hobby2"
          style={styles.input}
          onChangeText={(text) => handleChange("hobby2", text)}
          value={formCatch.hobby2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>What style of catch phrase?...</Text>
        <TextInput
          name="objectif"
          style={styles.input}
          onChangeText={(text) => handleChange("objectif", text)}
          value={formCatch.objectif}
        />
      </View>
      <Button mode="contained" onPress={handleSubmit}>
        Make me a catch phrase !
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //   },
  inputContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  label: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 5,
  },
});

export default CatchForm;
