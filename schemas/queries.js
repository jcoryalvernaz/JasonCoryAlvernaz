const { db } = require("../pgAdapter");
const { GraphQLObjectType, GraphQLString, GraphQLList } = require("graphql");
const { CommentType } = require("./types");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  type: "Query",
  fields: {
    comments: {
      type: new GraphQLList(CommentType),
      resolve(parentValue, args) {
        const query = `SELECT * FROM comments ORDER BY date DESC`;

        return db
          .many(query)
          .then(res => res)
          .catch(err => err);
      }
    },
    commentsBySlug: {
      type: new GraphQLList(CommentType),
      args: { slug: { type: GraphQLString } },
      resolve(parentValue, args) {
        const query = `SELECT * FROM comments WHERE slug=$1 ORDER BY date DESC`;
        const value = args.slug;

        return db
          .many(query, value)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.query = RootQuery;
