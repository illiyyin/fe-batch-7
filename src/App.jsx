import {
	createBrowserRouter,
	Link,
	RouterProvider,
	BrowserRouter,
	Routes,
	Route,
} from 'react-router-dom'
import './App.css'
import Banner from './Banner'
import Recoil from './Recoil'
import { RecoilRoot } from "recoil"

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Banner />,
			errorElement: <div>Halaman tidak ditemukan</div>,
			children: [
				{
					path: '/',
					element: (
						<div>
							Root
							<br />
							<Link to='/contact'>Pergi ke Contact</Link>
						</div>
					),
				},
				{
					path: '/contact',
					element: (
						<div>
							Contact
							<br />
							<Link to='/'>Pergi ke Root</Link>
						</div>
					),
				},
			],
		},
		{
			path: '/admin',
			element: (
				<div>
					Admin
					<br />
					<Link to='/contact'>Pergi ke Contact</Link>
				</div>
			),
		},
		{
			path: '/a',
			element: <A />,
		},
		{
			path: '/a-children',
			element: <A>Children dari A</A>,
		},
		{
			path: '/recoil',
			element: (
				<RecoilRoot>
					<Recoil />
				</RecoilRoot>
			),
		},
	])

	return <RouterProvider router={router} />
	// return (
	// 	<BrowserRouter>
	// 		<Routes>
	// 			<Route
	// 				path='/'
	// 				element={
	//           <div>
	//             <Banner/>
	// 						Root
	// 						<br />
	// 						<Link to='/contact'>Pergi ke Contact</Link>
	// 					</div>
	// 				}
	// 			/>
	// 			<Route
	// 				path='/contact'
	// 				element={
	//           <div>
	//             <Banner/>
	// 						Contact
	// 						<br />
	// 						<Link to='/'>Pergi ke Root</Link>
	// 					</div>
	// 				}
	// 			/>
	// 			<Route
	// 				path='/help'
	// 				element={
	//           <div>
	//             <Banner/>
	// 						Contact
	// 						<br />
	// 						<Link to='/'>Pergi ke Root</Link>
	// 					</div>
	// 				}
	// 			/>
	// 		</Routes>
	// 	</BrowserRouter>
	// )
}

const A = (props) => {
	return <div>Header A{props.children}</div>
}

export default App
