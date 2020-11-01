import Link from 'next/link';
import Image from 'next/image';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { useSWRInfinite } from 'swr';
import Axios from 'axios';
import styled from 'styled-components';

export const POSTER_PATH = 'https://image.tmdb.org/t/p/w154';

export default function MoviesList() {
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
    <MovieGrid ref={infiniteRef as any}>
      {data?.map((movies) => {
        return movies.data.results.map((movie) => (
          <Link
            href={`/details?key=${movie.id}&backdrop_path=${movie.backdrop_path}&poster_path=${movie.poster_path}&title=${movie.title}&release_date=${movie.release_date}&overview=${movie.overview}`}
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
    </MovieGrid>
  );
}

const MovieGrid = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
