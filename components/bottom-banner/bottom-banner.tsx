import { View, Text } from 'react-native';

interface IBottomBannerProps {
  message: string;
}

export const BottomBanner = ({ message }: IBottomBannerProps) => {
  return (
    <View className='absolute bottom-0 left-0 right-0 bg-white p-2'>
      <Text className='text-center text-red-600'>{message}</Text>
    </View>
  );
};
