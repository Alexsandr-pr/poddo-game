

import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from 'pages/Layout/Layout'
import MainLeaderbord from 'components/MainContent/MainLeaderbord/MainLeaderbord'

function App() {
	
	return (
		<>

			<Routes>
                <Route  path="/" element={ <Layout />}>
                    <Route path=""  element={<MainLeaderbord/>}/>
                </Route>
            </Routes>
		</>
	)
}

export default App
