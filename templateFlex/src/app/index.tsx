import { Text, View, ScrollView } from "react-native";
import { FontAwesome } from '@expo/vector-icons';
export default function Index() {
  return (
    <ScrollView className="bg-white flex flex-col items-center">



      
      <View className="bg-gradient-to-b from-[#FB6043] via-[#ff4958] to-[#f8053e] w-[100dvw] h-[60dvh] rounded-b-3xl rounded-t-3xl flex flex-col items-center justify-around">
        <View className="bg-white w-[90%] pb-9 pt-6 rounded-3xl flex-col">
          <View className="flex flex-row-reverse rounded-t-3xl items-center">
            <FontAwesome name="cog" size={40} color="black" className="right-4"/>
          </View>
          <View className="w-full h-full rounded-b-3xl items-center">
            <Text className="text-2xl md:text-6xl">Lorem ipsum, dolor</Text>
            <Text className="text-5xl md:text-9xl">$235,678.25</Text>
          </View>
          
        </View>
        <View className="flex flex-row w-[90%] justify-between">

          <View className="flex flex-col items-center">
            <View className="bg-white p-9 flex flex-col items-center justify-center rounded-2xl" style={{aspectRatio: 1.3 / 1 }}>
                <FontAwesome name="search" size={30} color="black" style={{ marginRight: 0 }} />
            </View>
            <Text className="text-2xl text-white">Lorem</Text>
          </View>


          <View className="flex flex-col items-center">
            <View className="bg-white p-9 flex flex-col items-center justify-center rounded-2xl" style={{aspectRatio: 1.3 / 1 }}>
                <FontAwesome name="bar-chart" size={25} color="black" style={{ marginRight: 0 }} />
            </View>
            <Text className="text-2xl text-white">Ipsum</Text>
          </View>


          <View className="flex flex-col items-center">
            <View className="bg-white p-9 flex flex-col items-center justify-center rounded-2xl" style={{aspectRatio: 1.3 / 1 }}>
                <FontAwesome name="cog" size={30} color="black" style={{ marginRight: 0 }} />
            </View>
            <Text className="text-2xl text-white">Dolor</Text>
          </View>

        </View>
        
      </View>

      <View className="flex flex-col items-center w-[100dvw] justify-between gap-10">


        <View className="flex flex-row items-stretch justify-center w-full gap-2 ">
          <View className="flex flex-col justify-between items-center p-2">

            <View className="flex flex-row gap-2 items-center">
              <View className="w-[25px] h-[25px] bg-gradient-to-r from-[#FB6043] via-[#ff4958] to-[#f8053e] rounded-full"/>
              <View>
                <Text className="text-3xl">INCOMES</Text>
              </View>
              
            </View>
            <Text className="text-6xl">$267</Text>
          </View>

      


          <View className=" flex flex-col justify-between items-center p-2 ">

            <View className="flex flex-row gap-2 items-center">
              <View className="w-[25px] h-[25px] bg-gradient-to-r from-[#d66767] via-[#000000] to-[#242424] rounded-full"/>
              <View>
                <Text className="text-3xl">EXPENSES</Text>
              </View>
              
            </View>
            <Text className="text-6xl">$267</Text>
          </View>
          
        </View>
        <View className="flex flex-col items-center justify-center">
          <Text className="flex flex-col text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe vero ea qui obcaecati repudiandae labore tempore ratione praesentium quae expedita atque minima
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
