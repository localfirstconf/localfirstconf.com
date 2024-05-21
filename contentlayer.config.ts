import {Profile} from './src/contentlayer/schema/profile'
import {Session} from './src/contentlayer/schema/session'
import {makeSource} from 'contentlayer/source-files'

export default makeSource({
  contentDirPath: 'content',
  contentDirExclude: ['profiles/README.md'],
  documentTypes: [Profile, Session]
})
