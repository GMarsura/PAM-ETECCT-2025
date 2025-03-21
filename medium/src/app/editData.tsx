import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CardNota from "../components/CardNota/CardNota";

import Icon from "react-native-remix-icon";




export default function EditData() {

 

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} className="w-dvh h-dvh bg-gradient-to-br from-slate-500 to-slate-800">

      <View className="w-full h-full flex flex-col justify-between px-4 py-8 bg-slate-200 rounded-xl sm:w-[420px] sm:h-max sm:p-8">
        <View className="border-b-2 border-slate-300">
          <View className="flex flex-row justify-between items-center  alig mb-8">
            <Text className="text-3xl text-center font-manrope font-bold">Medium</Text>

            {/* Botão Voltar */}
            <Link href={"/"}>
              <Pressable className="text-base font-manrope font-medium color-zinc-800 hover:underline">
                <Text>Voltar</Text>              
              </Pressable>
            </Link>
          </View>

          {/* Input Nome */}
          <TextInput placeholder="Nome do aluno" className="font-manrope p-2 bg-white rounded-md border-2 border-slate-300 mb-4 placeholder:color-slate-500"></TextInput>

          {/* Input Nota Aluno */}
          <View className="flex flex-row gap-3 mb-8">
            {/* Input */}
            <TextInput keyboardType="numeric" placeholder="Nota do aluno. Ex.: 7.5" className="w-full font-manrope p-2 bg-white rounded-md border-2 border-slate-300 placeholder:color-slate-500"></TextInput>

            {/* Botão Adicionar nota */}
            <Pressable className="w-[38px] h-[38px] flex justify-center items-center rounded-md bg-violet-500 hover:bg-violet-600">
              <Text>
                <Icon name="add-line" size={24} color="#fff" />
              </Text>            
            </Pressable>
          </View>

          {/* Cards Notas */}
          {/* Quando houver mais de 3 cards (height > 174px), o scroll ativa */}
          <View className="h-[174px] overflow-y-auto p-3 bg-slate-300 rounded-md">
            <CardNota nota={0} />
            <CardNota nota={0} />
            <CardNota nota={0} />
            <CardNota nota={0} />
          </View>

          {/* Limpar tudo */}
          <Pressable onPress={() => console.log("Apagar todas as notas")} className="w-fit mt-4 mb-4">
            <Text className="flex flex-row gap-1 text-base font-manrope font-medium color-zinc-800 hover:underline">
              <Icon name="delete-bin-line" size={20} color="#27272a" />
              Limpar Notas
            </Text>
          </Pressable>
        </View>

        {/* View do Resultado */}
        <View className="flex flex-col justify-center items-center py-10">
          <Text className="color-zinc-900 text-2xl font-semibold font-manrope">Média do aluno: 10.0</Text>
          <Text className="color-zinc-600 text-base font-medium font-manrope">Situação: Aprovado</Text>
        </View>

        {/* Botão Registrar Aluno */}
        <Pressable className="w-full color-zinc-100 text-xl text-center py-2 bg-violet-500 rounded-md hover:bg-violet-600">        
          <Text className="color-zinc-100 text-xl text-center font-manrope">Registrar Aluno</Text>          
        </Pressable>
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