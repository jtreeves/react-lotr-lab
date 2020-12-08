function Movie(props) {
    return (
        <div>
            <h1><em>Lord of the Rings: {props.title}</em></h1>
            <p>Runtime: {props.hours} hours {props.minutes} minutes</p>
        </div>
    )
}

export default Movie