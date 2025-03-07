import { Text, View } from "react-native";
import Header from "../components/Header/Header";
import Img from "../components/Img/Img"
import Topic from "../components/Topics/Topic";

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
    <View>
      <Header />

      <View>


      <Img src={'src'}/>
      <View>
        <View>
          <Text>Biografia de</Text>
          <Text>Alan Turing</Text>
        </View>
        <View>
          {topics.map((item)=>(

            <Topic description={item.description}/>
          
          ))}
        </View>

        <View>
          <Text>
          “Eu acredito que às vezes são as pessoas que ninguém espera nada que fazem as coisas que ninguém consegue imaginar
          </Text>
        </View>


        
      </View>

      </View>
    </View>
  );
}