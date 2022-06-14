import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        // <Html className="dark">
        <Html>
            <Head />
            <body className='dark:bg-black light:bg-stone-100 '>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}