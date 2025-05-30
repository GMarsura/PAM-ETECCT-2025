import Aluno from "@/src/classes/Aluno";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-remix-icon";
export default function CardAluno({aluno,deletarAluno}) {
  
  const {idAluno, nomeAluno, notasAluno, situacaoAluno} = aluno;
  
  
  

  return (
    <View className="flex flex-row justify-between items-center border-b-2 py-3 border-slate-400 first:pt-0 last:pb-0 last:border-b-0">
      <View>
        <Pressable onPress={() => console.log("Tela aluno")} className="color-zinc-900 font-semibold">
          <Text className="font-manrope">{nomeAluno} - Média: {aluno.getMedia()}</Text>
        </Pressable>
        <Text className="color-zinc-600 font-medium font-manrope">{situacaoAluno ? 'Aprovado' : 'Reprovado'}</Text>
      </View>

      <Pressable onPress={() => deletarAluno(idAluno)} className="w-[38px] h-[38px] flex justify-center items-center rounded-md bg-violet-500 hover:bg-violet-600">
        <Icon name="delete-bin-fill" size={20} color="#fff" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
});