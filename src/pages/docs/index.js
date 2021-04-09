import { DocumentationLayout } from '@/layouts/DocumentationLayout'
import MarkdownSample from '@/components/MarkdownSample.mdx'

export default function DocsLandingPage() {
    return (<div>
        Docs index
    </div>)
}

DocsLandingPage.layoutProps = {
    meta: {
        title: 'Documentation',
    },
    Layout: DocumentationLayout,
}
