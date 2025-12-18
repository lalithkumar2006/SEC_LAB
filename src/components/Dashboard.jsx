import Card from "./Card"

function Dashboard({name,occ}){
    return(
        <div>
               <Card fullName={name} occ={occ}/>
            
        </div>
    )

}
export default Dashboard