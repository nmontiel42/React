export function TwitterFollowCard ({ formatUserName, userName, name, isFollowing }) {
    console.log(isFollowing)
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' alt="Mi avatar" src={`https://unavatar.io/${userName}`} />
                <div>
                    <strong className='tw-followCard-strong'>{name}</strong>
                    <span className='tw-followCard-span'>{formatUserName(userName)}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir 
                </button>
            </aside>
        </article>
    )
}