import Head from "next/head";
import React from "react";
const PageMetaHeader: React.FC<{title:string, pageUrl:string, description:string, keywords: string}> = ({title,pageUrl,description,keywords}) => {
    const fullUrl = `${process.env.NEXT_PUBLIC_APP_URL}${pageUrl}`;
    return <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta property="og:title" content={title} />
            <meta property='og:description' content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Thumb Engineering Construction" />
            <meta property="og:url" content={fullUrl} />
            <link rel="canonical" href={fullUrl}/>
        </Head>


}
export default PageMetaHeader;