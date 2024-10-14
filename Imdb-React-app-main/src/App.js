import Navbar from "./components/navbar";
import "./App.css";
import Header from "./components/header";
import Movies from "./components/movies";
import Result from "./components/result";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'

function App() {
  const key = "e1e16497";
  const apiurl = "https://www.omdbapi.com/?apikey=" + key;

  const [movieTitle, setmovieTitle] = useState("");
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(apiurl + "&s=" + title)
      .then((res) => res.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);
        }
      });
  }, [title]);

  const getTitle=(movieT)=>{
      setmovieTitle(movieT);
  }

  return (
    <>
    <Router>
       <Navbar />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Header setTitle={setTitle} title={title} />
            <Movies movies={movies} getTitle={getTitle} />
            </>)
          }}> 
          </Route>
          <Route exact path="/result">
            <Result movieTitle={movieTitle}/>
          </Route> 
        </Switch> 
    </Router>
    </>
  );
}

export default App;
