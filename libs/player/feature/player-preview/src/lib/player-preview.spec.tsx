import { render } from '@testing-library/react';

import PlayerPreview from './player-preview';

describe('PlayerPreview', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerPreview />);
    expect(baseElement).toBeTruthy();
  });
});
