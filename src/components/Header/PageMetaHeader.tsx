import Head from "next/head";
import React from "react";
const PageMetaHeader: React.FC<{title:string, pageUrl:string, description:string}> = ({title,pageUrl,description}) => {
const fullUrl = `${process.env.NEXT_PUBLIC_APP_URL}${pageUrl}`;
    return <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta property="og:title" content={title} />
            <meta property='og:description' content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Test Website" />
            <meta property="og:url" content={fullUrl} />
            <link rel="canonical" href={fullUrl}/>
        </Head>


}
export default PageMetaHeader;