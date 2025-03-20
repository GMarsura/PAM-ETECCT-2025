import { Link } from "expo-router";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import CardNota from "../components/CardNota/CardNota";

export default function EditData() {
  return (
    <ScrollView className="bg-indigo-500">

      <View className="w-[400px] bg-slate-300 space-y-2">
        <View className="flex flex-row justify-between align-middle">
          <Text className="text-2xl text-center">Medium</Text>
          <Link href={"/"}>
            <Pressable className="bg-slate-400">
              Voltar
            </Pressable>
          </Link>
        </View>

        <TextInput className="bg-white"></TextInput>

        <View className="flex flex-row">
          <TextInput className="w-full bg-white"></TextInput>
          <Pressable className="w-max">+</Pressable>
        </View>

        <View className="bg-slate-400">
          <CardNota nota={0} />
          <CardNota nota={0} />
          <CardNota nota={0} />        
        </View>

        <Pressable>
          [icone] Limpar campos
        </Pressable>

        <View className="flex flex-col">
          <Text>Média do aluno: 10.0</Text>
          <Text>Situação: Aprovado</Text>
        </View>

        <Pressable>
          Registrar Aluno
        </Pressable>
      </View>

    </ScrollView>
  );
}