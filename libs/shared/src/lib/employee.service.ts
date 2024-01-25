import { GraphQLClient } from 'graphql-request';
import { uuid } from '@deepkit/type';

import { CompanyService } from './company.service';
import { EmployeeConversation } from './types';

export class EmployeeService {
  constructor(private readonly client: GraphQLClient, private readonly company: CompanyService) {}

  getConversations(): EmployeeConversation {
    return { id: uuid() };
  }
}
