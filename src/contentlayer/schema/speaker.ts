import {defineDocumentType} from 'contentlayer/source-files'

export const Speaker = defineDocumentType(() => ({
  name: 'Speaker',
  filePathPattern: `speakers/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {type: 'string', required: true},
    attributes: {type: 'list', of: {type: 'string'}, required: true},
    avatar: {type: 'string', required: true},
    twitter: {type: 'string', required: false},
    website: {type: 'string', required: false}
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (speaker: any) => speaker._raw.sourceFileName.replace('.mdx', '')
    }
  }
}))
