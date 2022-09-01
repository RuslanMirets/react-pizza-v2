import React from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/pizza-block';
import { Skeleton } from '../components/pizza-block/Skeleton';
import Sort from '../components/Sort';

const Home = () => {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);
	const [categoryId, setCategoryId] = React.useState(0);
	const [sortType, setSortType] = React.useState({
		name: 'популярности',
		sortProperty: 'rating',
	});

	React.useEffect(() => {
		setIsLoading(true);
		fetch(
			`https://630dcd4e109c16b9abed91a2.mockapi.io/items?${
				categoryId > 0 ? `category=${categoryId}` : ''
			}&sortBy=${sortType.sortProperty}&order=desc`,
		)
			.then((response) => response.json())
			.then((json) => {
				setItems(json);
				setIsLoading(false);
			});
		window.scrollTo(0, 0);
	}, [categoryId, sortType]);

	return (
		<div className='container'>
			<div className='content__top'>
				<Categories
					value={categoryId}
					onClickCategory={(id) => setCategoryId(id)}
				/>
				<Sort value={sortType} onChangeSort={(id) => setSortType(id)} />
			</div>
			<h2 className='content__title'>Все пиццы</h2>
			<div className='content__items'>
				{isLoading
					? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
					: items.map((item) => <PizzaBlock key={item.id} {...item} />)}
			</div>
		</div>
	);
};

export default Home;
