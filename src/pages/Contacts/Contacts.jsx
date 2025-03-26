import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Contact from "../../components/Contact/Contact";
import styles from './Contacts.module.scss';
function Contacts(){
    return(
        <>
            <Header/>
            <main>
                <h2>Контакты</h2>
                <Contact/>
            </main>
            <Footer/>
        </>)
}
export default Contacts;