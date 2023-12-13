import type {Metadata} from 'next';

import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
	title: 'Travel',
	description: 'Travel',
};

export default function RootLayout({
																		 children,
																	 }: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
		<body>
		<Navbar/>
		<main className="relative overflow-hidden">
			{children}
		</main>
		</body>
		</html>
	);
}
