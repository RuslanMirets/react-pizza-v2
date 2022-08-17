import React from 'react';

const Categories = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);

	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	const onClickCategory = (index) => {
		setActiveIndex(index);
	};

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						className={activeIndex === index ? 'active' : ''}
						key={index}
						onClick={() => onClickCategory(index)}
					>
						{category}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Categories;
