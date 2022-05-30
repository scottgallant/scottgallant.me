import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        // <Html className="dark">
        <Html className='bg-stone-100'>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}