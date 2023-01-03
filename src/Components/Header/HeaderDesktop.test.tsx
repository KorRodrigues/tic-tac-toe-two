import { render, screen } from '@testing-library/react';
import HeaderDesktop from './HeaderDesktop';

describe('Header', () => {
  it('renders a header', () => {
    render(<HeaderDesktop />);

    const title = screen.getByText(/Jogo da Velha 2/i);

    expect(title).toBeInTheDocument();
  });
});
