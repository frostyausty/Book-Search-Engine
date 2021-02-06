const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        bookId: Int
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
    }

    input bookInput {
        bookId: Int
        authors: [String]
        description: String
        title: String
        image: String
        link: String
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        createUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookInput): User
        deleteBook(bookId: Int): User
    }

    type Auth {
        token: ID!
        user: User
    }
    `;

    module.exports = typeDefs;