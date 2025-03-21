import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CardAluno from "../components/CardAluno/CardAluno";

import Icon from "react-native-remix-icon";

export default function Index() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} className="w-dvh h-dvh bg-gradient-to-br from-slate-500 to-slate-800">

      <View className="w-full h-full flex flex-col justify-between px-4 py-8 bg-slate-200 rounded-xl sm:w-[420px] sm:h-max sm:p-8">
        <View>
          <Text className="text-3xl text-center font-manrope font-bold mb-8">Medium</Text>

          {/* Cards Alunos */}   
          {/* 254 -> 4 cards / 318 -> 5 cards */}
          <View className="min-h-[154px] max-h-[318px] overflow-y-auto p-3 bg-slate-300 rounded-md sm:max-h-[254px]">
            <CardAluno aluno={{}} />
            <CardAluno aluno={{}} />
            <CardAluno aluno={{}} />
            <CardAluno aluno={{}} />
            <CardAluno aluno={{}} />
            
          </View>

          {/* Limpar tudo */}
          <Pressable onPress={() => console.log("Apagar todas as medias")} className="w-fit mt-4 mb-20">
            <Text className="flex flex-row gap-1 text-base font-manrope font-medium color-zinc-800 hover:underline">
              <Icon name="delete-bin-line" size={20} color="#27272a" />
              Limpar Médias
            </Text>
          </Pressable>
        </View>

        {/* Botão Adicionar Alunos */}
        <Link href={"/editData"}>
          <Pressable className="w-full py-2 bg-violet-500 rounded-md hover:bg-violet-600">
            <Text className="color-zinc-100 text-xl text-center font-manrope">Adicionar Alunos</Text>
          </Pressable>
        </Link>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center', // Centraliza o conteúdo verticalmente dentro da ScrollView
    alignItems: 'center', // Centraliza o conteúdo horizontalmente dentro da ScrollView
  },
});