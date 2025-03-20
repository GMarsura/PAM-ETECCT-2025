import { Link } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import CardAluno from "../components/CardAluno/CardAluno";

export default function Index() {
  return (
    <ScrollView className="bg-indigo-500">

      <View className="w-[400px] bg-slate-300">
        <Text className="text-2xl text-center">Medium</Text>

        <View className="bg-slate-500">
          <CardAluno aluno={{}} />
          <CardAluno aluno={{}} />
          <CardAluno aluno={{}} />
        </View>

        <Pressable>
          [icone] Limpar campos
        </Pressable>

        <Link href={"/editData"}>
          <Pressable className="bg-slate-400">
            Adicionar Alunos
          </Pressable>
        </Link>
      </View>
    </ScrollView>
  );
}