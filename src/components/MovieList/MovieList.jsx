import MovieCard from "../MovieCard"

function MovieList({ movies }) {
    return( 
        <div>
            {movies.map((movie) => (
                <MovieCard
                    key={movie.id}
                    title={movie.title}
                    year={movie.year}
                    country={movie.country}
                    rating={movie.rating}
                    description={movie.description}
                    poster={movie.poster}/>
            ))}
        </div>
    )
}

export default MovieList