import CreatureItem from '../CreatureItem/CreatureItem';

function CreatureList({ creatureList }) {
    return (
        <ul>
            {
              creatureList.map(creatureItem => 
                <CreatureItem key={creatureItem.id} creature={creatureItem}/>
              )  
            }
        </ul>
    );
}

export default CreatureList;