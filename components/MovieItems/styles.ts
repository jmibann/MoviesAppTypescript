import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    marginVertical: 10,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderWidth: 0.3,
    borderColor: 'rgba(229, 233, 237,1)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  imageStyle: {
    width: 0.9 * width,
    aspectRatio: 3 / 2,
    borderTopLeftRadius: 10,
  },
  title: {
    fontSize: 20,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  flatlistContentStyle: {
    alignItems: 'center',
  },
});

export default styles;
