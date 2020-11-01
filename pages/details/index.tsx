import { useRouter } from 'next/router';
import Image from 'next/image';

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default function Details() {
  const router = useRouter();
  const { id, poster_path, title, release_date, overview } = router.query;

  return (
    <section>
      <Image
        src={`${POSTER_PATH}${poster_path}`}
        alt={title as string}
        height={231}
        key={id as string}
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
