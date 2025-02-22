import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel Ángel Duran"/>
        <TwitterFollowCard isFollowing={false} userName="pheralb" name="Pablo Hernández"/>
        <TwitterFollowCard isFollowing userName="mouredev" name="Brais Moure"/>
        </section>
    )
}