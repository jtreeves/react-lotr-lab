import logo from './logo.svg';
import './App.css';
import Movie from './Movie'

function App() {
  
    const firstMovie = {
        title: 'The Fellowship of the Ring',
        hours: 2,
        minutes: 58
    }

    const secondMovie = {
        title: 'The Two Towers',
        hours: 2,
        minutes: 59
    }
    
    const thirdMovie = {
        title: 'The Return of the King',
        hours: 3,
        minutes: 21
    }  

    return (
        <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Edit <code>src/App.js</code> and save to reload.
            </p>
            <Movie
                title={firstMovie.title}
                hours={firstMovie.hours}
                minutes={firstMovie.minutes}
            />
            <Movie
                title={secondMovie.title}
                hours={secondMovie.hours}
                minutes={secondMovie.minutes}
            />
            <Movie
                title={thirdMovie.title}
                hours={thirdMovie.hours}
                minutes={thirdMovie.minutes}
            />
            <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
            </a>
        </header>
        </div>
  );
}

export default App;
