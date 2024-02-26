import { useState } from 'react';
import SingleColor from './SingleColor';
import './App.css';
import Values from 'values.js';

function App() {
  const [color, setColor] = useState('');
  const [isError, setIsError] = useState(false);
  const [list, setList] = useState(new Values('#f15025').all(5));

  const handleSubmit = (e) => {
    e.preventDefault();


    try {      
      const colors = new Values(color).all(5);
      setList(colors);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder='#f15025'
            onChange={(e) => setColor(e.target.value)}
            value={color}
            className={`${isError ? 'error' : null}`}
          />
          <button className='btn' type='submit'>get shades</button>
        </form>
      </section>
      <section className='colors'>
        {list.map((color,index)=>{
          return (<SingleColor key={index} {...color} index={index} />)
        })}
      </section>
    </>
  );
}

export default App;
