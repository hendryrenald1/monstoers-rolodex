
const Card = ({monstor})=> {
    
        const { id, name,email } = monstor
        return (
            <div className='card-container' key={id}>
                <img alt={`monstor ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h1 > {name} </h1>
                <h3 > {email} </h3>
            </div>
        )
    

}

export default Card;