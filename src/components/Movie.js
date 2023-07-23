

const Movie = (props) => {
    const { name, year, rating, image } = props.movie;
  
    const onClick = () => {
      console.log("Clicked Movie:", props.movie);
    };
  
    return (
      <div className="movie-card" onClick={onClick}>
        <h3>{name}</h3>
        <p>Year: {year}</p>
        <p>Rating: {rating}</p>
        <img src={image} alt={name} />
      </div>
    );
  };
  


export default Movie