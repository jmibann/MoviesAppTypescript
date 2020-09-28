import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
const titleContainerHeight = 50;

const styles = StyleSheet.create({
  tileContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    // height: 900,
    // width: '100%',
    // backgroundColor: 'lime',
    // height: (9 / 16) * width + titleContainerHeight,
  },
  imageStyle: {
    // height: (9 / 16) * width,
    // width: width,
  },
  tileContent: {
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: titleContainerHeight,
    // backgroundColor: 'pink',
  },
});

export default styles;
