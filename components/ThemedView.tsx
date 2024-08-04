import { View, type ViewProps, KeyboardAvoidingView } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
  useKeyboardAvoidingView?: boolean;
};

export function ThemedView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  if (otherProps.useKeyboardAvoidingView) {
    return (
      <KeyboardAvoidingView style={[{ backgroundColor }, style]} {...otherProps} />
    );
  }


  return <View style={[{ backgroundColor }, style]} {...otherProps} />;
}
