import logoImg from '../assets/logo.jpg';
import Button from './ui/Button'
export default function Header(){
    return(
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restuarant"/>
                <h1>Simbonge's Foods</h1>
            </div>
            <nav>
                <Button textOnly> Cart (0)</Button>
            </nav>
            </header>

    )
}