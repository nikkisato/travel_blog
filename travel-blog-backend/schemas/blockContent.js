export default {
  name: 'blockContent',
  type: 'array',
  title: 'Block Content',
  of: [
    {
      type: 'block',
      title: 'Block',
      styles: [
        {
          title: 'Normal',
          value: 'normal',
        },
        {
          title: 'H1',
          value: 'H1',
        },
        {
          title: 'H2',
          value: 'H2',
        },
        {
          title: 'H3',
          value: 'H3',
        },
        {
          title: 'H4',
          value: 'H4',
        },
        {
          title: 'H5',
          value: 'H5',
        },
        {
          title: 'H6',
          value: 'H6',
        },
        {
          title: 'Quote',
          value: 'blockquote',
        },
      ],
      lists: [
        {
          title: 'Bullet',
          value: 'bullet',
        },
      ],
      marks: {
        decorators: [
          {title: 'Strong', value: 'strong'},
          {title: 'Emphasis', value: 'em'},
        ],
        annotations: [
          {
            title: 'URL',
            name: 'link',
            type: 'object',
            fields: [
              {
                title: 'URL',
                name: 'href',
                type: 'url',
              },
            ],
          },
        ],
      },
    },
    {
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
