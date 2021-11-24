import { FontFamily, FontWeight } from '../style/font'

const title1 = {
  fontFamily: FontFamily.PT_SANS,
  // fontStyle: FontStyle.NORMAL,
  fontWeight: FontWeight.BOLD,
  // fontSize: FontSize.FS32,
  // lineHeight: LineHeight.LH41,
  // fontSizeMobile: FontSize.FS26,
  // lineHeightMobile: LineHeight.LH34,
}

const title2 = {
  fontFamily: FontFamily.PT_SANS,
  // fontStyle: FontStyle.NORMAL,
  fontWeight: FontWeight.BOLD,
  // fontSize: FontSize.FS24,
  // lineHeight: LineHeight.LH31,
  // fontSizeMobile: FontSize.FS20,
  // lineHeightMobile: LineHeight.LH24,
}

const textMain = {
  fontFamily: FontFamily.PT_SANS,
  fontWeight: FontWeight.NORMAL,
}

const textBold = {
  ...textMain,
  fontWeight: FontWeight.BOLD,
}

const hint = {
  fontFamily: FontFamily.PT_SANS,
  // fontStyle: FontStyle.NORMAL,
  // fontWeight: FontWeight.BOLD,
  // fontSize: FontSize.FS14,
  // lineHeight: LineHeight.LH16,
  // fontSizeMobile: FontSize.FS10,
  // lineHeightMobile: LineHeight.LH12,
}

export const typography = {
  title1,
  title2,
  textMain,
  textBold,
  hint,
}
