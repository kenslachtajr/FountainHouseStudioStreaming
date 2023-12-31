import { render } from '@testing-library/react';

import PlayerContent from './player-content';

describe('PlayerContent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerContent />);
    expect(baseElement).toBeTruthy();
  });
});
