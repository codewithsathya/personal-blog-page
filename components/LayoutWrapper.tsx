import { Inter } from '@next/font/google'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.png'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import { ReactNode } from 'react'
import Image from 'next/image'

interface Props {
    children: ReactNode
}

const inter = Inter({
    subsets: ['latin'],
})

const LayoutWrapper = ({ children }: Props) => {
    return (
        <SectionContainer>
            <div className={`${inter.className} flex h-screen flex-col justify-between font-sans`}>
                <header className="flex items-center justify-between py-10">
                    <div>
                        <Link href="/" aria-label={siteMetadata.headerTitle}>
                            <div className="flex items-center justify-between">
                                <div className="mr-3">
                                    <Image src={Logo} alt="/" width={40} height={0} />
                                </div>
                                {typeof siteMetadata.headerTitle === 'string' ? (
                                    <div className="hidden h-6 text-2xl font-semibold sm:block">
                                        {siteMetadata.headerTitle}
                                    </div>
                                ) : (
                                    siteMetadata.headerTitle
                                )}
                            </div>
                        </Link>
                    </div>
                    <div className="flex items-center text-base leading-5">
                        <div className="hidden sm:block">
                            {headerNavLinks.map((link) => (
                                <Link
                                    key={link.title}
                                    href={link.href}
                                    className="p-1 font-medium text-gray-900 hover:text-[#3EAC9C] dark:text-gray-100 sm:p-4"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                        <ThemeSwitch />
                        <MobileNav />
                    </div>
                </header>
                <main className="mb-auto">{children}</main>
                <Footer />
            </div>
        </SectionContainer>
    )
}

export default LayoutWrapper
