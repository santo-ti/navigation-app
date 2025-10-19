import { Text, TextProps } from 'react-native'

export function Title({ children, ...rest }: TextProps) {
  return (
    <Text style={{ fontSize: 24, fontWeight: '700' }} {...rest}>
      {children}
    </Text>
  )
}
