import React from "react";

const Blocks = ({ blocks }) => {
  console.log(blocks);
  const latestTenBlocks = blocks.map(block => {
    return (
      <div id="block" className="post card" key={block.header.timestamp.data}>
        <div className="card blue-grey darken-1">
          <div className="card-title white-text">
            <div><span id="yellow">Block: </span>{block.coinbase.coinbaseHeight}</div>
            <div><span id="yellow">Type: </span>{block.coinbase.id.type}</div>
            <div><span id="yellow">Timestamp: </span>{block.header.timestamp.data}</div>
          </div>
        </div>
      </div>
    );
  });
  return <div>{latestTenBlocks}</div>;
};

export default Blocks;
