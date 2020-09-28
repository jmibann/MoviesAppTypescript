import React from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {Tile} from 'react-native-elements';

import {Movie, Configuration} from '../../screens/Landing';

import styles from './styles';

interface Props {
  movies: Movie[];
  config: Configuration;
  fetchMoreItems: () => void;
}

interface ItemProps {
  title: string;
  imgURL: string;
}

const MovieItems: React.FC<Props> = ({movies, config, fetchMoreItems}) => {
  const getImgUrl = (path: string): string => {
    const {images} = config as Configuration;
    return images.base_url + images.poster_sizes[3] + path;
  };

  const Item: React.FC<ItemProps> = ({title, imgURL}) => {
    {console.log(' ==> ', movies)}
    return (
      <Tile
        imageSrc={{uri: imgURL}}
        containerStyle={styles.tileContainer}
        contentContainerStyle={styles.tileContent}
        title={title}
        imageProps={{
          PlaceholderContent: <ActivityIndicator />,
          style: styles.imageStyle,
          resizeMode: 'contain',
        }}
      />
    );
  };

  return (
    <>
      <FlatList
        data={movies}
        renderItem={({item}) => (
          <Item title={item.title} imgURL={getImgUrl(item.poster_path)} />
        )}
        keyExtractor={(item) => item.id}
        onEndReachedThreshold={0}
        onEndReached={fetchMoreItems}
      />
    </>
  );
};

export default MovieItems;
