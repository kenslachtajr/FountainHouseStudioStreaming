import { render } from '@testing-library/react';

import PlayerShell from './player-shell';

describe('PlayerShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerShell />);
    expect(baseElement).toBeTruthy();
  });
});
