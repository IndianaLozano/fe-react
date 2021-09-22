import { FunctionComponent } from 'react'
import { Post } from './Post'

import { Page } from '../../shared'

import './feed.css'

export const FeedHome: FunctionComponent = () => (
  <Page>
    <Post author="Autor" content="asdasda" />
    <Post author="Autor" content="asdasda" />
    <Post author="Autor" content="asdasda" />
  </Page>
)
