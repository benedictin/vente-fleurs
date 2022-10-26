import  plantList  from "../data/planList"
import 	PlantItem from "./PlanteItem"
import '../styles/ShoppingList.css'

function ShoppingList({cart,updateCart}) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light }) => (
					<div>
						<PlantItem
							id={id}
							cover={cover}
							name={name}
							water={water}
							light={light}
							
						/>
						<button onClick={()=>updateCart(cart+1)} className="add-button">ajouter <span className='bi bi-cart4'></span></button>
					</div>
				))}
			</ul>
		</div>
	)
}
export default ShoppingList