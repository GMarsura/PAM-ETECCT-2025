
import { useRouter } from "expo-router"; 
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import CardNota from "../components/CardNota/CardNota";
import Icon from "react-native-remix-icon";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function EditData() {
  const router = useRouter();

  
  const [nome, setNome] = useState("");
  const [newNota, setNewNota] = useState("");
  const [notas, setNotas] = useState<number[]>([]);
  const [media, setMedia] = useState(0);
  const [btnDisable, setBtnDisable] = useState(true)


  
  
  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem("novoAluno");
        if (savedData) {
          const parsedData = JSON.parse(savedData);
          setNome(parsedData.nomeAluno || "");
          setNotas(parsedData.notasAluno || []);
          calcularMedia(parsedData.notasAluno || []);
        } else {
          setNome(nomeAluno || "");
          setNotas(notasAluno || []);
          calcularMedia(notasAluno || []);
        }
      } catch (error) {
        console.error("Erro ao carregar os dados:", error);
      }
    };
    loadData();
  }, []);

  
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem(
          "novoAluno",
          JSON.stringify({ nomeAluno: nome, notasAluno: notas })
        );
      } catch (error) {
        console.error("Erro ao salvar:", error);
      }
    };
    saveData();
  }, [nome, notas]);



  const redirect = async()=>{
    try {
      const savedData = await AsyncStorage.getItem("novoAluno");
      if (savedData) {
        const parsedData = JSON.parse(savedData);
        const novoAluno = { idAluno: Date.now(), ...parsedData };o

        
        const alunosSalvos = await AsyncStorage.getItem("alunos");
        const listaAlunos = alunosSalvos ? JSON.parse(alunosSalvos) : [];

     
        const novaLista = [...listaAlunos, novoAluno];
        
      
        await AsyncStorage.setItem("alunos", JSON.stringify(novaLista));
      }
    } catch (error) {
      console.error("Erro ao salvar aluno:", error);
    }

    router.push("/")
    
  }

  
  const calcularMedia = (notasArray) => {
    if (notasArray.length === 0) {
      setMedia(0);
    } else {
      const soma = notasArray.reduce((acc, num) => acc + num, 0);
      setMedia(soma / notasArray.length);
    }
  };

  
  const addNota = () => {
    if (newNota !== "") {
      const notaNumerica = parseFloat(newNota);
      if (!isNaN(notaNumerica) && notaNumerica >= 0 && notaNumerica <= 10) {
        const novasNotas = [...notas, notaNumerica];
        setNotas(novasNotas);
        calcularMedia(novasNotas);
        
      }
    }
    setNewNota("");
  };

  
  const deleteNota = (index) => {
    const novasNotas = notas.filter((_, i) => i !== index);
    setNotas(novasNotas);
    calcularMedia(novasNotas);
  };

  
  const cleanNotas = () => {
    setNotas([]);
    setMedia(0);
  };


  const velNome = (text)=>{
    if(text === ""){
      setBtnDisable(true)
    }else{
      setBtnDisable(false)
    }
    setNome(text)

  }

  const handleNota = (input)=>{
    const numberValue = input.replace(/[^0-9]/g, '');
  
    
    if(numberValue === '' || parseInt(numberValue) <=10){
      setNewNota(numberValue)
    }
    
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} className="w-dvh h-dvh bg-gradient-to-br from-slate-500 to-slate-800">
      <View className="w-full h-full flex flex-col justify-between px-4 py-8 bg-slate-200 rounded-xl sm:w-[420px] sm:h-max sm:p-8">
        <View className="border-b-2 border-slate-300">
          <View className="flex flex-row justify-between items-center mb-8">
            <Text className="text-3xl text-center font-manrope font-bold">Medium</Text>

            
              <Pressable className="text-base font-manrope font-medium color-zinc-800 hover:underline" onPress={()=>router.push("/")}>
                <Text>Voltar</Text>
              </Pressable>
            
          </View>

          {/* Input Nome */}
          <TextInput value={nome} onChangeText={velNome} placeholder="Nome do aluno" className="font-manrope p-2 bg-white rounded-md border-2 border-slate-300 mb-4 placeholder:color-slate-500"></TextInput>

          {/* Input Nota Aluno */}
          <View className="flex flex-row gap-3 mb-8">
            <TextInput value={newNota} onChangeText={handleNota} keyboardType="numeric" placeholder="Nota do aluno. Ex.: 7.5" className="w-full font-manrope p-2 bg-white rounded-md border-2 border-slate-300 placeholder:color-slate-500"></TextInput>

            <Pressable className="w-[38px] h-[38px] flex justify-center items-center rounded-md bg-violet-500 hover:bg-violet-600" onPress={addNota}>
              <Text>
                <Icon name="add-line" size={24} color="#fff" />
              </Text>
            </Pressable>
          </View>

          {/* Cards Notas */}
          <View className="h-[174px] overflow-y-auto p-3 bg-slate-300 rounded-md">
            {notas.map((item, i) => (
              <CardNota key={i} nota={item} ind={i} deleteNota={() => deleteNota(i)} />
            ))}
          </View>

          {/* Limpar tudo */}
          <Pressable onPress={cleanNotas} className="w-fit mt-4 mb-4">
            <Text className="flex flex-row gap-1 text-base font-manrope font-medium color-zinc-800 hover:underline">
              <Icon name="delete-bin-line" size={20} color="#27272a" />
              Limpar Notas
            </Text>
          </Pressable>
        </View>

        {/* View do Resultado */}
        <View className="flex flex-col justify-center items-center py-10">
          <Text className="color-zinc-900 text-2xl font-semibold font-manrope">{`Média do aluno: ${media.toFixed(2)}`}</Text>
          <Text className="color-zinc-600 text-base font-medium font-manrope">Situação: {media >= 6 ? "Aprovado" : "Reprovado"}</Text>
        </View>


        <Pressable className="w-full color-zinc-100 text-xl text-center py-2 bg-violet-500 rounded-md hover:bg-violet-600" onPress={redirect} disabled={btnDisable}>        
          <Text className="color-zinc-100 text-xl text-center font-manrope">Registrar Aluno</Text>          
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
