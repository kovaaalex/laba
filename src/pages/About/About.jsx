import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Team from "../../components/Team/Team";
import styles from './About.module.scss';
function About(){
    return(
        <>
            <Header/>
            <main>
                <h2>О нас</h2>
                <Team/>
            </main>
            <Footer/>
        </>)
}
export default About;