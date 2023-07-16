import { Kumbh_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';
import './globals.css';

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
	title: 'Sneakers Ecommerce',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={kumbhSans.className}>
				<div id="portal"></div>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
