import sealosCoin from '@/assert/sealos_coin.png';
import { IconProps, Img, Text, TextProps } from '@chakra-ui/react';
export default function CurrencySymbol({
  type = 'shellCoin',
  ...props
}: {
  type?: 'shellCoin' | 'cny' | 'usd';
} & IconProps &
  TextProps) {
  return type === 'shellCoin' ? (
    <Img src={sealosCoin.src} boxSize={'16px'} maxW={'unset'} {...props} w={'auto'}></Img>
  ) : type === 'cny' ? (
    <Text {...props}>￥</Text>
  ) : (
    <Text {...props}>$</Text>
  );
}
