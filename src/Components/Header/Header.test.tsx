import { render, screen } from '@testing-library/react';
import Header from '.';

describe('Header', () => {
  it('renders a header', () => {
    render(<Header />);

    const title = screen.getAllByText(/Jogo da Velha 2/i);

    expect(title).toHaveLength(2);
  });
});
