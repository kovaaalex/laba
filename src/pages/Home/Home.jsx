import Header from '../../components/Header/Header'
import Favourite from '../../components/Favourite/Favourite';
import Footer from '../../components/Footer/Footer';
import Picks from '../../components/Picks/Picks';
import Award from '../../components/Award/Award';
import Categories from '../../components/Categories/Categories';
function Home() {
    return (<>
        <Header/>
        <Favourite/>
        <Picks/>
        <Award/>
        <Categories/>
        <Footer/>
    </>)
}
export default Home;