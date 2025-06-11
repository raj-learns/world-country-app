import { createServer } from 'node:http'
import { createYoga, createSchema } from 'graphql-yoga'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const typeDefs = /* GraphQL */ `
  enum Continent {
    ASIA
    EUROPE
    AFRICA
    NORTH_AMERICA
    SOUTH_AMERICA
    AUSTRALIA
    ANTARCTICA
  }

  type Country {
    id: Int!
    name: String!
    area: Float!
    population: Int!
    continent: Continent!
  }

  type Query {
    countries: [Country!]!
  }

  type Mutation {
    addCountry(
      name: String!
      area: Float!
      population: Int!
      continent: Continent!
    ): Country!
  }
`

const resolvers = {
  Query: {
    countries: async () => {
      return prisma.country.findMany()
    },
  },
  Mutation: {
    addCountry: async (_: any, args: any) => {
      return prisma.country.create({ data: args })
    },
  },
}

const yoga = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.log(' Server is running on http://localhost:4000/graphql')
})
