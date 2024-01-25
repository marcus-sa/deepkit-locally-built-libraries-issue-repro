import { InjectorContext, provide } from '@deepkit/injector';
import { GraphQLClient } from 'graphql-request';

import { CompanyService, EmployeeService } from '@deepkit-locally-built-libraries-issue-repro/shared';

import { CompanyResolver } from './company.resolver';
import { EmployeeResolver } from './employee.resolver';
import { GraphQLContext } from './context';

void InjectorContext.forProviders([
  CompanyResolver,
  EmployeeResolver,
  CompanyService,
  EmployeeService,
  provide<GraphQLContext>({ useValue: {} }),
  provide<GraphQLClient>({ useFactory: () => new GraphQLClient('localhost') }),
  // this doesn't work because it's an external library import
  // { provide: GraphQLClient, useFactory: () => new GraphQLClient() }
]).getRootInjector();
