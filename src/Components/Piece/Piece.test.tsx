import { render, screen } from '@testing-library/react';

import Piece from './Piece';

describe('Piece', () => {
  it('renders all variations of pieces', () => {
    render(
      <>
        <Piece size="p" player={1} />
        <Piece size="m" player={1} />
        <Piece size="g" player={1} />
        <Piece size="p" player={2} />
        <Piece size="m" player={2} />
        <Piece size="g" player={2} />
      </>
    );

    expect(screen.getByLabelText(/Peça p do jogador 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Peça m do jogador 1/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Peça g do jogador 1/i)).toBeInTheDocument();

    expect(screen.getByLabelText(/Peça p do jogador 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Peça m do jogador 2/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Peça g do jogador 2/i)).toBeInTheDocument();
  });
});
