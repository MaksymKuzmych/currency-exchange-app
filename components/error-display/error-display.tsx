import { View, Text } from 'react-native';

import { PrimaryButton } from '../ui/buttons';

interface IErrorDisplayProps {
  message: string;
  retry?: () => void;
}

export const ErrorDisplay = ({ message, retry }: IErrorDisplayProps) => {
  return (
    <View className='flex-1 items-center justify-center gap-4 p-4'>
      <Text className='text-center text-red-600'>{message}</Text>
      {retry && <PrimaryButton title='Retry' onPress={retry} />}
    </View>
  );
};
