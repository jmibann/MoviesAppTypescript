import {Dimensions, StyleSheet} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingVertical: 20,
  },
  imageStyle: {
    height: width,
    aspectRatio: 3 / 2,
    borderTopLeftRadius: 10,
  },
  description: {
    fontSize: 18,
    paddingTop: 20,
    paddingHorizontal: 20,
    textAlign: 'justify',
  },
});

export default styles;
