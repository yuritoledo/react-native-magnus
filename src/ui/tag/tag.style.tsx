import { StyleSheet } from 'react-native';

import {
  getThemeProperty,
  createSpacingStyles,
  createBorderRadiusStyles,
  createBorderColorStyles,
  createBorderWidthStyles,
} from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.div = {
    borderColor: getThemeProperty(
      theme.colors,
      props.borderColor,
      'transparent'
    ),
    borderWidth: props.borderWidth,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: getThemeProperty(theme.colors, props.bg, 'transparent'),
    ...createBorderWidthStyles(props),
    ...createSpacingStyles(props, theme.spacing),
    ...createBorderColorStyles(props, theme.colors),
    ...createBorderRadiusStyles(props, theme.borderRadius),
  };

  computedStyle.text = {
    color: getThemeProperty(theme.colors, props.color, '#000'),
    fontSize: getThemeProperty(theme.fontSize, props.fontSize, 16),
    textAlign: props.textAlign,
    textTransform: props.textTransform,
    textDecorationColor: getThemeProperty(
      theme.colors,
      props.textDecorColor,
      'transparent'
    ),
  };

  computedStyle.prefix = {
    marginRight: 4,
  };

  computedStyle.suffix = {
    marginLeft: 4,
  };

  if (props.h) {
    computedStyle.div = {
      ...computedStyle.div,
      height: props.h,
    };
  }

  if (props.flexDir) {
    computedStyle.div = {
      ...computedStyle.div,
      flexDirection: props.flexDir,
    };
  }

  if (props.w) {
    computedStyle.div = {
      ...computedStyle.div,
      width: props.w,
    };
  }

  if (props.minH) {
    computedStyle.div = {
      ...computedStyle.div,
      minHeight: props.minH,
    };
  }

  if (props.minW) {
    computedStyle.div = {
      ...computedStyle.div,
      minWidth: props.minW,
    };
  }

  // merging style props to computed style
  if (props.style) {
    computedStyle.div = {
      ...computedStyle.div,
      ...props.style,
    };
  }

  return StyleSheet.create(computedStyle);
};
