

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from 'pages/Layout/Layout'
import MainLeaderbord from 'components/MainContent/MainLeaderbord/MainLeaderbord'
import Altersky from 'components/MainContent/Altersky/Altersky'

function App() {
	
	return (
		<>
			<Routes>
                <Route  path="/" element={ <Layout />}>
                    <Route path="chart"  element={<MainLeaderbord/>}/>
					<Route path="altersky"  element={<Altersky/>}/>
					
                </Route>
            </Routes>
		</>
	)
}

export default App
