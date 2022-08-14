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
                  buildHookId: '62f8e5ee4a1d065d3ec73131',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4j66kh6r',
                  apiId: '0719de5d-a2ab-44ab-b844-709d2cd79d10'
                },
                {
                  buildHookId: '62f8e5ef928db260c38fc4be',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gnxkyas3',
                  apiId: '7031cf56-4a73-4c41-abdb-22179df9c8c0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/avmediateam/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gnxkyas3.netlify.app', category: 'apps'}
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
