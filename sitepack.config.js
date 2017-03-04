export default ({ environment }) => ({
  paths: {
    html: './source/index.html.ejs',
    loaders: './source/loaders',
    main: './source/main.js',
    output: './build',
    public: './public',
    renderToString: './source/renderToString.js',
    site: './source/createSite.js',
  },

  rules: [
    { test: /\.page\.js$/,
      use: [
        'sitepack-page',
        'babel'
      ]
    },
    { test: /\.js$/,
      exclude: /node_modules|\.example\.js|\.page\.js$/,
      loader: 'babel'
    },
    { test: /\.mdx?$/,
      loader: 'sitepack-mdx-page',
      options: { es5: true, extractTitle: true },
    },
    { test: /\.css$/,
      loader: 'sitepack-css',
    },
    { test: /\.(gif|jpe?g|png|ico)$/,
      loader: 'url',
      options: { limit: 4000 },
    },
    { test: /\.less$/,
      use: [
        'sitepack-css',
        'less'
      ],
    },
  ],

  vendor: [
    'react',
    'react-dom'
  ],
})
