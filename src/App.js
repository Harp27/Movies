import Movies from "./components/Movies"
import './App.css';

const movies = [
    {
      name: "Interstellar",
      year: "2014",
      rating: "PG-13",
      image: "https://i.imgur.com/sRSTggM.jpg"

    },
    {
      name: "Inception",
      year: "2010",
      rating: "PG-13",
      image: "https://i.imgur.com/8gdbV2G.jpg"

    },
    {
      name: "Oppenheimer",
      year: "2023",
      rating: "PG-13",
      image: "https://i.imgur.com/S5URoBl.jpg"

    },
    {
      name: "Tenet",
      year: "2020",
      rating: "G",
      image: "https://i.imgur.com/JgjpSqS.jpg"

    },
    {
      name: "Reservior Dogs",
      year: "1992",
      rating: "R",
      image: "https://i.imgur.com/ZNdjeOB.jpg"

    },
  ]


function App() {
  return (
    <div className="App">
      <Movies movies={movies}/>
      
    </div>
  );
}

export default App;
