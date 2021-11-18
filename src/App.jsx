import { createSignal } from 'solid-js'

import data from './data.json5'

function App() {
  const [value, setValue] = createSignal('')

  return (
    <div>
      <input
        type="text"
        value={value()}
        onInput={e => setValue(e.target.value)}
        autoComplete={false}
      />
      <ul>
        {data
          .filter(item => item.name.includes(value()))
          .map(item => (
            <li key="item.name">{item.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default App
