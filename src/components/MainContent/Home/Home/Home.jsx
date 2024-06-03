
import HomePost from '../HomePost/HomePost'
import TopBlock from '../TopBlock/TopBlock'

import "./home.scss"

const Home = () => {
    return (
        <div className='home-block'>
            <TopBlock/>
            <HomePost/>
            <HomePost/>
        </div>
    )
}

export default Home