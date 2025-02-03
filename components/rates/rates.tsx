import { RefreshControl } from 'react-native';
import { FlashList } from '@shopify/flash-list';

import { IRates } from '@/types';
import { keyExtractor, renderItem } from './rates.utils';

interface IRatesProps {
  rates: IRates;
  isFetching: boolean;
  refetch: () => void;
}

export const Rates = ({ rates, isFetching, refetch }: IRatesProps) => {
  return (
    <FlashList
      data={Object.entries(rates).map(([currency, rate]) => ({ currency, rate }))}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      estimatedItemSize={100}
      refreshControl={<RefreshControl refreshing={isFetching} onRefresh={refetch} />}
    />
  );
};
