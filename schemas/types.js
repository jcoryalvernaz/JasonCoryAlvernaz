const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLBoolean, GraphQLID } = graphql;

const CommentType = new GraphQLObjectType({
  name: "Comment",
  type: "Query",
  fields: {
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    date: { type: GraphQLString },
    slug: { type: GraphQLString },
    parent_comment_id: { type: GraphQLID },
    text: { type: GraphQLString },
    moderated: { type: GraphQLBoolean }
  }
});

exports.CommentType = CommentType;
