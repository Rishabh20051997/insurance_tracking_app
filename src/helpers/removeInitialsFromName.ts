import colors from '@resources/colors';

/**
 * 
 * @param str full name
 * @returns return the First letter of first name and last name
 */
export const firstCharactersOfFirstAndLastName = (str: string) => {
  if (str) {
    const strArray = str.split(' ');
    const firstName = strArray?.[0] || '';
    const lastName = strArray?.[1] || '';
    const firstNameText = firstName.substring(0, 1).toUpperCase();
    const lastNameText = lastName.substring(0, 1).toUpperCase();
    if (lastNameText) {
      return firstNameText + lastNameText;
    } else {
      return firstTwoChar(str);
    }
  } else {
    return 'UN';
  }
};

// first two character of the name
const firstTwoChar = (str: string) => {
  return str && str.length > 2 ? str.substring(0, 2).toUpperCase() : 'UN';
};

// pick background color for name 
export const pickRandomColor = (name: string) => {
  const sumChars = (str: string) => {
    let sum = 0;
    for (let i = 0; i < str.length; i++) {
      sum += str.charCodeAt(i);
    }
    return sum;
  };
  let i = sumChars(name) % bgColors.length;
  const background = bgColors[i];
  return background;
};

const bgColors: string[] = [
  colors.accent.emerald,
  colors.accent.peter_river,
  colors.accent.wisteria,
  colors.accent.carrot,
  colors.accent.alizarin,
  colors.accent.turquoise,
  colors.accent.midnightBlue,
];
