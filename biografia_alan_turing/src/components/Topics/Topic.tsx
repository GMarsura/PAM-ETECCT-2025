import { Pressable, Text, View} from "react-native";


export default function Topic({description}) {
  return (
    <View className="py-2 border-b-2 border-[#1E1E1E]">
      <Text className="text-xl font-bold font-sometypeMono color-[#292929]">{description}</Text>
    </View>
  );
}