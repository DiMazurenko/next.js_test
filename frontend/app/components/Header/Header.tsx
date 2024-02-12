import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {

}

const Header = () => {
	return (
		<header>
			<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
				<div className="sm:flex sm:items-center sm:justify-between shadow-sm">
					<div className="text-center sm:text-left">
						<Image src="/logo.svg" width={90} height={100} alt="logo"/>
					</div>
					<div className="flex justify-around gap-20">
						<Link href="/">Home</Link>
						<Link href="/">Explore</Link>
						<Link href="/">Projects</Link>
						<Link href="/">About Us</Link>
						<Link href="/">Contact Us</Link>
					</div>

					<div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
						<button
							className="block rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
							type="button"
						>
							Create Post
						</button>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;