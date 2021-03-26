import { getCharacterById } from 'api/characters';
import ICharacter from 'interfaces/character';
import React, { useEffect, useState } from 'react';

type props = {
  id: number;
};

const Character = ({ id }: props) => {
  const [character, setCharacter] = useState<ICharacter | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    getCharacterById(id)
      .then(res => {
        setCharacter(res[0]);
        setIsLoading(false);
      })
      .catch(() => {
        setCharacter(null);
        setIsLoading(false);
        setError('Could not load character...');
      });
  }, []);

  return (
    <div>
      {character && (
        <>
          <h2>
            <b>{`${character.name} (${character.nickname})`}</b>
          </h2>
          <img src={character.img} alt="character" style={{ width: '15%' }} />
          <p>{character.occupation}</p>
        </>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Character;
