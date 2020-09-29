import React from 'react';
import {ActivityIndicator, FlatList, View, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Movie, Configuration} from '../../screens/Landing';

import styles from './styles';

interface Props {
  movies: Movie[];
  config: Configuration;
  fetchMoreItems: () => void;
  onPressHandler: (movie: Movie) => void;
}

interface ItemProps {
  movie: Movie;
}

const MovieItems: React.FC<Props> = ({
  movies,
  config,
  fetchMoreItems,
  onPressHandler,
}) => {
  const getImgUrl = (path: string): string => {
    const {images} = config as Configuration;
    return images.base_url + images.poster_sizes[3] + path;
  };

  const Item: React.FC<ItemProps> = ({movie}) => {
    const {title, poster_path} = movie;
    return (
      <View style={styles.cardContainer}>
        <TouchableOpacity onPress={() => onPressHandler(movie)}>
          <Image
            source={{uri: getImgUrl(poster_path)}}
            resizeMode="contain"
            style={styles.imageStyle}
          />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={movies}
        renderItem={({item}) => <Item movie={item} />}
        keyExtractor={(item, index) => `${index}-${item.id}`}
        onEndReachedThreshold={0}
        onEndReached={fetchMoreItems}
        contentContainerStyle={styles.flatlistContentStyle}
      />
    </>
  );
};

export default MovieItems;
