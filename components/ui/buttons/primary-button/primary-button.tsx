import { Text, TouchableOpacity } from 'react-native';

interface IPrimaryButtonProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton = ({ title, onPress }: IPrimaryButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} className='m-2 rounded-xl bg-black px-12 py-4'>
      <Text className='text-center text-xl text-white'>{title}</Text>
    </TouchableOpacity>
  );
};
