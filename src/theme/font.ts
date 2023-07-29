export const FONT_SIZE: IFont = {
  font22: 22,
  font12: 12,
  font13: 13,
  font14: 14,
  font16: 16,
  font18: 18,
  font20: 20,
  font10: 10,
  font24: 24,
  font8: 8,
  font32: 32,
  font15: 15,
};

export enum FONT_FAMILY {
  MUKTA_BOLD = 'Mukta-Bold',
  MUKTA_REGULAR = 'Mukta-Regular',
  MUKTA_SEMI_BOLD = 'Mukta-SemiBold',
}

export const FONT_VARIANT_TYPE = {

  // HEADLINE
  HEADLINE_LARGE: 'headlineLarge', // 32 // 'Bold'
  HEADLINE_MEDIUM : 'headlineMedium', // 28 // 'Bold'
  HEADLINE_SMALL : 'headlineSmall', // 24 // 'Bold'

  // TITLE
  TITLE_EXTRA_LARGE: 'titleExtraLarge',  // 20, 'Bold' 
  TITLE_LARGE: 'titleLarge', // 18 // 'Semi-Bold'
  TITLE_MEDIUM: 'titleMedium', // 16 // 'Semi-Bold'
  TITLE_SMALL: 'titleSmall', // 14 // 'Semi-Bold'

  // LABEL
  LABEL_LARGE: 'labelLarge', // 16 // 'Regular',
  LABEL_MEDIUM: 'labelMedium', // 14 // 'Regular'
  LABEL_SMALL: 'labelSmall', // 12 // 'Regular'

  // BODY
  BODY_LARGE_BOLD: 'bodyLargeBold', // 14 //  'Semi-Bold'
  BODY_LARGE: 'bodyLarge', // 14 // 'Regular'
  BODY_MEDIUM: 'bodyMedium', //12 // 'Regular'
  BODY_SMALL : 'bodySmall', // 10 // 'Regular'
  BODY_EXTRA_SMALL: 'bodyExtraSmall', // 9 // 'Regular'
};

/*
// H -> HEADLINE_SMALL
// H1 -> TITLE_EXTRA_LARGE
// OTP -> TITLE_LARGE
// HEADING -> TITLE_LARGE
// HEADING_LARGE -> TITLE_MEDIUM
// HEADING_SMALL -> TITLE_SMALL
// SUBHEADING -> LABEL_LARGE
// PARAGRAPH -> BODY_LARGE
// LIVE -> BODY_MEDIUM
// INFO -> BODY_MEDIUM
// PARAGRAPH_SEMIBOLD -> BODY_LARGE_BOLD
// BUTTON -> TITLE_SMALL
// PARAGRAPH_BOLD -> BODY_LARGE_BOLD
// LABEL -> BODY_LARGE
// HAMBURGER -> TITLE_SMALL
// OTHERS -> TITLE_LARGE
// DISCOUNT -> BODY_SMALL
// FONT_EIGHT -> BODY_EXTRA_SMALL
// FONT_THIRTEEN -> BODY_LARGE
// BIG_TEXT -> HEADLINE_LARGE
// FONT_FIFTEEN -> BODY_LARGE
// FONT_FOURTEEN -> HEADLINE_MEDIUM
*/

export const FONT_TYPE: IFontType = {
 // HEADLINE
 HEADLINE_LARGE: 'headlineLarge', // 32 // 'Bold'
 HEADLINE_MEDIUM : 'headlineMedium', // 28 // 'Bold'
 HEADLINE_SMALL : 'headlineSmall', // 24 // 'Bold'

 // TITLE
 TITLE_EXTRA_LARGE: 'titleExtraLarge',  // 20, 'Bold' 
 TITLE_LARGE: 'titleLarge', // 18 // 'Semi-Bold'
 TITLE_MEDIUM: 'titleMedium', // 16 // 'Semi-Bold'
 TITLE_SMALL: 'titleSmall', // 14 // 'Semi-Bold'

 // LABEL
 LABEL_LARGE: 'labelLarge', // 16 // 'Regular',
 LABEL_MEDIUM: 'labelMedium', // 14 // 'Regular'
 LABEL_SMALL: 'labelSmall', // 12 // 'Regular'

 // BODY
 BODY_LARGE_BOLD: 'bodyLargeBold', // 14 //  'Semi-Bold'
 BODY_LARGE: 'bodyLarge', // 14 // 'Regular'
 BODY_MEDIUM: 'bodyMedium', //12 // 'Regular'
 BODY_SMALL : 'bodySmall', // 10 // 'Regular'
 BODY_EXTRA_SMALL: 'bodyExtraSmall', // 9 // 'Regular'
};
