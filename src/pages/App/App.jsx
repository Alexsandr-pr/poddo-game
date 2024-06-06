

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from 'pages/Layout/Layout'
import MainLeaderbord from 'components/MainContent/MainLeaderbord/MainLeaderbord'
import Altersky from 'components/MainContent/Altersky/Altersky'
import Home from 'components/MainContent/Home/Home/Home'
import BunpalProfiles from 'components/MainContent/BunpalProfiles/BunpalProfiles'
import User from 'components/MainContent/User/User/User'
import PetStorage from 'components/PetStorage/PetStorage/PetStorage'


function App() {
	
	return (
		<>
			<Routes>
                <Route  path="/" element={ <Layout />}>
					<Route index  element={<Home/>}/>
                    <Route path="chart"  element={<MainLeaderbord/>}/>
					<Route path="altersky"  element={<Altersky/>}/>
					<Route path="bunpal" element={<BunpalProfiles/>}/>
					<Route path="user" element={<User/>}/>
					<Route path="pet" element={<PetStorage/>}/>
                </Route>
            </Routes>
		</>
	)
}

export default App
