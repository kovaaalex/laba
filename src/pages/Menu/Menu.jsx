import Header from "../../components/Header/Header";
import MenuCategories from "../../components/MenuCategories/MenuCatefories";
import Footer from "../../components/Footer/Footer";
import Orders from "../../components/Orders/Orders";
function Menu() {
    return(
        <>
            <Header/>
            <main>
                <h2>Menu</h2>
                <MenuCategories/>
                <Orders/>
            </main>
            <Footer/>
        </>
    )
}
export default Menu;