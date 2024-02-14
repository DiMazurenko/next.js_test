'use client';

import React, {useEffect, useState} from 'react';
import ProductList from '@/app/components/ProductList';
import {getLatestProduct} from '@/app/utils/globalAPi';

const ProductSection = () => {
	const [productList, setProductList] = useState([]);

	useEffect(() => {
		getLatestProduct().then(res => {
			console.log(res.data.data);
			setProductList(res.data.data);
		});
	}, []);

	return (
		<div className="px-10 md:px-20">
			<ProductList productList={productList}/>
		</div>
	);
};

export default ProductSection;