import Movie from "./Movie"
    
    const Movies = (props) => {
        return (
          <div className="movie-container">
            {props.movies.map((movie, index) => (
              <Movie key={index} movie={movie} />
            ))}
          </div>
        );
      };

export default Movies