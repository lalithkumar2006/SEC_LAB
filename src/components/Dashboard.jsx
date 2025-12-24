import Card from "./Card"

function Dashboard({name,occ,nameChange}){
    return(
        <div>
               <Card fullName={name} occ={occ} nameChange={nameChange}/>
            
        </div>
    )

}
export default Dashboard