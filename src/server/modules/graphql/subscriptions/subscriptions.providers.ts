import { createServer } from 'http';

import { SUBSCRIPTION_SERVER } from './subscriptions.constants';
import { SERVER_CONFIG } from '../../../server.constants';

export const createSubscriptionProviders = (port: number = SERVER_CONFIG.wsPort) => [
  {
    provide: SUBSCRIPTION_SERVER,
    useFactory: () => {
      const server = createServer();
      return new Promise(resolve => server.listen(port, () => resolve(server)));
    },
  },
];
