import { useRouter } from "expo-router"; 
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import CardAluno from "../components/CardAluno/CardAluno";
import Icon from "react-native-remix-icon";
import { useState, useEffect } from "react";
import Aluno from "../classes/Aluno";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
  const router = useRouter();
  const navigation = useNavigation();
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("alunos");
  
        if (savedData) {
          const parsedData = JSON.parse(savedData);
  
          
          const alunosConvertidos = parsedData.map(
            (item) => new Aluno(item.idAluno, item.nomeAluno, item.notasAluno)
          );
  
          setAlunos(alunosConvertidos);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
  
    loadData();
  }, []);
   ponente for montado



  

  const startNewALuno = async () => {
    await AsyncStorage.setItem(
      "novoAluno",
      JSON.stringify({ nomeAluno: "", notasAluno: [] })
    );

    router.push("/editData")
  };

  const deletarTodosOsAlunos = async() => {
    setAlunos([]);
    await AsyncStorage.setItem('alunos', JSON.stringify([]));

  };

  const deletarAluno = async(id: number) => {
    setAlunos(alunos.filter((aluno) => aluno.idAluno !== id));
    await AsyncStorage.setItem('alunos', JSON.stringify(alunos));
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} className="w-dvh h-dvh bg-gradient-to-br from-slate-500 to-slate-800">
      <View className="w-full h-full flex flex-col justify-between px-4 py-8 bg-slate-200 rounded-xl sm:w-[420px] sm:h-max sm:p-8">
        <View>
          <Text className="text-3xl text-center font-manrope font-bold mb-8">Medium</Text>

          {/* Cards Alunos */}
          <View className="min-h-[154px] max-h-[318px] overflow-y-auto p-3 bg-slate-300 rounded-md sm:max-h-[254px]">
            {alunos.map((item) => (
              <CardAluno aluno={item} deletarAluno={deletarAluno} />
            ))}
          </View>

          {/* Limpar todos */}
          <Pressable onPress={deletarTodosOsAlunos} className="w-fit mt-4 mb-20">
            <Text className="flex flex-row gap-1 text-base font-manrope font-medium color-zinc-800 hover:underline">
              <Icon name="delete-bin-line" size={20} color="#27272a" />
              Limpar Médias
            </Text>
          </Pressable>
        </View>

        {/* Botão Adicionar Alunos */}
        
          <Pressable className="w-full py-2 bg-violet-500 rounded-md hover:bg-violet-600" onPress={startNewALuno}>
            <Text className="color-zinc-100 text-xl text-center font-manrope">Adicionar Alunos</Text>
          </Pressable>
       
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center", // Centraliza o conteúdo verticalmente dentro da ScrollView
    alignItems: "center", // Centraliza o conteúdo horizontalmente dentro da ScrollView
  },
});
