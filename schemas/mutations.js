const graphql = require("graphql");
const { db } = require("../pgAdapter");
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const { CommentType } = require("./types");

const RootMutation = new GraphQLObjectType({
  name: "RootMutationType",
  type: "Mutation",
  fields: {
    createComment: {
      type: CommentType,
      args: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        text: { type: GraphQLString },
        parent_comment_id: { type: GraphQLID }
      },
      resolve(parentValue, args) {
        const mutation = `INSERT INTO comments (name, slug, text, parent_comment_id) VALUES ($1, $2, $3, $4) RETURNING name`;
        const values = [
          args.name,
          args.slug,
          args.text,
          args.parent_comment_id
        ];

        return db
          .one(mutation, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    updateComment: {
      type: CommentType,
      args: {
        name: { type: GraphQLString },
        slug: { type: GraphQLString },
        text: { type: GraphQLString },
        parent_comment_id: { type: GraphQLID },
        id: { type: GraphQLID }
      },
      resolve(parentValue, args) {
        const mutation = `UPDATE comments SET name = $1, slug = $2, text = $3, parent_comment_id = $4 WHERE id = $5 RETURNING name`;
        const values = [
          args.name,
          args.slug,
          args.text,
          args.parent_comment_id,
          args.id
        ];

        return db
          .one(mutation, values)
          .then(res => res)
          .catch(err => err);
      }
    },
    deleteComment: {
      type: CommentType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, args) {
        const mutation = `DELETE FROM comments WHERE id = $1 RETURNING name`;
        const value = args.id;

        return db
          .one(mutation, value)
          .then(res => res)
          .catch(err => err);
      }
    }
  }
});

exports.mutation = RootMutation;
