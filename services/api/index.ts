import {get} from '../api/config';
import {FetchInfo, Configuration} from '../../screens/Landing';

export const Movies = {
  getConfiguration: (): Promise<Configuration> =>
    get('/configuration').then((res) => res.data),
  fetchMovies: (query: string, page: number): Promise<FetchInfo> =>
    get(`/search/movie?query=${query}&page=${page}`).then((res) => res.data),
};
