import Head from 'next/head';
import Image from 'next/image';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useSWRInfinite } from 'swr';
import Axios from 'axios';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default function Home() {
  const { data, isValidating, size, setSize } = useSWRInfinite(
    (index) => [
      'https://api.themoviedb.org/3/discover/movie?api_key=ddc64ae5e8e8de2f777406819ea8ee0f&language=' +
        'en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=' +
        index +
        1,
    ],
    Axios.get
  );

  const infiniteRef = useInfiniteScroll({
    loading: isValidating,
    hasNextPage: data?.length ? data[0].data.total_pages !== size : false,
    onLoadMore: () => setSize(size + 1),
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div
          ref={infiniteRef}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {data?.map((movies) => {
            return movies.data.results.map((movie) => (
              <Link
                href={`/details?key=${movie.id}&poster_path=${movie.poster_path}&title=${movie.title}&release_date=${movie.release_date}&overview=${movie.overview}`}
                key={movie.id}
              >
                <Image
                  src={`${POSTER_PATH}${movie.poster_path}`}
                  alt={movie.title}
                  height={231}
                  width={154}
                />
              </Link>
            ));
          })}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
