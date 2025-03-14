import { Image, Pressable, Text, View } from "react-native";

export default function Pagination({changeText, index, length}) {
  return (
    <View className="flex flex-row justify-between bg-[#A3A3A3]">
      <Pressable className="flex justify-center align-middle py-1 px-3 border-2" onPress={()=>changeText(-1)}>
        <Image source={require("../../../assets/images/icons/arrowLeft.svg")}></Image>
      </Pressable>
      
      <Text className="w-full p-3 border-t-2 border-b-2 font-sometypeMono font-bold text-center" children={`${index + 1} de ${length}`}/>

      <Pressable className="flex justify-center align-middle py-1 px-3 border-2" onPress={()=>changeText(+1)}>
        <Image source={require("../../../assets/images/icons/arrowRight.svg")}></Image>
      </Pressable>
    </View>
  );
}