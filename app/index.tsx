import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFixerRates } from '@/hooks';
import { Loader, ErrorDisplay, BottomBanner, Rates } from '@/components';

const RatesScreen = () => {
  const { data, error, isLoading, isFetching, refetch } = useFixerRates();

  if (isLoading) return <Loader />;

  return (
    <>
      <StatusBar style='dark' />
      <SafeAreaView className='flex-1'>
        {error && !data?.rates && <ErrorDisplay message={error.message} retry={refetch} />}
        {data?.rates && <Rates rates={data.rates} isFetching={isFetching} refetch={refetch} />}
        {error && data?.rates && <BottomBanner message='Refresh failed. Showing cached data.' />}
      </SafeAreaView>
    </>
  );
};

export default RatesScreen;
