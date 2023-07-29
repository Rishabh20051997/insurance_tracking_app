import {BASE_URL} from '@store/enum';
import { FlatList } from 'react-native';

export enum dateFormatTypes {
  DDMMMYY = 'ddmmmyy',
  DDMMM = 'ddmmm',
  YYYYMMDD = 'yyyymmdd',
}

// used to format the value (or property) as per count value -> for eg. 2 tests & 1 test
export const pluralize = ({
  count,
  label,
  suffix = 's',
  prefixValue = count,
}: {
  count: number;
  label: string;
  suffix?: string;
  prefixValue?: string | number;
}) => {
  // TODO: to be modified for multiple language support
  if (count === 1) {
    return prefixValue + ' ' + label;
  } else return prefixValue + ' ' + label + suffix;
};

// returns month name using index
export const getMonthName = (month: number, shortName: boolean = true) => {
  switch (month) {
    case 0:
      return shortName ? 'Jan' : 'January';
    case 1:
      return shortName ? 'Feb' : 'February';
    case 2:
      return shortName ? 'Mar' : 'March';
    case 3:
      return shortName ? 'Apr' : 'April';
    case 4:
      return shortName ? 'May' : 'May';
    case 5:
      return shortName ? 'June' : 'June';
    case 6:
      return shortName ? 'July' : 'July';
    case 7:
      return shortName ? 'Aug' : 'August';
    case 8:
      return shortName ? 'Sep' : 'September';
    case 9:
      return shortName ? 'Oct' : 'October';
    case 10:
      return shortName ? 'Nov' : 'November';
    case 11:
      return shortName ? 'Dec' : 'December';

    default:
      return '';
  }
};

// used to format the date to render as per config passed
export const formatDate = (
  date: Date | string,
  config: {format: dateFormatTypes; separator?: '/' | '-' | ' '},
) => {
  if (date) {
    const dt = new Date(date);
    const monthValue = dt.getMonth();
    const monthName = getMonthName(monthValue, false);
    const dateValue = ('0' + dt.getDate()).slice(-2);
    const yearValue = dt.getFullYear();
    const separator = config?.separator || ' ';

    switch (config.format) {
      case dateFormatTypes.DDMMMYY:
      default:
        return `${dateValue} ${monthName.substring(0, 3)}’${yearValue
          .toString()
          .substring(2)}`;

      case dateFormatTypes.DDMMM:
        return `${dateValue} ${monthName.substring(0, 3)}`;

      case dateFormatTypes.YYYYMMDD:
        return (
          yearValue +
          separator +
          ('0' + (monthValue + 1)).slice(-2) +
          separator +
          dateValue
        );
    }
  }
  return date;
};

// returns displayable time in AM or PM form
export function getFormattedTime(dateString: string, appendZeroInHours = true) {
  const date = new Date(dateString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const finalMinutes = minutes < 10 ? '0' + minutes : minutes;
  let hoursFinal = hours;
  let timeAmOrPm = 'AM';
  if (hoursFinal >= 12) {
    hoursFinal = hoursFinal - 12;
    timeAmOrPm = 'PM';
  }
  if (hoursFinal === 0) {
    hoursFinal = 12;
  }
  let hoursFinals;
  if (appendZeroInHours) {
    hoursFinals = hoursFinal < 10 ? '0' + hoursFinal : hoursFinal;
  } else {
    hoursFinals = hoursFinal;
  }
  return `${hoursFinals}:${finalMinutes} ${timeAmOrPm}`;
}

// convert date in yyyy-mm-dd format from date object or ISO string
export const convertDateToYyyymmdd = (date: string | Date) => {
  return formatDate(date, {format: dateFormatTypes.YYYYMMDD, separator: '-'});
};

// method to convert any single dimensional array to 2 dimensional array
export const convertSingleToTwoDimensionalArray = (data: any[]) => {
  let finalArray = [];

  for (let i = 0; i < data.length; i = i + 2) {
    let subArray = [];
    if (data[i + 1]) {
      subArray = [data[i], data[i + 1]];
    } else {
      subArray = [data[i]];
    }
    finalArray.push(subArray);
  }

  return finalArray;
};

// return date and month from ISO timestamp
export const getTimeAdMonthNameFromTimestamp = (timestamp: string) => {
  const dateData = new Date(Number(timestamp) * 1000);
  return {
    date: '' + dateData.getDate(),
    month: getMonthName(Number(dateData.getMonth())),
  };
};


export const convertSecondsToHhMmSs = (
  second: number,
  config?: {
    separator?: ':' | 'shortNotation' | 'largeNotation';
    trim?: boolean;
  },
) => {
  const hours = Math.floor(second / 3600);
  const minutes = Math.floor((second - hours * 3600) / 60);
  const seconds = second - hours * 3600 - minutes * 60;

  const hoursString = String(hours).padStart(2, '0');
  const minString = String(minutes).padStart(2, '0');
  const secString = String(seconds).padStart(2, '0');

  let valuesArray = [hoursString, minString, secString];
  let timeString = '';

  switch (config?.separator) {
    case ':':
    default:
      valuesArray.map(item => {
        if (!config?.trim || (config?.trim && Number(item))) {
          timeString = timeString + item + ': ';
        }
      });
      timeString = timeString.slice(0, -2);
      break;

    case 'shortNotation':
      var unitArray = ['h', 'm', 's'];
      valuesArray.map((item, index) => {
        if (!config?.trim || (config?.trim && Number(item))) {
          timeString = timeString + item + unitArray[index] + ' ';
        }
      });
      timeString = timeString.slice(0, -1);
      break;

    case 'largeNotation':
      var unitArray = ['hr', 'min', 'sec'];
      valuesArray.map((item, index) => {
        if (!config?.trim || (config?.trim && Number(item))) {
          timeString = timeString + item + ' ' + unitArray[index] + ' ';
        }
      });
      timeString = timeString.slice(0, -1);
      break;
  }
  return timeString;
};

export const capitalizeFirstLetter = (str: string) => {
  return str ? str.charAt(0).toUpperCase() + str.slice(1) : str;
};

export const convertBytesToDisplayUnit = (fileSizeInByte: number) => {
  const fileSizeInKB = fileSizeInByte / 1024;
  const fileSizeInMB = fileSizeInKB / 1024;
  const fileSizeInGB = fileSizeInMB / 1024;
  if (fileSizeInGB > 1) {
    return fileSizeInGB + ' GB';
  } else if (fileSizeInMB > 1) {
    return fileSizeInMB + ' MB';
  } else {
    return fileSizeInKB + ' KB';
  }
};