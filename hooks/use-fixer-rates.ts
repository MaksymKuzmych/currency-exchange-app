import { useQuery } from '@tanstack/react-query';

import { getLatestRates } from '@/services';

export const useFixerRates = () => {
  return useQuery({
    queryKey: ['fixerRates'],
    queryFn: getLatestRates,
    staleTime: 5 * 60 * 1000,
  });
};
