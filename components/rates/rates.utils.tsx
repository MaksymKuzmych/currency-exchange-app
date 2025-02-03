import { RateCard } from './rate-card';
import { IExchangeRate } from './rates.types';

export const renderItem = ({ item: { base, currency, rate } }: { item: IExchangeRate }) => (
  <RateCard base={base} currency={currency} rate={rate} />
);

export const keyExtractor = ({ currency }: IExchangeRate) => currency;
