import React, { useState } from 'react'

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState('');

  const onItemChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setItem(prev => (
      prev = evt.target.value
    ));
  }

  const addItem = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setItems(prev => [...prev, item]);
    setItem('');
  }

  const submitDisabled = !item;
  return (
    <div
      className='ui text container'
      id='app'
    >
      <table 
        className='ui selectable structured large table'
      >
        <thead>
          <tr>
            <th>Items</th>
          </tr>
        </thead>
        <tbody>
          { items.map((item, idx) => (
            <tr
              key={idx}
            >
              <td>{item}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>
              <form
                className='ui form'
                onSubmit={addItem}
              >
                <div 
                  className='field'>
                  <input
                    className='prompt' 
                    type="text" 
                    placeholder='Add item...' 
                    value={item}
                    onChange={onItemChange} 
                  />
                </div>
                <button
                  className='ui button'
                  disabled={submitDisabled}
                >
                  Add item
                </button>
              </form>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default App