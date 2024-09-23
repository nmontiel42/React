import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


//Renderizar un array de usuarios
const users = [
    {
        userName: 'nmontiel42',
        name: 'Nekane Montiel Arce',
        isFollowing: true
    },
    {
        userName: 'abello-r',
        name: 'Alexander Bello Rodriguez',
        isFollowing: false
    },
    {
        userName: 'pausanpi',
        name: 'Paula Sanchez Piña',
        isFollowing: true
    }
]

export function App () {
    return (
        <section className="App">
        {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                >
                    {name}
                </TwitterFollowCard>

                )
            })
        }
        </section>
    )
}
