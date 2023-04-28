import React, { useState } from "react";





function Home() {
  const [litPos, setLitPos] = useState(-1);

  return (
    <div className="App">
      <div id="traffic-light">
        <button
          id="top"
          style={{ backgroundColor: litPos === 0 ? 'red' : 'white' }}
          onClick={() => setLitPos(litPos === 0 ? -1 : 0)}
        />
        <button
          id="middle"
          style={{ backgroundColor: litPos === 1 ? 'yellow' : 'white' }}
          onClick={() => setLitPos(litPos === 1 ? -1 : 1)}
        />
        <button
          id="bottom"
          style={{ backgroundColor: litPos === 2 ? 'green' : 'white' }}
          onClick={() => setLitPos(litPos === 2 ? -1 : 2)}
        />
      </div>
    </div>
  );
}

export default Home;
