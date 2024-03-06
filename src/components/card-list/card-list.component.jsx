import Card from '../card/card.component';

import './card-list.styles.css'


const CardList = ({ monstors })=> {
    
    return (

        <div className='card-list'>
        {
            monstors.map(monstor => (
                <Card monstor={monstor}/>
                
            ))
        }
    </div>

    )
}

// class CardList extends Component {

//     render() {

//         // console.log('Render from CardList')
//         const { monstors } = this.props

//         return (
//             <div className='card-list'>
//                 {
//                     monstors.map(monstor => (
//                         <Card monstor={monstor}/>
                        
//                     ))
//                 }
//             </div>
//         )

//     }
// }



export default CardList;