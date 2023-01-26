import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Configuration, OpenAIApi } from "openai";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { getResultDescriptionOpenApi } from "../../utils/ApiOpenai";

import "react-native-url-polyfill/auto";

const DescriptionForm = () => {
  const navigation = useNavigation();
  const [gender, setGender] = useState("Femme");
  const [formDescription, setFormDescription] = useState({});

  const handleChange = (name, value) => {
    setFormDescription({ ...formDescription, [name]: value });
  };
  const handleSubmit = async () => {
    setFormDescription({
      ...formDescription,
      gender,
    });
    const response = await getResultDescriptionOpenApi(formDescription);
    navigation.navigate("ResultPage", response);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name...</Text>
        <TextInput
          name="name"
          style={styles.input}
          onChangeText={(text) => handleChange("name", text)}
          value={formDescription.name}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Age...</Text>
        <TextInput
          name="age"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(numeric) => handleChange("age", numeric)}
          value={formDescription.age}
          maxLength={3}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Gender...</Text>
        <Picker
          selectedValue={
            formDescription.gender ? formDescription.gender : gender
          }
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Homme" value="Homme" />
          <Picker.Item label="Femme" value="Femme" />
          <Picker.Item label="Autre" value="Autre" />
        </Picker>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Height...(cm)</Text>
        <TextInput
          name="height"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(numeric) => handleChange("height", numeric)}
          value={formDescription.height}
          maxLength={3}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Weight...(kg)</Text>
        <TextInput
          name="weight"
          style={styles.input}
          keyboardType="numeric"
          onChangeText={(numeric) => handleChange("weight", numeric)}
          value={formDescription.weight}
          maxLength={3}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Caractere...</Text>
        <TextInput
          name="caractere"
          style={styles.input}
          onChangeText={(text) => handleChange("caractere", text)}
          value={formDescription.caractere}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Main hobby...</Text>
        <TextInput
          name="hobby"
          style={styles.input}
          onChangeText={(text) => handleChange("hobby", text)}
          value={formDescription.hobby}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Other hooby...</Text>
        <TextInput
          name="hobby2"
          style={styles.input}
          onChangeText={(text) => handleChange("hobby2", text)}
          value={formDescription.hobby2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>You'r here for?...</Text>
        <TextInput
          name="objectif"
          style={styles.input}
          onChangeText={(text) => handleChange("objectif", text)}
          value={formDescription.objectif}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Anything else?...</Text>
        <TextInput
          name="other"
          style={styles.input}
          onChangeText={(text) => handleChange("other", text)}
          value={formDescription.other}
        />
      </View>
      <Button mode="contained" onPress={handleSubmit}>
        Submit
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

export default DescriptionForm;
