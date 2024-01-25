import { GraphQLClient } from 'graphql-request';

export class CompanyService {
  constructor(private readonly client: GraphQLClient) {}
}
