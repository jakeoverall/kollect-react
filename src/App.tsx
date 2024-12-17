import { useState } from 'react'
import './App.css'
import { PlayerCard } from './components/PlayerCard'
import { Player } from './types/types'


function App() {

  const playerData: Player[] = [
    {
      name: 'Thorsten',
      teamName: 'Daring Durians',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/thorsten.png',
      wins: 8,
      matches: 12,
      rarity: 'rare',
      teamColor: '#90ff74',
      value: 5.34,
      count: 1,
      id: 0
    },
    {
      name: 'georgie',
      teamName: 'Rambutan Rampage',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/georgie.png',
      wins: 10,
      matches: 20,
      rarity: 'common',
      teamColor: '#ff5789',
      value: 2.17,
      count: 2,
      id: 1
    },
    {
      name: 'Sprinkles',
      teamName: 'Daring Durians',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/sprinkles.png',
      wins: 11,
      matches: 11,
      rarity: 'ultra-rare',
      teamColor: '#90ff74',
      value: 8.84,
      count: 0,
      id: 2
    },
    {
      name: 'Yubi',
      teamName: 'Rambutan Rampage',
      picture: 'https://codeworks.blob.core.windows.net/public//assets/img/avatars/yubi.png',
      wins: 7,
      matches: 22,
      rarity: 'common',
      teamColor: '#ff5789',
      value: 3.11,
      count: 0,
      id: 3
    }
  ]
  //    a tuple - destructuring
  const [players, setPlayers] = useState<Player[]>([...playerData])
  const [search, setSearch] = useState('')

  function updatePlayers() {
    setPlayers([...players])
  }

  const PlayerCards = () => players
    .filter(player =>
      player.name.startsWith(search) ||
      player.teamName == search ||
      player.rarity == search
    )
    .map(player => (
      <PlayerCard key={player.id} player={player} onChange={updatePlayers} />
    ))

  // Extracts the teams into a non duplicate array
  const total = (players.reduce((acc, player) => {
    acc += player.value * player.count
    return acc
  }, 0)).toFixed(2)

  // Extracts the teams into a non duplicate array
  const teams = playerData
    .reduce((acc: string[], player: Player) => {
      if (!acc.includes(player.teamName)) {
        acc.push(player.teamName)
      }
      return acc
    }, [])

  const rarities = ['common', 'rare', 'ultra-rare']


  // NOTE               v destructuring the event
  // NOTE                           v defining the type
  function handleChange({ target }: { target: HTMLInputElement }) {
    console.log('it is changing', target.value)
    setSearch(target.value)
  }

  return (
    <div className='App'>

      <div className="total">
        ${total}
      </div>
      <div className="filters">
        <input type="text" placeholder='search' onChange={handleChange} />


        {teams.map(team =>
          <button onClick={() => setSearch(team)}>{team}</button>)
        }

        {
          rarities.map(r => <button onClick={() => setSearch(r)}>{r}</button>)
        }

      </div>

      <PlayerCards />

    </div>
  )
}

export default App
