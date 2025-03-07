import { Pressable, Text, View} from "react-native";


export default function Topic({description}) {
  return (
    <View>
      <Text>{description}</Text>
    </View>
  );
}