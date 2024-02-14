import Image from 'next/image';
import Hero from '@/app/components/Hero/Hero';
import ProductSection from '@/app/components/ProductSection';

export default function Home() {
	return (
		<main>
			<Hero/>
			<ProductSection/>
		</main>
	);
}
