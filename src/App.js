import React from 'react';
import './App.css'
import BarChart from './components/BarChart';
import Data from './data.json';

function App() {
  return (
    <div className="posts">
        { Data.map(post => {
          return (
            <div key={ post.mediaId }>
            <h4>Frame Rate - { post.framerate } </h4>
            <p>Name - { post.name }</p>
            <p>Start time - { post.startTime }</p>
            <p>End time - { post.endTime }</p>
            <p>Width - { post.width }</p>
            <p>Height - { post.height }</p>
            {/* <BarChart/> */}
            </div>
          )
        })}
    </div>
    
  );
}

export default App;