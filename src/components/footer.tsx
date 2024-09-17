import { Link } from 'react-router-dom';
import styles from './footer.module.css'

// Assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemPic from '../assets/pokeball.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons" >
                <img className={styles.footerIcon} src={PokemonPic} alt="Pokeball" />
                Pokemons
            </Link>
            <Link className={styles.footerLink} to="/items" >
                <img className={styles.footerIcon} src={ItemPic} alt="Objetos" />
                Objetos
            </Link>
            <Link className={styles.footerLink} to="/map" >
                <img className={styles.footerIcon} src={LocationPic} alt="Mapa" />
                Mapa
            </Link>
        </footer>
    )
    
};

export default Footer;