import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  backgroundColorAppBar: {
    backgroundColor: theme.backgroundColors.appBar,
  },
  backgroundColorPrimary: {
    backgroundColor: theme.colors.primary,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextWhite: {
    color: theme.colors.textWhite,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ backgroundColor, color, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    backgroundColor === 'appBar' && styles.backgroundColorAppBar,
    backgroundColor === 'primary' && styles.backgroundColorPrimary,
    color === 'white' && styles.colorTextWhite,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;