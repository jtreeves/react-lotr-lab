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
    const movieData = [firstMovie, secondMovie, thirdMovie]
    const movieComponents = movieData.map((movie, index) => {
        return <Movie 
            title={movie.title}
            hours={movie.hours}
            minutes={movie.minutes}
            key={`index-${index}`}
        />
    })

    return (
        <div className="App">
            <header className="App-header">
                {movieComponents}
            </header>
        </div>
  )
}

export default App