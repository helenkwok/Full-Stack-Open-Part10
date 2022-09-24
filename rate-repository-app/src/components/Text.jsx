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
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorTextAppBar: {
    color: theme.colors.textAppBar,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  fontSizeAppBar: {
    fontSize: theme.fontSizes.appBar,
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
    color === 'appBar' && styles.colorTextAppBar,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    fontSize === 'appBar' && styles.fontSizeAppBar,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;