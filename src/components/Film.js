const Film = ({ filmObj }) => {
    return (
        <>
            <li><a href={filmObj.url}>{filmObj.name}</a></li>
        </>
    )
}

export default Film