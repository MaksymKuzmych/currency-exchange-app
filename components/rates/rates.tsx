import { useState } from 'react';
import { RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { useFavorites } from '@/providers';
import { IRates } from '@/types';
import { PrimaryButton } from '../ui/buttons';
import { keyExtractor, renderItem } from './rates.utils';

interface IRatesProps {
  base: string;
  rates: IRates;
  isFetching: boolean;
  refetch: () => void;
}

export const Rates = ({ base, rates, isFetching, refetch }: IRatesProps) => {
  const { favorites } = useFavorites();
  const [showFavorites, setShowFavorites] = useState(false);

  const allRates = Object.entries(rates).map(([currency, rate]) => ({
    base,
    currency,
    rate,
  }));

  const data = showFavorites
    ? allRates.filter((item) => favorites.includes(item.currency))
    : allRates;

  const handleShowFavorites = () => setShowFavorites((prev) => !prev);

  return (
    <>
      <PrimaryButton
        title={showFavorites ? 'Show all' : 'Show favorites'}
        onPress={handleShowFavorites}
      />
      <FlashList
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        estimatedItemSize={73}
        refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
      />
    </>
  );
};
