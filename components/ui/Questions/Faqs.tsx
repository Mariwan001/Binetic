"use client";
import { motion } from "framer-motion";

export default function FAQs() {
    const parentVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
            },
        },
    };

    const containerVariants = {
        hidden: {},
        show: {
            transition: {
                staggerChildren: 0.25,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                stiffness: 60,
                damping: 18,
            },
        },
    };

    return (
        <motion.section
            className="scroll-py-16 py-12 md:scroll-py-32 md:py-24 lg:py-20 transition-all duration-300"
            variants={parentVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-6">
                <div className="grid gap-y-12 gap-x-12 px-2 lg:grid-cols-2 items-start">
                    <div className="text-center lg:text-left flex flex-col justify-center">
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-6xl text-white leading-tight transition-all duration-300">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p className="text-white text-base md:text-lg lg:text-2xl opacity-80 transition-all duration-300">Every system raises questions.</p>
                    </div>

                    <motion.div
                        className="divide-y divide-dashed sm:mx-auto sm:max-w-lg lg:mx-0 text-white w-full"
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="pb-8 transition-all duration-300 hover:bg-white/5 rounded-xl px-4 lg:pb-6 lg:px-2">
                            <h3 className="font-semibold text-lg md:text-xl lg:text-lg transition-all duration-300">What is the refund policy?</h3>
                            <p className="mt-4 text-white/60 text-base md:text-lg lg:text-base">We offer a 30-cycle rollback guarantee.
                            If Binetic doesn’t align with your computational needs, initiate a reversal request within 30 system days.</p>

                            <ol className="list-outside list-decimal space-y-2 pl-5 text-white/50 text-base md:text-lg lg:text-base">
                                <li className="mt-4">To revert access, contact Binetic Support with your transaction hash and a brief rollback reason.</li>
                                <li className="mt-4">Refund protocols execute within 3–5 processing cycles.</li>
                                <li className="mt-4">Note: Rollbacks are valid for first-time nodes only and are limited to one per unique system identity.</li>
                            </ol>
                        </motion.div>
                        <motion.div variants={itemVariants} className="py-8 transition-all duration-300 hover:bg-white/5 rounded-xl px-4 lg:py-6 lg:px-2">
                            <h3 className="font-semibold text-lg md:text-xl lg:text-lg transition-all duration-300">How do I cancel my subscription?</h3>
                            <p className="mt-4 text-white/60 text-base md:text-lg lg:text-base">You may terminate your Binetic stream anytime by accessing your user control interface and triggering the deactivation protocol.</p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="py-8 transition-all duration-300 hover:bg-white/5 rounded-xl px-4 lg:py-6 lg:px-2">
                            <h3 className="font-semibold text-lg md:text-xl lg:text-lg transition-all duration-300">Can I upgrade my plan?</h3>
                            <p className="my-4 text-white/60 text-base md:text-lg lg:text-base">Yes. Initiate a tier escalation by accessing your control hub and selecting the desired operational layer.</p>
                            <ul className="list-outside list-disc space-y-2 pl-5 text-white/50 text-base md:text-lg lg:text-base">
                                <li>You’ll be charged the delta between your current and target stream tier.</li>
                                <li>New capabilities activate immediately, with recalibrated billing on the next system cycle.</li>
                            </ul>
                        </motion.div>
                        <motion.div variants={itemVariants} className="py-8 transition-all duration-300 hover:bg-white/5 rounded-xl px-4 lg:py-6 lg:px-2">
                            <h3 className="font-semibold text-lg md:text-xl lg:text-lg transition-all duration-300">Do you offer phone support?</h3>
                            <p className="mt-4 text-white/60 text-base md:text-lg lg:text-base">Voice comm protocols are not yet integrated.
                            However, Binetic supports live session channels and encrypted queries via email, optimized for rapid traceability and precision diagnostics.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    )
}