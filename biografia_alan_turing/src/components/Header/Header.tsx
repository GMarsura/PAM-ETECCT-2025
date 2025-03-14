import { Pressable, Text, View } from "react-native";
import * as Linking from 'expo-linking';
import { Link } from 'expo-router';
// import { StyleSheet } from "react-native";
// import { Feather } from "@expo/vector-icons";

export default function Header() {
  return (
    <View className="flex flex-row justify-between p-5 bg-[#292929] ">
      <Text className="text-lg font-sometypeMono color-slate-100 ">B.A.T</Text>
      <Pressable onPress={() => console.log("Pressionei")}>
        <Link className="text-lg underline color-slate-100" href="https://brasilescola.uol.com.br/biografia/alan-mathison.htm" target="_blank">Fonte</Link>
      </Pressable>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#292929", // cor de fundo preta
//     padding: 20, // ajuste de preenchimento para tornar o layout mais legível
//   },
// });