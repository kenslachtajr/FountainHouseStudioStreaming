import { playerDataAccess } from './data-access';

describe('playerDataAccess', () => {
  it('should work', () => {
    expect(playerDataAccess()).toEqual('player-data-access');
  });
});
