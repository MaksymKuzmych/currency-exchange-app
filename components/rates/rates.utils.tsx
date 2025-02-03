import { RateCard } from './rate-card';
import { IExchangeRate } from './rates.types';

export const renderItem = ({ item: { currency, rate } }: { item: IExchangeRate }) => (
  <RateCard currency={currency} rate={rate} />
);

export const keyExtractor = ({ currency }: IExchangeRate) => currency;
