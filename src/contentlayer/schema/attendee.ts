import {defineDocumentType} from 'contentlayer/source-files'

export const Attendee = defineDocumentType(() => ({
  name: 'Attendee',
  filePathPattern: `attendees/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {type: 'string', required: true},
    role: {type: 'string', required: true},
    avatar: {type: 'string', required: true},
    email: {type: 'string', required: false},
    whatsapp: {type: 'string', required: false},
    twitter: {type: 'string', required: false},
    linkedin: {type: 'string', required: false},
    instagram: {type: 'string', required: false},
    website: {type: 'string', required: false}
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (attendee: any) => attendee._raw.sourceFileName.replace('.mdx', '')
    }
  }
}))
