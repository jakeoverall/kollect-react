import './App.css'

function App() {

  const cards = [
    { id: 0, name: 'Thorsten', image: '🦍' },
    { id: 1, name: 'Georgie', image: '🐒' }
  ]


  return (
    <>
      {/* DATA DUMP EXAMPLE */}
      <pre><code>{JSON.stringify(cards, null, 2)}</code></pre>
    </>
  )
}

export default App
