import { Injectable, Inject, OnModuleDestroy } from '@nestjs/common';
import { ServerOptions, SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe, GraphQLSchema } from 'graphql';
import { Server } from 'http';
import * as WebSocket from 'ws';
import { SUBSCRIPTION_SERVER } from './subscriptions.constants';

@Injectable()
export class SubscriptionsService implements OnModuleDestroy {
  private subscriptionServer: SubscriptionServer;

  constructor(@Inject(SUBSCRIPTION_SERVER) private readonly ws: Server) {}

  createSubscriptionServer(
    schema: GraphQLSchema,
    options: ServerOptions = {},
    socketOptions: WebSocket.ServerOptions = {},
  ) {
    this.subscriptionServer = new SubscriptionServer(
      {
        execute,
        subscribe,
        schema,
        ...options,
      },
      {
        server: this.ws,
        path: '/subscriptions',
        ...socketOptions,
      },
    );
  }

  onModuleDestroy() {
    this.ws.close();
  }
}
