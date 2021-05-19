import React from 'react';
import { StyleSheet } from 'react-native';
import { Button as RNButton } from 'react-native-elements';
import borderRadius from '@patternfly/react-tokens/dist/js/global_BorderRadius_sm';
import dangerColor from '@patternfly/react-tokens/dist/js/global_danger_color_100';
import primaryColor from '@patternfly/react-tokens/dist/js/global_primary_color_100';
import warningColor from '@patternfly/react-tokens/dist/js/global_warning_color_100';
import dark from '@patternfly/react-tokens/dist/js/global_Color_dark_100';

const styles = StyleSheet.create({
  button: {
    borderRadius: parseInt(borderRadius.value.replace(/px/, '')),
    borderWidth: 1,
  },
  primary: {
    backgroundColor: primaryColor.value,
    borderColor: primaryColor.value,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderColor: primaryColor.value,
  },
  tertiary: {
    backgroundColor: 'transparent',
    borderColor: dark.value
  },
  danger: {
    backgroundColor: dangerColor.value,
    borderColor: dangerColor.value,
  },
  warning: {
    backgroundColor: warningColor.value,
    borderColor: warningColor.value,
  },
  plain: {
    backgroundColor: 'transparent',
    borderColor: 'transparent'
  },
});

const titleStyles = StyleSheet.create({
  secondary: {
    color: primaryColor.value
  },
  tertiary: {
    color: dark.value
  },
  warning: {
    color: dark.value
  },
  plain: {
    color: primaryColor.value
  }
})

const styleMapper = {
  primary: styles.primary,
  secondary: styles.secondary,
  tertiary: styles.tertiary,
  danger: styles.danger,
  warning: styles.warning,
  plain: styles.plain
};

export const variant = Object.keys(styleMapper).reduce((acc, curr) => ({
  ...acc,
  [curr]: curr
}), {});

const Button = ({ variant = 'primary', style, titleStyle, ...props }) => {
  return <RNButton
    buttonStyle={{
      ...styles.button,
      ...styleMapper?.[variant] || styles.primary,
      ...style
    }}
    titleStyle={{
      ...titleStyles?.[variant],
      ...titleStyle
    }}
    {...props}
  />;
}

export default Button;
