import { render, screen, waitFor } from '@testing-library/react';
import HeaderMobile from './HeaderMobile';
import userEvent from '@testing-library/user-event';

describe('Header', () => {
  it('renders a header', () => {
    render(<HeaderMobile />);

    const title = screen.getByText(/Jogo da Velha 2/i);

    expect(title).toBeInTheDocument();
  });

  it('opens and closes header menu', async () => {
    const user = userEvent.setup();
    render(<HeaderMobile />);

    expect(screen.getByText(/^jogo$/i)).not.toBeVisible();

    await user.click(screen.getByLabelText(/menu/i));
    expect(screen.getByText(/^jogo$/i)).toBeVisible();

    // @ts-ignore
    await user.click(screen.getByRole('presentation').firstChild);
    await waitFor(() => expect(screen.getByText(/^jogo$/i)).not.toBeVisible());
  });
});
