import React, { useState } from "react";



  function handleClick(event) {
    
    event.currentTarget.classList.toggle('selected');
    
  }


function Home() {
  const [] = useState(null);
{handleClick}
  return (
    <div className="App">
      <div id="traffic-light">
        <button
          id="top"
          style={{ backgroundColor:'red' }}
          onClick={handleClick}
        />
        <button
          id="middle"
          style={{ backgroundColor: 'yellow' }}
          onClick={handleClick}
        />
        <button
          id="bottom"
          style={{ backgroundColor: 'green' }}
          onClick={handleClick}
        />
      </div>
    </div>
  );
}

export default Home;
