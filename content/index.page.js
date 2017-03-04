module.exports = {
  wrapper: 'SiteWrapper',
  title: "James K Nelson",
  description: "I've been writing JavaScript for over half my life, and would like to share what I've learned along the way.",
  content: require('./blog/index.page.js'),
  children: [
    require('./pages/newsletter.md'),
    require('./pages/thank-you.md'),
  ]
}
