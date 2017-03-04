const requireMarkdown = require.context(".", false, /\.mdx?$/)


module.exports = {
  title: 'Blog',
  description: "I've been writing JavaScript for over half my life, and would like to share what I've learned along the way.",
  wrapper: 'BlogWrapper',
  // TODO:
  // - split the array up into chunks
  // - manually create pages under children for each of these chunks to get pagination
  children: requireMarkdown.keys().map(requireMarkdown),
}
