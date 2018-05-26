import { Module, DynamicModule } from '@nestjs/common';
import { createSubscriptionProviders } from './subscriptions.providers';
import { SubscriptionsService } from './subscriptions.service';
import { SERVER_CONFIG } from '../../../server.constants';

@Module({
  providers: [SubscriptionsService],
  exports: [SubscriptionsService],
})
export class SubscriptionsModule {
  static forRoot(port: number = SERVER_CONFIG.wsPort): DynamicModule {
    const providers = createSubscriptionProviders(port);

    return {
      module: SubscriptionsModule,
      providers: [...providers],
      exports: [...providers],
    };
  }
}
