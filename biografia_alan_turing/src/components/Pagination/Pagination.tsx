import { Image, Pressable, Text, View } from "react-native";

export default function Pagination() {
  return (
    <View className="flex flex-row justify-between bg-[#A3A3A3]">
      <Pressable className="flex justify-center align-middle py-1 px-3 border-2" onPress={() => console.log("Volta o conteúdo!")}>
        <Image source={require("../../../assets/images/icons/arrowLeft.svg")}></Image>
      </Pressable>
      
      <Text className="w-full p-3 border-t-2 border-b-2 font-sometypeMono font-bold text-center">1 de 5</Text>

      <Pressable className="flex justify-center align-middle py-1 px-3 border-2" onPress={() => console.log("Próximo conteúdo!")}>
        <Image source={require("../../../assets/images/icons/arrowRight.svg")}></Image>
      </Pressable>
    </View>
  );
}