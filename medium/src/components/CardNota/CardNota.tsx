import { Pressable, Text, View } from "react-native";
import Icon from "react-native-remix-icon";

export default function CardNota({nota}) {
  return (
    <View className="flex flex-row justify-between items-center border-b-2 py-2 border-slate-400 first:pt-0 last:pb-0 last:border-b-0">
      <Text className="font-manrope color-zinc-900 font-semibold">{`Nota 1: ${nota}`}</Text>

      <Pressable onPress={() => console.log("Apagar card nota")} className="w-[38px] h-[38px] flex justify-center items-center rounded-md bg-violet-500 hover:bg-violet-600">
        <Icon name="delete-bin-fill" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}