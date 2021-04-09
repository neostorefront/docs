import { createPageList } from '@/utils/createPageList'

const pages = createPageList(
    require.context(`../pages/docs/?meta=title,shortTitle,published`, false, /\.mdx$/),
    'docs'
)

export const documentationNav = {
    'Introduction': [
        pages['test'],
        pages['test2'],
    ],
}
