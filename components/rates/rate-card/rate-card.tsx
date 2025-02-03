import { View, Text } from 'react-native';

import { ArrowRight } from '@/assets/svg';

import { FavoriteButton } from './favorite-button';

interface IRateCardProps {
  base: string;
  currency: string;
  rate: number;
}

export const RateCard = ({ base, currency, rate }: IRateCardProps) => {
  return (
    <View className='m-2 flex-row items-center justify-between rounded-2xl bg-white p-4 shadow-lg'>
      <View className='flex-row items-center gap-4'>
        <Text className='text-2xl'>1 {base}</Text>
        <ArrowRight width={32} height={32} />
        <Text className='text-2xl'>
          {rate} {currency}
        </Text>
      </View>
      <FavoriteButton currency={currency} />
    </View>
  );
};
