import React, { useState } from 'react';

interface Tile {
  id: number;
  text: string;
  correctPosition: number;
}

export default function PuzzleGame() {
  const [tiles, setTiles] = useState<Tile[]>([
    { id: 1, text: '1', correctPosition: 0 },
    { id: 2, text: '2', correctPosition: 1 },
    { id: 3, text: '3', correctPosition: 2 },
    { id: 4, text: '4', correctPosition: 3 },
    { id: 5, text: '5', correctPosition: 4 },
    { id: 6, text: '6', correctPosition: 5 },
    { id: 7, text: '7', correctPosition: 6 },
    { id: 8, text: '8', correctPosition: 7 },
    { id: 9, text: '9', correctPosition: 8 },
  ]);

  // 將方塊打亂的方法
  const shuffleTiles = () => {
    const shuffled = [...tiles].sort(() => Math.random() - 0.5);
    setTiles(shuffled);
  };

  // 點擊方塊並嘗試移動的方法(此處僅示範交換)
  const handleTileClick = (index: number) => {
    if (index < tiles.length - 1) {
      const newTiles = [...tiles];
      const temp = newTiles[index];
      newTiles[index] = newTiles[index + 1];
      newTiles[index + 1] = temp;
      setTiles(newTiles);
    }
  };

  return (
    <div style={{ width: '150px', margin: '0 auto' }}>
      <button onClick={shuffleTiles}>打亂</button>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 50px)' }}>
        {tiles.map((tile, index) => (
          <div
            key={tile.id}
            onClick={() => handleTileClick(index)}
            style={{
              border: '1px solid #333',
              textAlign: 'center',
              cursor: 'pointer',
              height: '50px',
              lineHeight: '50px',
            }}
          >
            {tile.text}
          </div>
        ))}
      </div>
    </div>
  );
}
