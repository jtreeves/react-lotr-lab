import './App.css'
import Movie from './Movie'

function App() {
    const movieData = [
        {
            title: 'The Fellowship of the Ring',
            hours: 2,
            minutes: 58
        },
        {
            title: 'The Two Towers',
            hours: 2,
            minutes: 59
        },
        {
            title: 'The Return of the King',
            hours: 3,
            minutes: 21
        }
    ]
    const movieComponents = movieData.map((movie, index) => {
        return <Movie { ...movie } key={`index-${index}`} />
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