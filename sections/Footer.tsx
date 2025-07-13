'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const links = [
    {
        title: 'Translate',
        href: '#',
    },
    {
        title: 'Protocol Flow',
        href: '#',
    },
    {
        title: 'Binary Lens',
        href: '#',
    },
    {
        title: 'Algorithmic Pulse',
        href: '#',
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

export default function FooterSection() {
    return (
        <motion.footer
            className="border-t border-t-[#23272f] bg-black py-8 md:py-12 mt-auto w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="flex flex-col md:flex-row flex-wrap justify-between items-center gap-8 md:gap-6">
                    <motion.span
                        className="text-white order-last block text-center text-sm md:order-first"
                        variants={itemVariants}
                    >
                        © {new Date().getFullYear()} Mariwan, All rights reserved
                    </motion.span>
                    <motion.div
                        className="order-first flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:order-last"
                        variants={containerVariants}
                    >
                        {links.map((link, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <Link
                                    href={link.href}
                                    className="text-white hover:text-neutral-800 block duration-300 px-2 md:px-3 py-1 rounded transition-all"
                                >
                                    <span>{link.title}</span>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.footer>
    )
}