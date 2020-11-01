import { useRouter } from 'next/router';
import Image from 'next/image'
import useSWR from 'swr';
import Axios from 'axios';

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default function Details() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(
    'https://api.themoviedb.org/3/movie/' +
      id +
      '?api_key=' +
      'ddc64ae5e8e8de2f777406819ea8ee0f&language=en-US',
    Axios.get
  );

  const movie = data ? data.data : undefined;

  if (!movie) {
    return 'Loading....';
  }

  return (
    <section>
      <Image
        src={`${POSTER_PATH}${movie.poster_path}`}
        alt={movie.title}
        height={231}
        width={154}
      />
      <div>
        <h1>{movie.title}</h1>
        <h3>{movie.release_date}</h3>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
}
