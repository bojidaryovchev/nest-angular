import { Module, NestModule, MiddlewaresConsumer, RequestMethod } from '@nestjs/common';
import { GraphQLFactory, GraphQLModule } from '@nestjs/graphql';
import { sync } from 'glob';
import { readFileSync } from 'fs';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { SERVER_CONFIG as config } from '../../server.constants';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { SubscriptionsService } from './subscriptions/subscriptions.service';

@Module({
  imports: [
    GraphQLModule,
    SubscriptionsModule.forRoot()
  ]
})
export class GraphqlModule implements NestModule {
  constructor(
    private readonly subscriptionsService: SubscriptionsService,
    private readonly graphQLFactory: GraphQLFactory
  ) {}

  configure(consumer: MiddlewaresConsumer): void {
    const ws: string = `${config.wsProtocol}://${config.domain}:${config.wsPort}`;
    const subscriptionsEndpoint: string = `${ws}/subscriptions`;
    const schema = this.createSchema('src/server/**/*.graphql');

    this.subscriptionsService.createSubscriptionServer(schema);

    consumer
      .apply(
        graphiqlExpress({
          endpointURL: '/graphql',
          subscriptionsEndpoint
        })
      )
      .forRoutes({ path: '/graphiql', method: RequestMethod.ALL })
      .apply(graphqlExpress(req => ({ schema, rootValue: req })))
      .forRoutes({ path: '/graphql', method: RequestMethod.ALL });
  }

  private createSchema(globPattern: string) {
    const matchingPaths: string[] = sync(globPattern);
    const mergedFileContents: string[] = [];

    for (const path of matchingPaths) {
      const fileContents: string = readFileSync(path, { encoding: 'utf8' });

      if (fileContents) {
        mergedFileContents.push(fileContents);
      }
    }

    const typeDefs: string = mergedFileContents.join('\n');

    return this.graphQLFactory.createSchema({ typeDefs });
  }
}
