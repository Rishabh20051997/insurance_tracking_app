import { MD3LightTheme, configureFonts } from "react-native-paper";

const fontConfig = {
  headlineSmall: {
    "fontFamily": "Mukta-Bold",
    "fontSize": 24,
    "letterSpacing": 0,
    "lineHeight": 36,
  },
  
  headlineMedium: {
    "fontFamily": "Mukta-Bold",
    "fontSize": 28,
    "letterSpacing": 0,
    "lineHeight": 42,
  },
  
  headlineLarge: {
    "fontFamily": "Mukta-Bold",
    "fontSize": 32,
    "letterSpacing": 0,
    "lineHeight": 48,
  },

  titleSmall: {
    "fontFamily": "Mukta-SemiBold",
    "fontSize": 14,
    "letterSpacing": 0.1,
    "lineHeight": 21,
  },
  
  titleMedium: {
    "fontFamily": "Mukta-SemiBold",
    "fontSize": 16,
    "letterSpacing": 0.15,
    "lineHeight": 24,
  },
  
  titleLarge: {
    "fontFamily": "Mukta-SemiBold",
    "fontSize": 18,
    "letterSpacing": 0,
    "lineHeight": 27,
  },

  titleExtraLarge: {
    "fontFamily": "Mukta-Bold",
    "fontSize": 20,
    "letterSpacing": 0,
    "lineHeight": 30,
  },

  labelSmall: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 12,
    "letterSpacing": 0.5,
    "lineHeight": 18,
  },
  
  labelMedium: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 14,
    "letterSpacing": 0.5,
    "lineHeight": 21,
  },
  
  labelLarge: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 16,
    "letterSpacing": 0.1,
    "lineHeight": 24,
  },

  bodyExtraSmall: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 9,
    "letterSpacing": 0.4,
    "lineHeight": 14,
  },

  bodySmall: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 10,
    "letterSpacing": 0.4,
    "lineHeight": 15,
  },
  
  bodyMedium: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 12,
    "letterSpacing": 0.25,
    "lineHeight": 18,
  },
  
  bodyLarge: {
    "fontFamily": "Mukta-Regular",
    "fontSize": 14,
    "letterSpacing": 0.15,
    "lineHeight": 21,
  },
  bodyLargeBold: {
    "fontFamily": "Mukta-SemiBold",
    "fontSize": 14,
    "letterSpacing": 0.15,
    "lineHeight": 21,
  }
  };

const theme = {
    ...MD3LightTheme,
    fonts: configureFonts({config: fontConfig}),
    
};

// H: {
//   fontFamily: 'Mukta',
//   fontSize: FONT_SIZE.font22,
// },
// H1: {
//   fontFamily: FONT_FAMILY.MUKTA_BOLD,
//   fontSize: FONT_SIZE.font20,
// },
// OTP: {
//   fontFamily: FONT_FAMILY.MUKTA_REGULAR,
//   fontSize: FONT_SIZE.font20,
// },
// HEADING: {
//   fontFamily: FONT_FAMILY.MUKTA_BOLD,
//   fontSize: FONT_SIZE.font18,
// },
// HEADING_LARGE: {
//   fontFamily: FONT_FAMILY.MUKTA_BOLD,
//   fontSize: FONT_SIZE.font16,
// },
// HEADING_SMALL: {
//   fontFamily: 'Mukta-Bold',
//   fontSize: FONT_SIZE.font14,
// },
// SUBHEADING: {
//   fontFamily: FONT_FAMILY.MUKTA_REGULAR,
//   fontSize: FONT_SIZE.font16,
// },
// PARAGRAPH: {
//   fontFamily: FONT_FAMILY.MUKTA_REGULAR,
//   fontSize: FONT_SIZE.font14,
// },
// LIVE: {
//   fontFamily: 'Mukta-Bold',
//   fontSize: FONT_SIZE.font12,
// },
// INFO: {
//   fontFamily: FONT_FAMILY.MUKTA_REGULAR,
//   fontSize: FONT_SIZE.font12,
// },
// PARAGRAPH_SEMIBOLD: {
//   fontFamily: FONT_FAMILY.MUKTA_SEMI_BOLD,
//   fontSize: FONT_SIZE.font14,
// },
// BUTTON: {
//   fontFamily: FONT_FAMILY.MUKTA_SEMI_BOLD,
//   fontSize: FONT_SIZE.font14,
// },
// PARAGRAPH_BOLD: {
//   fontFamily: FONT_FAMILY.MUKTA_SEMI_BOLD,
//   fontSize: FONT_SIZE.font14,
// },
// LABEL: {
//   fontFamily: 'Mukta-Regular',
//   fontSize: FONT_SIZE.font13,
// },
// HAMBURGER: {
//   fontFamily: FONT_FAMILY.MUKTA_SEMI_BOLD,
//   fontSize: FONT_SIZE.font14,
// },
// OTHERS: {
//   fontFamily: FONT_FAMILY.MUKTA_SEMI_BOLD,
//   fontSize: FONT_SIZE.font18,
// },

// FONT_EIGHT: {
//   fontFamily: 'Mukta-Regular',
//   fontSize: FONT_SIZE.font8,
// },
// FONT_THIRTEEN: {
//   fontFamily: 'Mukta-Regular',
//   fontSize: FONT_SIZE.font13,
// },
// BIG_TEXT: {fontFamily: 'Mukta-Bold', fontSize: FONT_SIZE.font32},
// FONT_FIFTEEN: {
//   fontFamily: 'Mukta-Regular',
//   fontSize: FONT_SIZE.font15,
// },


export default theme