import './App.css'
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
            </header>
        </div>
  )
}

export default App