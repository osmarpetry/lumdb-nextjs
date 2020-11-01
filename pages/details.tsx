import { useRouter } from 'next/router';
import MovieDetails from 'containers/MovieDetails';

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default function Details() {
  const router = useRouter();
  const { id, backdrop_path, poster_path, title, release_date, overview } = router.query;

  return (
    <MovieDetails
      id={id}
      backdrop_path={backdrop_path}
      poster_path={poster_path}
      title={title}
      release_date={release_date}
      overview={overview}
    />
  );
}
