import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { Button } from "react-native-paper";

const Result = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button mode="contained" onPress={() => navigation.goBack()}>
        Make me a description
      </Button>
    </View>
  );
};

export default Result;
