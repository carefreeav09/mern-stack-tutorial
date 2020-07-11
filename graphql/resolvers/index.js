const userResolver = require('./users');
const postsResolver = require('./posts');
const commentsResolver = require('./comments');

const rootResolver = {
    ...userResolver,
    ...postsResolver,
    ...commentsResolver
}
module.exports = rootResolver;
