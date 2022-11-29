import Film from '../components/Film';

const FilmList = ({ allFilms }) => {
    const filmNodes = allFilms.map ((film, index) => {
        return <Film key={index} filmObj={film} />
    })

    return(
        <>
        <ul>{filmNodes}</ul>
        </>
    )
}

export default FilmList