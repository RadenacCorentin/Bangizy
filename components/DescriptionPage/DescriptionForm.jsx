import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const DescriptionForm = () => {
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    input3: "",
    selectedValue: "",
  });

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Input 1 :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("input1", text)}
          value={formData.input1}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Input 2 :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("input2", text)}
          value={formData.input2}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Input 2 :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => handleInputChange("input3", text)}
          value={formData.input3}
        />
      </View>
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
