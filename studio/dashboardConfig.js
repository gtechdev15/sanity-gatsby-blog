export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e0d1877070f23a14ffeeec2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-5sykzuei',
                  apiId: '3ac4bf4d-b7e9-41db-b6e3-8bd22822d19f'
                },
                {
                  buildHookId: '5e0d1877ea74d12534aba833',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-vzk11rbq',
                  apiId: '130c75ca-8bab-4a6a-8b02-65d99d49661d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gtechdev15/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-vzk11rbq.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
