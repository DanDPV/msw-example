/* eslint-disable import/extensions */
/* eslint-disable import/prefer-default-export */
import ICharacter from 'interfaces/character';
import { get } from './FetchInfo';

export const getCharacterById = async (id: number) => {
  const char = await get<ICharacter[]>(
    `${process.env.REACT_APP_API_URL}characters/${id}`,
  );
  return char;
};
