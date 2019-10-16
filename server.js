const graphql = require("graphql");
const express = require("express");
const expressGraphQL = require("express-graphql");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const { GraphQLSchema } = graphql;
const { query } = require("./schemas/queries");
const { mutation } = require("./schemas/mutations");

const isProduction = process.env.NODE_ENV === "production";
const origin = {
  origin: isProduction ? "https://jasoncoryalvernaz.com" : "*"
};

const schema = new GraphQLSchema({
  query,
  mutation
});

const app = express();

app.options('*', cors());
app.use(compression());
app.use(helmet());
app.use(cors(origin));

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 5 // 5 requests
});

app.use(limiter);

app.use(
  "/",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server Listening`);
});
