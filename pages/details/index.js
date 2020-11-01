import { useRouter } from 'next/router';
import Image from 'next/image'
import useSWR from 'swr';
import Axios from 'axios';

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default function Details() {
  const router = useRouter();
  const { poster_path, title, release_date, overview } = router.query;

 return (
    <section>
      <Image
        src={`${POSTER_PATH}${poster_path}`}
        alt={title}
        height={231}
        width={154}
      />
      <div>
        <h1>{title}</h1>
        <h3>{release_date}</h3>
        <p>{overview}</p>
      </div>
    </section>
  );
}
