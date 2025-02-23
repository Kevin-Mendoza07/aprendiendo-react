import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    const users = [
        {
            userName: 'midudev',
            name: 'Miguel Ángel Durán',
            isFollowing: true
        },
        {
            userName: 'pheralb',
            name: 'Pablo Hernández',
            isFollowing: false  
        },
        {
            userName: 'mouredev',
            name: 'Brais Moure',
            isFollowing: true
        }
    ]
    return(
        <section className='App'>
        {
            users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                    key={userName}
                    userName={userName}
                    initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
            ))   
            }
        </section>
    )
}