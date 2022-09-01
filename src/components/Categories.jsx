import React from 'react';

const Categories = ({ value, onClickCategory }) => {
	const categories = [
		'Все',
		'Мясные',
		'Вегетарианская',
		'Гриль',
		'Острые',
		'Закрытые',
	];

	return (
		<div className='categories'>
			<ul>
				{categories.map((category, index) => (
					<li
						className={value === index ? 'active' : ''}
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
