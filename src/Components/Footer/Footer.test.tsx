import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Footer', () => {
  it('renders a footer', () => {
    render(<Footer />);

    const copyright = screen.getByText(/Tiago "Kor" Rodrigues/i);

    expect(copyright).toBeInTheDocument();
  });
});
