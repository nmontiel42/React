import { useState } from "react"

//Sirve para poder guardar una variable

export function TwitterFollowCard ({ children, userName }) {

    const [isFollowing, setIsFollowing] = useState(false)
    
    /*  ==
    const state = useState(false)
    const isFollowing = state[0]
    const setIsFollowing = state[1] */

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'
    
    const handleClick = () => {
        setIsFollowing(!isFollowing) //Cambia el estado de esa variable
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' alt="Mi avatar" src={`https://unavatar.io/${userName}`} />
                <div>
                    <strong className='tw-followCard-strong'>{children}</strong>
                    <span className='tw-followCard-span'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-followCard-text'>{text}</span> 
                    <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}
