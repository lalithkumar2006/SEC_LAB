function Card({fullName,occ,nameChange}){
 return(
        <>
        <div>
                <h1>{fullName}</h1>
                <h1>{occ}</h1>
        
        </div>
        <button onClick={nameChange}>Change</button>
        </>
    )
}

export default Card
