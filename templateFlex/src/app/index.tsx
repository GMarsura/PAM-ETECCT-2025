import { ScrollView, View } from "react-native";
import Header from "../components/Header/Header";

import SummaryCards from "../components/SummaryCards/SummaryCards";
import FooterText from "../components/FooterText/FooterText";

export default function Index() {
  return (
    <ScrollView className="bg-white flex flex-col items-center">
      <Header />
      <SummaryCards />
      <FooterText />
    </ScrollView>
  );
}
