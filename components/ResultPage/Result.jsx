import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

const Result = ({ route }) => {
  const reponse = route.params;
  const navigation = useNavigation();
  return (
    <View>
      <Text>{reponse}</Text>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Make me a description
      </Button>
    </View>
  );
};

export default Result;
