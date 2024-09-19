import './App.css'
import { TwitterFollowCard } from './TwitterFolowCard'

export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <section className="App">
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="nmontiel42" name="Nekane Montiel Arce" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={false} userName="abello-r" name="Alexander Bello Rodriguez" />
            <TwitterFollowCard formatUserName={formatUserName} isFollowing={true} userName="pausanpi" name="Paula Sanchez Piña" />
        </section>
    )
}

/*Tambien se puede pasar {true} poniendo solo el booleano (isFollowing)
isFollowing={true} = isFollowing */

/*Podriamos usar children en vez de name, ya que el nombre estaria contenido dentro
de TwitterFollowCard, por lo que seria su hijo. Children no es un prop normal, es una
mala practica usarlo como tal */