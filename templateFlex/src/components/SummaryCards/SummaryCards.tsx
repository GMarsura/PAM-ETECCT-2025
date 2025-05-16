import { View, Text } from "react-native";

const SummaryItem = ({ colorFrom, colorVia, colorTo, label, value }) => (
  <View className="flex flex-col justify-between items-center p-2">
    <View className="flex flex-row gap-2 items-center">
      <View className={`w-[25px] h-[25px] bg-gradient-to-r from-[${colorFrom}] via-[${colorVia}] to-[${colorTo}] rounded-full`} />
      <Text className="text-3xl">{label}</Text>
    </View>
    <Text className="text-6xl">{value}</Text>
  </View>
);

export default function SummaryCards() {
  return (
    <View className="flex flex-col items-center w-[100dvw] justify-between gap-10">
      <View className="flex flex-row items-stretch justify-center w-full gap-2">
        <SummaryItem label="INCOMES" value="$267" colorFrom="#FB6043" colorVia="#ff4958" colorTo="#f8053e" />
        <SummaryItem label="EXPENSES" value="$267" colorFrom="#FB6043" colorVia="#ff4958" colorTo="#f8053e" />
      </View>
    </View>
  );
}
