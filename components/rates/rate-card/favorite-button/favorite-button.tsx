import { TouchableOpacity } from 'react-native';

import { useFavorites } from '@/providers';
import { Star, StarFilled } from '@/assets/svg';

interface IFavoriteButtonProps {
  currency: string;
}

export const FavoriteButton = ({ currency }: IFavoriteButtonProps) => {
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
    <TouchableOpacity onPress={toggleFavorite}>
      {isFavorite ? <StarFilled width={32} height={32} /> : <Star width={32} height={32} />}
    </TouchableOpacity>
  );
};
