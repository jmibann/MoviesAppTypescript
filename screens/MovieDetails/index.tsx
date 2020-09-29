import React from 'react';
import {Text, View, ScrollView, Image} from 'react-native';
import styles from './styles';

const MovieDetails: React.FC = ({navigation, route}) => {
  const {movie, configuration} = route.params;

  const getImgUrl = (path: string): string => {
    const {images} = configuration as Configuration;
    return images.base_url + images.poster_sizes[3] + path;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{movie.title}</Text>
        <Image
          source={{uri: getImgUrl(movie.poster_path)}}
          resizeMode="contain"
          style={styles.imageStyle}
        />
        <Text style={styles.description}>{movie.overview}</Text>
      </View>
    </ScrollView>
  );
};

export default MovieDetails;
