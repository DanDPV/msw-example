/* eslint-disable import/prefer-default-export */
import characters from './data/characters.json';

export const getCharacterById = (id: number) => {
  const character = characters.find(char => char.char_id === id);
  return character;
};
