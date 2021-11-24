export enum Color {
  PATTENS_BLUE = 'rgb(216, 235, 241)', // #D8EBF1
  DOWNY_1 = 'rgb(118, 197, 193)', // #76C5C1
  DOWNY_2 = 'rgb(109, 207, 203)', // #6DCFCB
  BERMUDA = 'rgb(126, 201, 198)', // #7EC9C6,
  FOUNTAIN = 'rgb(101, 183, 179)', // #65B7B3
  FOUNTAIN_BLUE = 'rgb(92, 173, 170)', // #5CADAA
  BREAKER_BAY = 'rgb(86, 123, 122)', // #567B7A
  WHITE_SMOKE = 'rgb(240, 240, 240)', // #F0F0F0
  LIGHT_CYAN_1 = 'rgb(226, 241, 244)', // #E2F1F4
  LIGHT_CYAN_2 = 'rgb(220, 255, 254)', // #DCFFFE
  OYSTER_BAY = 'rgb(209, 241, 241)', // #D1F1F1
  JUNGLE_MIST_1 = 'rgb(192, 196, 196)', // #C0C4C4
  JUNGLE_MIST_2 = 'rgb(166, 187, 187)', // #A6BBBB
  AZURE = 'rgb(234, 246, 246)', // #EAF6F6
  WHITE_FONT = 'rgb(255, 255, 255)', // #FFFFFF
  STORM_GREY = 'rgb(129, 132, 138)', // #81848A
  DARK_STALE = 'rgb(69, 88, 88)', // #455858
  BLUE_DIANNE = 'rgb(58, 74, 74)', // #3A4A4A
  OUTER_SPACE = 'rgb(44, 57, 57)', // #2C3939
  SWAMP = 'rgb(26, 37, 37)', // #1A2525
  RACING_GREEN = 'rgb(19, 28, 27)', // #131C1B
  CLOUD_BURST = 'rgb(56, 61, 74)', // #383D4A
  NERO = 'rgb(28, 28, 28)', // #1C1C1C
  BLACK = 'rgb(0, 0, 0)', // #000000
  RED = 'rgb(255, 0, 0)', // #ff0000
}

export const palette = {
  mainBackGroundColor: 'rgb(240, 244, 247)',
  logoBackground: 'rgb(41, 120, 182)',

  primary: Color.FOUNTAIN,
  secondary: Color.AZURE,
  buttonBg: Color.FOUNTAIN,
  buttonIcon: Color.DOWNY_1,
  buttonText: Color.LIGHT_CYAN_2,
  invertLighter: Color.AZURE,
  accent: Color.DOWNY_2,
  surface: Color.BERMUDA,
  logo: Color.AZURE,
  dropdownSurface: Color.AZURE,
  dropdownActive: Color.OYSTER_BAY,
  dropdownControls: Color.BREAKER_BAY,
  textDropdown: Color.BREAKER_BAY,
  textDropdownActive: Color.BREAKER_BAY,
  toggleSurface: Color.AZURE,
  toggleActive: Color.FOUNTAIN_BLUE,
  textPrimary: Color.BLACK,
  textSecondary: Color.STORM_GREY,
  textSurface: Color.LIGHT_CYAN_2,
  surfaceCallToAction: Color.DOWNY_2,
  divider: Color.WHITE_SMOKE,
  border: Color.PATTENS_BLUE,
  error: Color.RED,
  overlay: Color.NERO,
  logoutText: Color.CLOUD_BURST,
}
