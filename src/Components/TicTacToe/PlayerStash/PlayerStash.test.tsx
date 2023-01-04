import { render, screen } from '@testing-library/react';

import PlayerStash from './PlayerStash';

describe('PlayerStash', () => {
  it('renders player 1 Stash', () => {
    render(<PlayerStash player={0} />);
  });
});
