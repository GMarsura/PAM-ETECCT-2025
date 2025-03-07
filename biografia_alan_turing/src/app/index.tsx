import { Image, ScrollView, Text, View } from "react-native";
import { StyleSheet } from "react-native";

import Header from "../components/Header/Header";
import Img from "../components/Img/Img"
import Topic from "../components/Topics/Topic";
import Footer from "../components/Footer/Footer";

export default function Index() {

  const topics = [
    {
      description: 'Vida Pessoal'
    },
    {
      description: 'Vida Profissional'
    },
    {
      description: 'Maquina de Turing'
    },
    {
      description: 'Enigma'
    },
    {
      description: 'Ultimos anos'
    },
    {
      description: 'Legado'
    }
  ];

  return (
    <ScrollView className="w-dvw h-dvh bg-[#D9D9D9]">
      <Header />

      <View className="flex flex-row">
        <View className="w-[320px]">
          <Image style={styles.teste} className="aspect-[1/2]" source={require('../../assets/imgs-alan-turing/img1.jpg')} />

          <View>
            <Text className="text-[1.5dvw] font-unna italic color-[#656565]">Biografia de</Text>
            <Text className="text-5xl font-yrsa font-bold color-black">Alan Turing</Text>
          </View>

          <View>
            {topics.map((item, i)=>(
              <Topic key={i} description={item.description} />
            ))}
          </View>

          <Text className="text-2xl font-unna italic color-[#292929]">
            <Text className="text-6xl font-unna font-bold">“</Text>Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar
          </Text>
        </View>

        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit delectus dolor sunt vel harum dolorum iusto. Odio a excepturi aliquid numquam, deserunt dignissimos praesentium itaque voluptates porro amet maxime. Assumenda totam dignissimos non voluptatum in obcaecati, animi nemo maiores unde libero, sequi, suscipit reprehenderit doloribus itaque eius. Tenetur perferendis sapiente numquam ab iusto perspiciatis necessitatibus praesentium exercitationem quos, eos optio officiis mollitia nesciunt fugiat accusantium sed! Architecto, consequuntur assumenda adipisci quasi nostrum sint deserunt, iste officiis veniam voluptates, nemo quod. Necessitatibus iste, sit, dolores non nam tempore illo voluptatum sunt a soluta placeat consectetur vero magnam repudiandae eligendi dicta nihil.
          </Text>
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