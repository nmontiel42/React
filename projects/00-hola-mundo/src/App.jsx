import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="nmontiel42"> 
                Nekane Montiel Arce
            </TwitterFollowCard> 

            <TwitterFollowCard userName="abello-r">
                Alexander Bello Rodriguez
             </TwitterFollowCard>

        </section>
    )
}
