import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({name,cover,id,light,water}){
    return (
		<li key={id} className='lmj-plant' onClick={()=> handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<CareScale careType='water' scaleValue={water} />
			<CareScale careType='light' scaleValue={light} />
		</li>
	)
}
function handleClick(e){
	console.log('ceci est un evenement',e)
}


export default PlantItem
