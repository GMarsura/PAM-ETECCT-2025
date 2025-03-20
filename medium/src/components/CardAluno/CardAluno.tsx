import { Pressable, Text, View } from "react-native";

export default function CardAluno({aluno : object}) {
  return (
    <View className="flex flex-row justify-between bg-green-100">
      <View>
        <Text>Nome Aluno: Média</Text>
        <Text>Aprovado</Text>
      </View>

      <Pressable>
        Apagar
      </Pressable>
    </View>
  );
}