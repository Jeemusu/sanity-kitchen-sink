export default {
  widgets: [
    {name: 'structure-menu'},
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
                  buildHookId: '636920f3d2880d546fbdd8d3',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-9keg6u93',
                  apiId: '2910dae2-d8d4-4652-b6ae-c32e3b9f291f'
                },
                {
                  buildHookId: '636920f39becb353cf56453b',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-mnwio3bx',
                  apiId: 'fc78d6ab-6514-409f-a599-8fa55f8765f6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Jeemusu/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-mnwio3bx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
