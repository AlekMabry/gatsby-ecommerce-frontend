## E-Commerce Site Demo
This is a headless E-Commerce front-end demo site powered by React, Gatsby, and
GraphQL. Gatsby compiles static pages from the React program, while GraphQL is
used to load dynamic data from the backend.

## Static Config
Static content that should be "baked" into the site, such as colors, theme,
branding, and contact information can be modified in:

    ```src/style/
    src/static/```

## GraphQL
Any backend with GraphQL can be used with this site. To see what data should be
returned by the backend from GraphQL queries, check out 
`src/json/`