import { Image, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import Header from "../components/Header/Header";
import Topic from "../components/Topics/Topic";
import Footer from "../components/Footer/Footer";
import texto from "./texto";
import Pagination from "../components/Pagination/Pagination";
import { useState } from "react";

export default function Index() {
  const [index, setIndex] = useState(0)
  

  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const meses = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const changeText = (value:number)=>{
      var vIndex : number = index;
      vIndex += value;
      if(vIndex <= 0){
        vIndex = 0;
      }else if(vIndex >= texto.length){
        vIndex = 0;
      }
      setIndex(vIndex);
  }

  return (
    <ScrollView className="w-dvw h-dvh bg-[#D9D9D9]">
      <Header />

      <View className="flex flex-col justify-center gap-10 mt-10 mb-10 px-4 md:flex-row">
        <View className="w-full md:w-[320px]">
          <Image style={styles.teste} className="aspect-[1/2] mb-8" source={require('../../assets/imgs-alan-turing/img1.jpg')} />

          <View className="mb-8">
            <Text className="text-2xl font-unna italic color-[#656565]">Biografia de</Text>
            <Text className="text-4xl font-yrsa font-bold color-black">Alan Turing</Text>
          </View>

          <View className="mb-8 space-y-4">
            {texto.map((item, i)=>(
              <Topic key={i} description={item.titulo} />
            ))}
          </View>

          <Text className="text-2xl font-unna italic color-[#292929]">
            <Text className="text-6xl font-unna font-bold">“</Text>Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar
          </Text>
        </View>

        <View className="w-full md:w-[620px]">
          <View>
            <Text className="font-yrsa font-bold text-4xl text-center">ALAN TURING:</Text>
            <Text className="font-yrsa font-bold text-4xl text-center">O PAI DA COMPUTAÇÃO</Text>

            <Text className="font-unna italic text-xl color-[#656565] text-justify">
              <Text className="text-6xl">M</Text>atemático e criptógrafo inglês considerado atualmente como o <Text className="underline">pai da computação</Text>, uma vez que, por meio de suas ideias, foi possível desenvolver o que chamamos hoje de <Text className="underline">computador</Text>.
            </Text>
            
            <Text className="font-sometypeMono font-bold py-2 border-b-2 border-[#1E1E1E] mb-4 mt-4">{`São Paulo - ${currentDay} de ${meses[(currentMonth)]} de ${currentYear}`}</Text>
          </View>
        
          <Text className="text-4xl font-yrsa text-center mb-4" children={texto[index].titulo}/>
          <Text className="text-[1rem] font-sometypeMono text-justify mb-10" children={texto[index].corpoTexto}/>
          
          <Pagination changeText = {changeText} index={index} length ={texto.length}/>
        </View>
      </View>

      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  teste: {
    width: 320,
    height: 320,
    objectFit: 'cover',
  },
});