import { CompanyService } from '@deepkit-locally-built-libraries-issue-repro/shared';

import { GraphQLContext } from './context';

export class CompanyResolver {
  constructor(
    private readonly context: GraphQLContext,
    private readonly company: CompanyService,
  ) {}
}

