import {
  CompanyService,
  EmployeeConversation,
  EmployeeService
} from '@deepkit-locally-built-libraries-issue-repro/shared';

import { GraphQLContext } from './context';

export class EmployeeResolver {
  constructor(
    private readonly company: CompanyService,
    private readonly employee: EmployeeService,
    private readonly context: GraphQLContext,
  ) {}

  getConversations(): EmployeeConversation {
    return this.employee.getConversations();
  }
}

