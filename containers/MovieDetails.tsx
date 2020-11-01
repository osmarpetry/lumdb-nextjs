import styled, {css}from 'styled-components'
import Image from 'next/image'

const BACKDROP_PATH = 'https://image.tmdb.org/t/p/w1280'
const POSTER_PATH = 'https://image.tmdb.org/t/p/w154'

export default function MovieDetails({ id, backdrop_path, poster_path, title, release_date, overview }) {
  return (
    <MovieWrapper backdrop={`${BACKDROP_PATH}${backdrop_path}`}>
      <MovieInfo>
        <Image
          key={id}
          src={`${POSTER_PATH}${poster_path}`}
          alt={title}
          unsized
        />
        <div>
          <h1>{title}</h1>
          <h3>{release_date}</h3>
          <p>{overview}</p>
        </div>
      </MovieInfo>
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div<{ backdrop: string }>`
  position: relative;
  padding-top: 50vh;
  ${({ backdrop }) =>
    css`
      background: url(${backdrop}) no-repeat;
    `}
  background-size: cover;
`;

const MovieInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;
