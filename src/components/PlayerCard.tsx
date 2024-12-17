import { useState } from 'react';
import { Player } from '../types/types';
import './PlayerCard.css'

type PlayerCardProps = { player: Player, onChange: () => void }

export function PlayerCard({ player, onChange }: PlayerCardProps) {

  const [count, setCount] = useState(player.count)


  const winPercentage = ((player.wins / player.matches) * 100).toFixed(1)
  const teamColor = { '--team-color': player.teamColor } as React.CSSProperties

  function incrementCount() {
    const updatedCount = count + 1
    setCount(updatedCount)
    // ⚠️ Mutations are bad... and you should feel bad!
    player.count = updatedCount
    console.log('[PlayerData]', player)
    onChange()
  }


  return (
    <div className='player-card clickable' style={teamColor} onClick={incrementCount} >
      <h4 className='card-count'>{count}</h4>
      <img src={player.picture} alt={player.name} />
      <h2>
        {player.name}
      </h2>
      <p>{player.teamName}</p>
      <p className="stats">
        🏆 {player.wins} | 🏓 {player.matches} <br /> {winPercentage}%
      </p>
      <p>{player.rarity} - {player.value}</p>
    </div>
  )
}