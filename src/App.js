import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
	const [items, setItems] = React.useState([]);

	React.useEffect(() => {
		fetch('https://630dcd4e109c16b9abed91a2.mockapi.io/items')
			.then((response) => response.json())
			.then((json) => setItems(json));
	}, []);

	return (
		<div className='wrapper'>
			<Header />
			<div className='content'>
				<div className='container'>
					<div className='content__top'>
						<Categories />
						<Sort />
					</div>
					<h2 className='content__title'>Все пиццы</h2>
					<div className='content__items'>
						{items.map((item) => (
							<PizzaBlock key={item.id} {...item} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
