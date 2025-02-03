import axios from 'axios';

import { FixerRatesResponse } from '@/types';

const BASE_URL = 'https://data.fixer.io/api';
const API_KEY = process.env.EXPO_PUBLIC_FIXER_API_KEY;

export const getLatestRates = async () => {
  try {
    const { data } = await axios.get<FixerRatesResponse>(`${BASE_URL}/latest`, {
      params: { access_key: API_KEY },
    });

    if (!data.success) {
      throw new Error(
        `Fixer API Error (${data.error.code}): ${data.error.info || data.error.type || 'Unknown error'}`,
      );
    }

    return data;
  } catch {
    throw new Error('Failed to fetch exchange rates. Please try again later.');
  }
};
