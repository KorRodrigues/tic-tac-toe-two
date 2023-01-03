import { ReactElement, JSXElementConstructor, ReactFragment, Key } from 'react';

type Pages = (
  | boolean
  | ReactElement<any, string | JSXElementConstructor<any>>
  | ReactFragment
  | Key
  | null
  | undefined
)[];

const headerPages: Pages = ['Jogo', 'Sobre'];

export default headerPages;
