import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { useFixerRates } from '@/hooks';
import { Loader, ErrorDisplay, BottomBanner, Rates } from '@/components';

const RatesScreen = () => {
  const { data, error, isLoading, isFetching, refetch } = useFixerRates();

  if (isLoading) return <Loader />;

  return (
    <>
      <StatusBar style='dark' />
      <View className='flex-1 bg-white'>
        {error && !data?.rates && <ErrorDisplay message={error.message} retry={refetch} />}
        {data?.rates && (
          <Rates base={data.base} rates={data.rates} isFetching={isFetching} refetch={refetch} />
        )}
        {error && data?.rates && <BottomBanner message='Refresh failed. Showing cached data.' />}
      </View>
    </>
  );
};

export default RatesScreen;
