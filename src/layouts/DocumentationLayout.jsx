import { SidebarLayout } from '@/layouts/SidebarLayout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Title } from '@/components/Title'
import { documentationNav } from '@/navs/documentation'

export function DocumentationLayout(props) {
    const router = useRouter()

    return (
        <>
            <Title suffix={router.pathname === '/' ? undefined : 'NeoStorefront'}>
                {props?.layoutProps?.meta?.metaTitle || props?.layoutProps?.meta?.title}
            </Title>
            <Head>
                <meta key="twitter:card" name="twitter:card" content="summary" />
            </Head>
            <SidebarLayout nav={documentationNav} {...props} />
        </>
    )
}
