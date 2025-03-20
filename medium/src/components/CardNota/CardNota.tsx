import { Pressable, Text, View } from "react-native";

export default function CardNota({nota: number}) {
  return (
    <View className="flex flex-row justify-between bg-green-100">
      <Text>Nota #: 0.0</Text>

      <Pressable>
        Apagar
      </Pressable>
    </View>
  );
}