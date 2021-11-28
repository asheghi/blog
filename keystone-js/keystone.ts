import { config } from '@keystone-next/keystone';

import { lists } from './schema';

export default config({
  db: {
    provider: 'sqlite',
    url: 'file:./keystone.db',
  },
  ui: {
    isAccessAllowed: (context) => true,
  },
  lists,
})
