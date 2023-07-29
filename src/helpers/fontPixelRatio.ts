import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

export const useFontRatio = (size: number) => {
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    const {width} = Dimensions.get('window');
    if (width < 375) {
      // Adjust font size for smaller screens
      setFontSize(size - 3);
    } else if (width >= 375 && width < 414) {
      // Adjust font size for medium screens
      setFontSize(size);
    } else {
      // Adjust font size for larger screens
      setFontSize(size + 2);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return fontSize;
};
