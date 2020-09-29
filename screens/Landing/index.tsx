import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Text, ThemeProvider} from 'react-native-elements';
import MovieItems from '../../components/MovieItems';

import styles from './styles';

import {Movies} from '../../services/api';

interface Props {}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface FetchInfo {
  page: number;
  total_pages: number;
  total_results: number;
  results: Movie[];
}

export interface Configuration {
  change_keys: string[];
  images: {
    backdrop_sizes: string[];
    base_url: string;
    logo_sizes: string[];
    poster_sizes: string[];
    profile_sizes: string[];
    secure_base_url: string;
    still_sizes: string[];
  };
}

const theme = {
  Text: {
    h4Style: {
      fontSize: 14,
    },
  },
};

const LandingScreen: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<FetchInfo | null>(null);
  const [movieList, setMovieList] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [configuration, setConfiguration] = useState<Configuration | null>(
    null,
  );

  const loadLandingMovies = async (pageNumber: number) =>
    await Movies.fetchMovies('a', pageNumber)
      .then((res) => {
        if (!movies) {
          setMovies(res);
        }
        setMovieList((prev) => [...prev, ...res.results]);
      })
      .catch((err) => console.log('ERROR: ', err));

  useEffect(() => {
    loadLandingMovies(page);
  }, []);

  useEffect(() => {
    const fetchConfiguration = async () => {
      await Movies.getConfiguration().then((conf) => setConfiguration(conf));
    };

    fetchConfiguration();
  }, []);

  const onPressHandler = (movie: Movie) => {
    navigation.navigate('MovieDetails', {movie, configuration});
  };

  const fetchMoreItems = () => {
    setPage((prevValue) => prevValue + 1);
    loadLandingMovies(page + 1);
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text h3>Welcome to Movies App</Text>

        {movies && configuration ? (
          <View style={styles.listContainer}>
            <MovieItems
              movies={movieList}
              config={configuration}
              fetchMoreItems={fetchMoreItems}
              onPressHandler={onPressHandler}
            />
          </View>
        ) : (
          <View style={styles.actIndicatorContainer}>
            <ActivityIndicator size="large" style={styles.activity} />
          </View>
        )}
      </View>
    </ThemeProvider>
  );
};

export default LandingScreen;
