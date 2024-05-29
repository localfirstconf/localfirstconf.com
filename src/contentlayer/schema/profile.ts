import {defineDocumentType} from 'contentlayer/source-files'

export const Profile = defineDocumentType(() => ({
  name: 'Profile',
  filePathPattern: `profiles/*.mdx`,
  contentType: 'mdx',
  fields: {
    name: {type: 'string', required: true},
    role: {type: 'string', required: true},
    avatar: {type: 'string', required: true},
    speaker: {type: 'boolean', required: false, default: false},
    workshopHost: {type: 'boolean', required: false, default: false},
    email: {type: 'string', required: false},
    whatsapp: {type: 'string', required: false},
    twitter: {type: 'string', required: false},
    mastodon: {type: 'string', required: false},
    linkedin: {type: 'string', required: false},
    instagram: {type: 'string', required: false},
    website: {type: 'string', required: false}
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (profile: any) =>
        profile.speaker ? profile._raw.sourceFileName.replace('.mdx', '').split('-').slice(1).join('-') : profile._raw.sourceFileName.replace('.mdx', '')
    },
    order: {
      type: 'number',
      resolve: (profile: any) => (profile.speaker ? profile._raw.sourceFileName.replace('.mdx', '').split('-')[0] : 999)
    }
  }
}))
