import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CardAluno from "../components/CardAluno/CardAluno";
import Icon from "react-native-remix-icon";
import { useState } from "react";
import Aluno from "../classes/Aluno";
import { useNavigation } from "@react-navigation/native";


export default function Index() {
  const navigation = useNavigation();

  const aluno1 = new Aluno(1,'Gabrieggl', [1,2]);
  const aluno2 = new Aluno(2,'Thiago', [1,3]);
  const aluno3 = new Aluno(3,'Mavine', [1,4]);

  const [alunos, setAlunos] = useState([aluno1, aluno2, aluno3]);

  const deletarTodosOsAlunos = () =>{
    setAlunos([])
  }

  const deletarAluno = (id:number)=>{
    setAlunos(alunos.filter((aluno)=> aluno.idAluno !== id))
  }

  






  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} className="w-dvh h-dvh bg-gradient-to-br from-slate-500 to-slate-800">

      <View className="w-full h-full flex flex-col justify-between px-4 py-8 bg-slate-200 rounded-xl sm:w-[420px] sm:h-max sm:p-8">
        <View>
          <Text className="text-3xl text-center font-manrope font-bold mb-8">Medium</Text>

          {/* Cards Alunos */}   
          {/* 254 -> 4 cards / 318 -> 5 cards */}
          
          
          
          <View className="min-h-[154px] max-h-[318px] overflow-y-auto p-3 bg-slate-300 rounded-md sm:max-h-[254px]">
            {
              alunos.map((item)=>(
                <CardAluno aluno={item} deletarAluno={deletarAluno}/>
              ))
            }
             
          </View>

          {/* Limpar tudo */}
          <Pressable onPress={deletarTodosOsAlunos} className="w-fit mt-4 mb-20">
            <Text className="flex flex-row gap-1 text-base font-manrope font-medium color-zinc-800 hover:underline">
              <Icon name="delete-bin-line" size={20} color="#27272a" />
              Limpar Médias
            </Text>
          </Pressable>
        </View>

        {/* Botão Adicionar Alunos */}
        
          <Pressable className="w-full py-2 bg-violet-500 rounded-md hover:bg-violet-600" onPress={() => navigation.navigate("editData", {nomeAluno: "", notasAluno:[1,2,3], situacaoAluno: false})}>
            <Text className="color-zinc-100 text-xl text-center font-manrope">Adicionar Alunos</Text>
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