import './App.css'
import { TwitterFollowCard } from './TwitterFolowCard'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="nmontiel42"> 
                Nekane Montiel 
            </TwitterFollowCard> 

            <TwitterFollowCard userName="abello-r">
                Alexander Bello Rodriguez
             </TwitterFollowCard>

            <TwitterFollowCard userName="pausanpi">
                Paula Sanchez Piña
            </TwitterFollowCard>

            {/*Los comentarios con /* y las llaves {} dentro del render */}
        </section>
    )
}

/*Tambien se puede pasar {true} poniendo solo el booleano (isFollowing)
isFollowing={true} = isFollowing */

/*Podriamos usar children en vez de name, ya que el nombre estaria contenido dentro
de TwitterFollowCard, por lo que seria su hijo. Children no es un prop normal, es una
mala practica usarlo como tal */

/* Los nombres serian los children */

/*Se pueden pasar props juntas creando un const con la info y pasando 
{... nombreConst} al componente */

/* Podemos pasar un prop de valor inicial para inicializar un estado. Por ejemplo
podriamos pasar initialIsFollowing para indicar el estado inicial */