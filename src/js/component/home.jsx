import React, { useState } from "react";

  function handleClick(event) {
    
    event.currentTarget.classList.toggle('selected'); 
    event.currentTarget.nextSibling.classList.remove("selected")
    event.currentTarget.nextSibling.nextSibling.classList.remove("selected")
  }
  function handleClick2(event) {
    
    event.currentTarget.classList.toggle('selected');
    event.currentTarget.previousSibling.classList.remove("selected")
    event.currentTarget.nextSibling.classList.remove("selected")
  }
  function handleClick3(event) {
    
    event.currentTarget.classList.toggle('selected');
    event.currentTarget.previousSibling.classList.remove('selected');
    event.currentTarget.previousSibling.previousSibling.classList.remove('selected')
  }

function Home() {
  const [] = useState(null);

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
          onClick={handleClick2}
        />
        <button
          id="bottom"
          style={{ backgroundColor: 'green' }}
          onClick={handleClick3}
        />
      </div>
    </div>
  );
}

export default Home;
