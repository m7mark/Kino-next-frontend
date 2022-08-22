import { GetStaticProps, NextPage } from 'next'

import Catalog from '@/ui/catalog-movies/Catalog'

import { IMovie } from '@/shared/types/movies.types'

import { MovieService } from '@/services/movie.service'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Catalog
      movies={movies || []}
      title="Trending movies"
      description="Trending movies in excellent quality: legal, safe, without ads"
    />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await MovieService.getMostPopularMovies()

    return {
      props: { movies },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export default TrendingPage
