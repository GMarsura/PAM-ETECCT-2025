import { Pressable, Text, View, Image } from "react-native";

export default function Img() {
  return (
    <Image className="w-full h-auto rounded-xl" source={require('../../../assets/imgs-alan-turing/img1.jpg')}></Image>
  );
}