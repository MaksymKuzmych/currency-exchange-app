import { View, Text } from 'react-native';

interface IRateCardProps {
  currency: string;
  rate: number;
}

export const RateCard = ({ currency, rate }: IRateCardProps) => {
  return (
    <View>
      <Text>{currency}:</Text>
      <Text>{rate}</Text>
    </View>
  );
};
