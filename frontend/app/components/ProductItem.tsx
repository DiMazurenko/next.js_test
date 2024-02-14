import React from 'react';
import Image from 'next/image';

const ProductItem = ({product}) => {
	return (
		<div>
			<div>
				<Image className="rounded-lg" src={`http://localhost:1337${product.attributes.banner.data.attributes.url}`} alt="" width={400} height={350}/>
			</div>
			<div className="p-3">
				<h2 className="text-[24px] font-medium">{product.attributes.title}</h2>
			</div>
		</div>
	);
};

export default ProductItem;