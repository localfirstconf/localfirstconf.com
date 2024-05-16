import {defineDocumentType} from 'contentlayer/source-files'

export const Session = defineDocumentType(() => ({
  name: 'Session',
  filePathPattern: `sessions/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {type: 'string', required: true},
    placeholder: {type: 'boolean', default: false},
    speaker: {type: 'string', required: false, description: 'Slug of the speaker'},
    start: {type: 'date', required: true},
    duration: {type: 'number', required: true, description: 'Duration in minutes'},
    location: {type: 'string', required: false}
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (session: any) => {
        let path = session._raw.flattenedPath.replace(/^pages\/?/, '/')
        if (!path.startsWith('/')) path = `/${path}`
        path = path
          .split('/')
          .map((segment: string) => segment.replace(/^\d\d\d\d\-/, ''))
          .join('/')
          .replace('sessions', 'schedule')
        return path
      }
    },
    category: {
      type: 'string',
      resolve: (session: any) => session._raw.flattenedPath.split('/')[1]
    }
  }
}))
