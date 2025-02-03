import { View, Text, Button } from 'react-native';

import { useFavorites } from '@/providers';

interface IRateCardProps {
  currency: string;
  rate: number;
}

export const RateCard = ({ currency, rate }: IRateCardProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavorites();

  const isFavorite = favorites.includes(currency);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(currency);
    } else {
      addFavorite(currency);
    }
  };

  return (
    <View className='flex-row items-center justify-between'>
      <Text>{currency}:</Text>
      <Text>{rate}</Text>
      <Button
        title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        onPress={toggleFavorite}
      />
    </View>
  );
};
