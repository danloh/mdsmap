const themeColors = {
  almostBlack: "#181A1B",
  lightBlack: "#2F3336",
  almostWhite: "#E6E6E6",
  white: "#FFF",
  white10: "rgba(255, 255, 255, 0.1)",
  black: "#000",
  black10: "rgba(0, 0, 0, 0.1)",
  primary: "#00BFD8",
  greyLight: "#F4F7FA",
  grey: "#E8EBED",
  greyMid: "#C5CCD3",
  greyDark: "#DAE1E9",
};

export const baseTheme = {
  ...themeColors,
  fontFamily:
    "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen, Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif",
  fontFamilyMono:
    "'SFMono-Regular',Consolas,'Liberation Mono', Menlo, Courier,monospace",
  fontWeight: 400,
  zIndex: 100,
  link: themeColors.primary,
  placeholder: "#B1BECC",
  textSecondary: "#4E5C6E",
  textLight: themeColors.white,
  textHighlight: "#b3e7ff",
  textHighlightForeground: themeColors.black,
  selected: themeColors.primary,
  codeComment: "#6a737d",
  codePunctuation: "#5e6687",
  codeNumber: "#d73a49",
  codeProperty: "#c08b30",
  codeTag: "#3d8fd1",
  codeString: "#032f62",
  codeSelector: "#6679cc",
  codeAttr: "#c76b29",
  codeEntity: "#22a2c9",
  codeKeyword: "#d73a49",
  codeFunction: "#6f42c1",
  codeStatement: "#22a2c9",
  codePlaceholder: "#3d8fd1",
  codeInserted: "#202746",
  codeImportant: "#c94922",

  blockToolbarBackground: themeColors.white,
  blockToolbarTrigger: themeColors.greyMid,
  blockToolbarTriggerIcon: themeColors.white,
  blockToolbarItem: themeColors.almostBlack,
  blockToolbarIcon: undefined,
  blockToolbarIconSelected: themeColors.black,
  blockToolbarText: themeColors.almostBlack,
  blockToolbarTextSelected: themeColors.black,
  blockToolbarSelectedBackground: themeColors.greyMid,
  blockToolbarHoverBackground: themeColors.greyLight,
  blockToolbarDivider: themeColors.greyMid,

  noticeInfoBackground: "#4285F4",
  noticeInfoText: themeColors.white,
  noticeTipBackground: "#9EC667",
  noticeTipText: themeColors.white,
  noticeWarningBackground: "#F3B300",
  noticeWarningText: themeColors.black,
};

export const lightTheme = {
  ...baseTheme,
  background: themeColors.white,
  text: themeColors.almostBlack,
  code: themeColors.lightBlack,
  cursor: themeColors.black,
  divider: themeColors.greyMid,

  toolbarBackground: themeColors.lightBlack,
  toolbarHoverBackground: themeColors.black,
  toolbarInput: themeColors.white10,
  toolbarItem: themeColors.white,

  tableDivider: themeColors.greyMid,
  tableSelected: themeColors.primary,
  tableSelectedBackground: "#E5F7FF",

  quote: themeColors.primary,
  codeBackground: themeColors.greyLight,
  codeBorder: themeColors.grey,
  horizontalRule: themeColors.greyMid,
  imageErrorBackground: themeColors.greyLight,

  scrollbarBackground: themeColors.greyLight,
  scrollbarThumb: themeColors.greyMid,
};

export const darkTheme = {
  ...baseTheme,
  background: themeColors.black,
  text: themeColors.almostWhite,
  code: themeColors.almostWhite,
  cursor: themeColors.white,
  divider: "#4E5C6E",
  placeholder: "#52657A",

  toolbarBackground: themeColors.white,
  toolbarHoverBackground: themeColors.greyMid,
  toolbarInput: themeColors.black10,
  toolbarItem: themeColors.lightBlack,

  tableDivider: themeColors.lightBlack,
  tableSelected: themeColors.primary,
  tableSelectedBackground: "#002333",

  quote: themeColors.primary,
  codeBackground: themeColors.black,
  codeBorder: themeColors.lightBlack,
  codeString: "#3d8fd1",
  horizontalRule: themeColors.lightBlack,
  imageErrorBackground: "rgba(0, 0, 0, 0.5)",

  scrollbarBackground: themeColors.black,
  scrollbarThumb: themeColors.lightBlack,
};

export default lightTheme;
