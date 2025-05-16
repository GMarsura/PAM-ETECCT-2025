import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";



export default function IconItem({ icon, label }) {
  return (
    <View className="flex flex-col items-center">
    <View className="bg-white p-9 flex flex-col items-center justify-center rounded-2xl" style={{ aspectRatio: 1.3 / 1 }}>
      <FontAwesome name={icon} size={30} color="black" />
    </View>
    <Text className="text-2xl text-white">{label}</Text>
  </View>
  );
}
