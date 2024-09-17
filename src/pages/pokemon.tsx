import { useNavigate, useParams } from "react-router-dom";
import PokeballImg from "../assets/pokeball.png"
import Footer from "../components/footer";
import styles from "./pokemon.module.css"
import { useEffect, useState } from "react";
import { PokemonDetails } from "../types/types";
import { fetchPokemon } from "../api/fetchPokemon";
import LoadingScreen from "../components/loadingScreen";
import { waitFor } from "../utils/utils";

const Pokemon = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pokemon, setPokemon] = useState<PokemonDetails>();
    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function getPokemon() {
            setIsLoading(true);
            await waitFor(1000);
            const fetchedPokemon = await fetchPokemon(name as string);
            setPokemon(fetchedPokemon);
            setIsLoading(false);
        };
        getPokemon();
    }, [name])

    if(isLoading || !pokemon) return <LoadingScreen/>

    return <>
    <button className={styles.pokeballBtn} onClick={() => navigate(-1)}>
        <img className={styles.pokeballImg} src={PokeballImg} alt="Pokeball" />
        Retroceder
    </button>

    <div className={styles.pokemon}>
        <main className={styles.pokemonInfo}>
            <div className={styles.pokemonTitle}>{pokemon?.name.toLocaleUpperCase()}</div>
            <div>Nr. {pokemon?.id}</div>
            <div>
                <img className={styles.pokemonInfoImg} src={pokemon?.imgSrc} alt={pokemon?.imgSrc} />
            </div>
            <div>HP: {pokemon?.hp}</div>
            <div>Ataque: {pokemon?.attack}</div>
            <div>Defensa: {pokemon?.defense}</div>
        </main>
    </div>

    {/* <Footer/> */}
    </>
};

export default Pokemon;