import { View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import IconItem from "../IconButtons/IconButtons";



export default function Header() {
  return (
    <View className="bg-gradient-to-b from-[#FB6043] via-[#ff4958] to-[#f8053e] w-[100dvw] h-[60dvh] rounded-b-3xl rounded-t-3xl flex flex-col items-center justify-around">
      <View className="bg-white w-[90%] pb-9 pt-6 rounded-3xl flex-col">
        <View className="flex flex-row-reverse rounded-t-3xl items-center">
          <FontAwesome name="cog" size={40} color="black" className="right-4" />
        </View>
        <View className="w-full h-full rounded-b-3xl items-center">
          <Text className="text-2xl md:text-6xl">Lorem ipsum, dolor</Text>
          <Text className="text-5xl md:text-9xl">$235,678.25</Text>
        </View>
      </View>

      <View className="flex flex-row w-[90%] justify-between mt-[-40]">
        <IconItem icon="search" label="Lorem" />
        <IconItem icon="bar-chart" label="Ipsum" />
        <IconItem icon="cog" label="Dolor" />
      </View>
    </View>
  );
}
