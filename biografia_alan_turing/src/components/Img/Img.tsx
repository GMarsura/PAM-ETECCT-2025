import { Pressable, Text, View, Image } from "react-native";


export default function Img({src}) {
  return (
    <View>

      <Image source={require('../../../assets/imgs-alan-turing/img1.jpg')}></Image>
    </View>
  );
}