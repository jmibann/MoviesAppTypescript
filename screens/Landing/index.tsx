import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button, Text, ThemeProvider} from 'react-native-elements';
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
  const [page, setPage] = useState<number>(1);
  const [configuration, setConfiguration] = useState<Configuration | null>(
    null,
  );

  const loadLandingMovies = async () =>
    await Movies.fetchMovies('a', page)
      .then((list) => setMovies(list))
      .then(() => setPage((prevValue) => prevValue + 1))
      .catch((err) => console.log('ERROR: ', err));

  const fetchConfiguration = async () => {
    await Movies.getConfiguration().then((conf) => setConfiguration(conf));
  };

  useEffect(() => {
    loadLandingMovies();
  }, []);

  useEffect(() => {
    fetchConfiguration();
  }, []);

  const handler = () => {
    Alert.alert('Button handler');
    console.log('=========> BUtton Pressed');
    // navigation.navigate()
  };

  const fetchMoreItems = () => {
    console.log('=========> ');
    loadLandingMovies();
  };

  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Text h3>Welcome to Movies App</Text>
        {/* {console.log(' ==> ', page)} */}

        {movies && configuration ? (
          <View style={styles.listContainer}>
            <MovieItems
              movies={movies.results}
              config={configuration}
              fetchMoreItems={fetchMoreItems}
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
