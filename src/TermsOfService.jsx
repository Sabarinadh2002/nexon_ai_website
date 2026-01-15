import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function TermsOfService() {
  const navigate = useNavigate();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      
      if (windowHeight) {
        setScrollProgress(Math.min(totalScroll / windowHeight, 1));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .bg-grid {
            background-size: 50px 50px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-attachment: fixed;
        }
    `}</style>
    <div className="min-h-screen text-neutral-200 font-sans selection:bg-orange-500/30 relative">
      {/* Dynamic Background */}
      <div 
        className="fixed inset-0 z-[-2] transition-colors duration-100 ease-out"
        style={{
            background: `linear-gradient(to bottom right, #050505, hsl(${250 + (scrollProgress * 110)}, 50%, 10%))`
        }}
      />
      {/* Grid Pattern */}
      <div className="fixed inset-0 z-[-1] bg-grid pointer-events-none opacity-40" />

      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* <nav className="mb-8">
            <img src="/images/logogreen.png" alt="Nexon-AI" className="h-8" />
        </nav> */}
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-neutral-300 hover:text-white transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Terms of Service</h1>
        
        <div className="flex flex-col gap-1 text-neutral-300 mb-12 text-sm border-l-2 border-orange-500 pl-4">
            <p className="font-semibold text-white">Nexon-AI Limited</p>
            <p>Effective Date: January 14, 2026</p>
            <p>Last Updated: January 14, 2026</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4 text-neutral-200">By accessing, registering for, or using Nexon-AI's AI receptionist and voice agent services (the "Service"), you ("Customer" or "you") agree to be bound by these Terms of Service ("ToS"), along with our Privacy Notice and Data Processing Agreement (DPA).</p>
                <p className="mb-4 text-neutral-200"><strong>If you do not agree to these terms, do not use the Service.</strong></p>
                <p className="mb-4 text-neutral-200">These Terms of Service constitute the entire agreement between you and Nexon-AI Limited ("Nexon-AI," "we," "us," "our") regarding the Service, and supersede all prior agreements, understandings, and representations.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">1.1 Authority</h3>
                <p className="mb-2 text-neutral-200">If you are entering into this agreement on behalf of a company, organization, or business entity (not as an individual), you represent and warrant that:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>You have the legal authority to bind that entity</li>
                    <li>You are an authorized representative</li>
                    <li>The entity will be bound by these terms</li>
                    <li>The entity accepts full liability for your use of the Service</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">1.2 Changes to Terms</h3>
                <p className="mb-2 text-neutral-200">We may modify these Terms of Service at any time. Material changes will be communicated by:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Email to your registered account email address</li>
                    <li>Notification in your account dashboard</li>
                    <li>Prominent posting on our website</li>
                </ul>
                <p className="mb-4 text-neutral-200">Continued use of the Service after notification constitutes acceptance of updated terms. If you do not accept changes, you may cancel your subscription before changes take effect.</p>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. Service Description & Limitations</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.1 What We Provide</h3>
                <p className="mb-2 text-neutral-200">Nexon-AI provides cloud-based AI voice receptionist and call agent services, including:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Automated inbound call answering and routing</li>
                    <li>Appointment and booking management</li>
                    <li>Customer inquiry handling and response</li>
                    <li>Call recording (technical infrastructure only)</li>
                    <li>Call transcription and analytics</li>
                    <li>Integration with third-party business tools</li>
                    <li>Customer support and technical assistance</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.2 Service Delivery Method</h3>
                <p className="mb-2 text-neutral-400">The Service is delivered via cloud-based infrastructure and accessed through:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Web-based dashboard and control panel</li>
                    <li>API integrations for third-party systems</li>
                    <li>Voice telephone network (SIP trunking, Twilio, telephony providers)</li>
                    <li>Mobile and web applications</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.3 What We Do NOT Provide</h3>
                <p className="mb-2 text-neutral-200">Nexon-AI does NOT provide:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Legal advice or compliance consulting</li>
                    <li>Call recording consent management</li>
                    <li>Customer data privacy handling</li>
                    <li>Compliance verification or auditing</li>
                    <li>Data security guarantees</li>
                    <li>Uninterrupted or error-free operation</li>
                    <li>Specific regulatory compliance</li>
                </ul>
                <p className="mb-4 text-neutral-200">You remain responsible for all compliance matters. See Section 4 (Acceptable Use & Compliance Responsibility) for details.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.4 Third-Party Dependencies</h3>
                <p className="mb-4 text-neutral-200">The Service depends on third-party services (sub-processors) for core functionality:</p>
                <div className="overflow-x-auto mb-6 border border-neutral-700 rounded-lg bg-neutral-900/50">
                    <table className="w-full text-left text-sm text-neutral-200">
                        <thead className="bg-neutral-800 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-700">Sub-Processor</th>
                                <th className="p-3 border-b border-neutral-700">Function</th>
                                <th className="p-3 border-b border-neutral-700">Nexon-AI Liability</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-700">
                            <tr><td className="p-3">OpenAI (GPT)</td><td className="p-3">AI response generation</td><td className="p-3">NOT LIABLE for OpenAI failures</td></tr>
                            <tr><td className="p-3">Deepgram</td><td className="p-3">Speech-to-text conversion</td><td className="p-3">NOT LIABLE for Deepgram failures</td></tr>
                            <tr><td className="p-3">Neon/Supabase</td><td className="p-3">Database storage</td><td className="p-3">NOT LIABLE for database provider failures</td></tr>
                            <tr><td className="p-3">AWS</td><td className="p-3">Cloud infrastructure</td><td className="p-3">NOT LIABLE for AWS outages</td></tr>
                            <tr><td className="p-3">Stripe</td><td className="p-3">Payment processing</td><td className="p-3">NOT LIABLE for Stripe failures</td></tr>
                            <tr><td className="p-3">Twilio</td><td className="p-3">Telephony infrastructure</td><td className="p-3">NOT LIABLE for Twilio outages</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-4 text-neutral-200"><strong>Critical</strong>: You acknowledge that the Service depends on third-party providers. We are not responsible for their performance, availability, or compliance. See Section 10 (Limitation of Liability) for complete details.</p>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. Account Registration & Setup</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.1 Account Creation</h3>
                <p className="mb-2 text-neutral-200">To use the Service, you must: Register for an account with accurate, complete information, Provide a valid email address and phone number, Establish secure login credentials (password), Accept these Terms of Service, Provide valid payment information.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.2 Account Security Responsibility</h3>
                <p className="mb-2 text-neutral-200"><strong>YOU are entirely responsible for</strong>: Maintaining confidentiality of your password and login credentials, Preventing unauthorized access to your account, Notifying us immediately of unauthorized use, All activities and transactions conducted under your account.</p>
                <p className="mb-4 text-neutral-200"><strong>We are NOT responsible for</strong>: Unauthorized access if you fail to protect your credentials, Losses arising from compromised passwords, Your failure to enable multi-factor authentication (though recommended).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.3 Account Suspension & Termination</h3>
                <p className="mb-2 text-neutral-200">We may immediately suspend or terminate your account without refund if you: Violate these Terms of Service, Violate applicable law (TCPA, PECR, data protection laws), Fail to pay fees within 15 days of invoice, Engage in fraud, abuse, or illegal activity, Violate the Acceptable Use Policy (Section 4), Pose a security or legal risk to Nexon-AI or other users.</p>
                <p className="mb-4 text-neutral-200">No refund will be provided for suspension or termination under this section.</p>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Acceptable Use & Compliance Responsibility</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.1 Your Legal Compliance Obligation</h3>
                <p className="mb-4 text-neutral-200"><strong>This is critical</strong>: You are solely responsible for ensuring your use of the Service complies with all applicable laws and regulations, including:</p>
                
                <h4 className="text-white font-semibold mt-4 mb-2">Telecommunications Laws</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>TCPA (USA)</strong>: Prior express written consent required for AI-generated voice calls</li>
                    <li><strong>PECR (UK)</strong>: Consent required for marketing calls/texts</li>
                    <li><strong>UK GDPR & Data Protection</strong>: Lawful basis, caller consent, privacy notices required</li>
                    <li><strong>Ofcom Rules</strong>: Caller ID requirements, silent/abandoned call rules, identification requirements</li>
                    <li><strong>Do-Not-Call Compliance</strong>: Screening against TPS/CTPS, respecting opt-outs</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Call Recording & Data Protection</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Caller Consent</strong>: You must obtain explicit consent before recording calls (implied consent is insufficient under UK GDPR)</li>
                    <li><strong>Lawful Basis</strong>: You must establish lawful basis (consent, legitimate interest, legal obligation, contract, vital interest)</li>
                    <li><strong>Privacy Notice</strong>: You must provide privacy notice to callers explaining recording and use</li>
                    <li><strong>Data Subject Rights</strong>: You must handle SARs, deletion requests, portability requests from callers</li>
                    <li><strong>Data Security</strong>: You must protect call recordings with appropriate security measures</li>
                    <li><strong>Retention</strong>: You must establish and follow data retention schedules</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Content & Use</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Lawfulness</strong>: All content and calls must be lawful</li>
                    <li><strong>No Harassment</strong>: No threatening, abusive, or harassing communications</li>
                    <li><strong>No Fraud</strong>: No fraudulent, deceptive, or unlawful activity</li>
                    <li><strong>No Spam</strong>: No unsolicited bulk communications</li>
                    <li><strong>Respect Rights</strong>: No violation of intellectual property, privacy, or other third-party rights</li>
                    <li><strong>No Illegal Content</strong>: No content violating laws (AML, sanctions, export controls, etc.)</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Industry-Specific Compliance</h4>
                <p className="mb-2 text-neutral-200">If you operate in regulated sectors (healthcare, finance, insurance, gambling), you must comply with industry-specific laws:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Healthcare</strong>: HIPAA (USA), NHS Data Security & Protection Code (UK), medical regulations</li>
                    <li><strong>Finance</strong>: FCA regulations, PSD2, payment security</li>
                    <li><strong>Insurance</strong>: FCA conduct rules</li>
                    <li><strong>Gambling</strong>: Gambling Commission regulations</li>
                </ul>
                <p className="mb-4 text-neutral-200">Nexon-AI does not verify or ensure your compliance. This is entirely your responsibility.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.2 Prohibited Uses</h3>
                <p className="mb-2 text-neutral-200">You may NOT use the Service to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Violate Laws</strong>: Break TCPA, PECR, or any telecommunications law; Violate GDPR, Data Protection Act, or data protection laws; Engage in unlawful activity; Violate industry-specific regulations</li>
                    <li><strong>Recording Without Consent</strong>: Record calls without required consent; Fail to provide privacy notices about recording; Record for unlawful purposes; Violate call recording consent requirements in any jurisdiction</li>
                    <li><strong>Harassment & Abuse</strong>: Make threatening, abusive, or harassing calls; Stalk, intimidate, or harm individuals; Discriminate based on protected characteristics; Make calls during restricted hours (violates PECR)</li>
                    <li><strong>Fraud & Deception</strong>: Engage in fraud, scams, or deception; Misrepresent your identity or company; Phishing, malware, or security attacks; Identity theft or financial fraud; Illegal gambling or lottery schemes</li>
                    <li><strong>Do-Not-Call Violations</strong>: Call numbers on TPS (Telephone Preference Service) list without consent; Call numbers on your own do-not-call list; Fail to honor opt-outs; Repeatedly call individuals who have requested opt-out</li>
                    <li><strong>Unsolicited Communications</strong>: Spam calls or texts; Unsolicited marketing without prior consent; Robocalls without proper identification; Abandoned calls (no agent available when answered)</li>
                    <li><strong>Intellectual Property Violations</strong>: Use copyrighted content without permission; Infringe on trademarks or patents; Violate third-party intellectual property rights; Use our Service to distribute infringing content</li>
                    <li><strong>Data Protection Violations</strong>: Process personal data unlawfully; Violate data subject rights; Process without lawful basis or consent; Handle special category data (health, biometric) without safeguards; Share data with third parties without authorization</li>
                    <li><strong>Security & Infrastructure</strong>: Attempt to hack or access the Service without authorization; Distribute malware or viruses; Conduct denial-of-service (DDoS) attacks; Reverse-engineer or decompile our software; Interfere with infrastructure or services</li>
                    <li><strong>Other Violations</strong>: Violate sanctions, export controls, or legal obligations; Process data of minors without required protections; Violate API terms or use agreements; Share your account or credentials with unauthorized parties; Any use that violates these Terms of Service</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.3 Enforcement</h3>
                <p className="mb-2 text-neutral-200">Violation of the Acceptable Use Policy results in:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Immediate suspension of your account without notice (if serious)</li>
                    <li>Termination of your subscription without refund</li>
                    <li>Deletion of your data and call recordings</li>
                    <li>Cooperation with law enforcement if illegal activity is detected</li>
                    <li>No liability to you for suspension/termination</li>
                </ul>
                <p className="mb-4 text-neutral-200">We are under no obligation to investigate or warn before enforcement. Serious violations (fraud, illegality, security threats) may be suspended immediately.</p>
            </section>

            {/* Section 5 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Charges, Billing & Payment</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.1 Subscription Fees</h3>
                <p className="mb-4 text-neutral-200">Your subscription fees are: Amount as displayed on our pricing page at time of signup, Billing Period (Monthly or Annual), Billing Cycle begins on signup date and renews automatically, Usage fees cover unlimited calls (standard tier) or limits per tier.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.2 Automatic Renewal</h3>
                <p className="mb-2 text-neutral-200">Your subscription automatically renews at the end of each billing period unless you cancel. By signing up, you authorize recurring charges to your payment method.</p>
                <p className="mb-2 text-neutral-200"><strong>To Cancel</strong>: You can cancel anytime via your account dashboard (Settings → Subscription → Cancel), Email support@nexon-ai.com with subject "Cancel Subscription", or Written notice to our registered address.</p>
                <p className="mb-4 text-neutral-200"><strong>Cancellation Timing</strong>: Cancellation takes effect at end of current billing period. If you want immediate cancellation (mid-period), no refund is provided. Access terminates on cancellation date.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.3 Price Changes</h3>
                <p className="mb-4 text-neutral-200">We may change pricing with 30 days' written notice via email, website, or dashboard. Your options are to accept new pricing (continued use = acceptance) or cancel before new pricing takes effect (no penalty).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.4 Payment Terms & Collection</h3>
                <p className="mb-2 text-neutral-200"><strong>Due Date</strong>: Fees are due in advance of each billing period. <strong>Payment Methods</strong>: Credit card (Stripe), direct debit, bank transfer (on request).</p>
                <p className="mb-2 text-neutral-200"><strong>Failed Payments</strong>: First failure: Email notification and 5-day retry; Second failure: Email notification and 10-day retry; Third failure (15+ days overdue): Account suspension; 30+ days overdue: Account termination, data deletion.</p>
                <p className="mb-4 text-neutral-200"><strong>Late Payment Fees</strong>: If payment is 15+ days overdue, you pay late payment interest at 8% per annum above Bank of England base rate and all reasonable collection costs. We may suspend your account without liability if payment is overdue.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.5 Refund Policy</h3>
                <p className="mb-2 text-neutral-200"><strong>Non-Refundable</strong>: All subscription fees are non-refundable except: As required by law (UK consumer protection, etc.), Service level credits (if SLA breached), Where you cancel within statutory cooling-off period (14 days for consumer contracts).</p>
                <p className="mb-4 text-neutral-200"><strong>No Refunds For</strong>: Early cancellation (mid-period), Unused service time, Change of mind, Poor performance or dissatisfaction.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">5.6 Taxes</h3>
                <p className="mb-4 text-neutral-200">All fees are exclusive of sales tax, VAT, or similar taxes. You are responsible for paying all applicable taxes, providing valid tax identification if tax-exempt, and withholding taxes if required by law.</p>
            </section>

            {/* Section 6 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Service Level Agreement (SLA)</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.1 Uptime Guarantee</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI guarantees the Service will be available 99.5% of the time during each calendar month. Calculation: Measured across all servers and regions. Availability = (Total Minutes - Downtime Minutes) / Total Minutes × 100. Excludes scheduled maintenance (with 7 days' notice). Example: 99.5% of 43,200 minutes (30 days) = maximum 216 minutes downtime allowed. More than 216 minutes = SLA breach.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.2 Exclusions from SLA</h3>
                <p className="mb-4 text-neutral-200">We are NOT liable for downtime caused by: Scheduled Maintenance, Emergency Maintenance, Force Majeure, Third-Party Failures (OpenAI, Deepgram, AWS, Twilio), Attacks (DDoS, hacking), Customer Cause (configuration, misuse), Network Issues (ISP, connectivity), Planned Upgrades.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.3 Service Credits</h3>
                <p className="mb-4 text-neutral-200">If we breach the 99.5% guarantee in a calendar month, you receive service credits:</p>
                <div className="overflow-x-auto mb-6 border border-neutral-700 rounded-lg bg-neutral-900/50">
                    <table className="w-full text-left text-sm text-neutral-200">
                        <thead className="bg-neutral-800 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-700">Uptime</th>
                                <th className="p-3 border-b border-neutral-700">Credit</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-700">
                            <tr><td className="p-3">99.0% - 99.5%</td><td className="p-3">10% of monthly fee</td></tr>
                            <tr><td className="p-3">95.0% - 99.0%</td><td className="p-3">25% of monthly fee</td></tr>
                            <tr><td className="p-3">90.0% - 95.0%</td><td className="p-3">50% of monthly fee</td></tr>
                            <tr><td className="p-3">Below 90.0%</td><td className="p-3">100% of monthly fee</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-4 text-neutral-200"><strong>Credit Terms</strong>: Credits are applied as account credit (discount on next month), NOT refunds. Credits expire if not used within 12 months. Credits are your SOLE remedy for SLA breach. Maximum annual credits: 100% of annual fees.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.4 SLA Claims Process</h3>
                <p className="mb-4 text-neutral-200">To claim service credits: Identify Outage (dates/times), Request (email support@nexon-ai.com with proof), Review (we verify within 10 business days), Credit (applied within 30 days). Deadline: Claims must be submitted within 30 days of outage.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.5 Material Breach & Termination</h3>
                <p className="mb-4 text-neutral-200">If SLA credits exceed 100% of your annual fees in any 12-month period, you may treat it as a material breach, terminate your subscription with 10 days' notice, and receive pro-rata refund of prepaid fees. Otherwise, SLA credits are your exclusive remedy.</p>
            </section>

            {/* Section 7 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.1 Nexon-AI IP Rights</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI retains all intellectual property rights in: The Service, software code, and platform; AI models, algorithms, and technology; Documentation, help materials, and training content; Reports, analytics, and aggregated data; Brand, logo, and trademarks. You do NOT own any part of the Service. You have only a limited license to use it per these terms.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.2 User License Grant</h3>
                <p className="mb-2 text-neutral-200">Nexon-AI grants you a non-exclusive, non-transferable, revocable license to: Access and use the Service for your authorized business purposes, Integrate the Service with your business systems, Store and process your data as necessary to use the Service.</p>
                <p className="mb-4 text-neutral-200"><strong>Restrictions</strong>: No right to copy, modify, or create derivative works; No right to reverse-engineer or decompile; No right to rent, lease, or lend access to others; No right to sublicense or resell; No right to use for competitive purposes or benchmarking. License terminates when your subscription ends.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.3 Your Content</h3>
                <p className="mb-2 text-neutral-200">"Customer Content" means all data, prompts, configurations, and communications you provide. You retain ownership of Customer Content.</p>
                <p className="mb-2 text-neutral-200"><strong>Our Limited License</strong>: You grant Nexon-AI a license to: Store and process Customer Content to provide the Service, Use aggregated, anonymized data for service improvement, Perform backups and disaster recovery, Comply with legal obligations.</p>
                <p className="mb-4 text-neutral-200"><strong>Restrictions</strong>: We do NOT use your content for: Training AI models (unless you explicitly authorize), Marketing or promotion without written consent, Sharing with third parties (except sub-processors per DPA), Any purpose other than providing the Service.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.4 Feedback & Suggestions</h3>
                <p className="mb-4 text-neutral-200">Any feedback, suggestions, ideas, or feature requests you provide may be used by Nexon-AI for any purpose (including incorporation into products) without compensation or acknowledgment.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.5 Third-Party IP Claims</h3>
                <p className="mb-4 text-neutral-200">If anyone claims the Service infringes their intellectual property rights, we will defend you (Section 9: Indemnification). However, we are not liable if: You modified the Service in violation of these terms, You used the Service in combination with non-Nexon-AI systems, The claim arises from your use (not the Service itself).</p>
            </section>

            {/* Section 8 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">8. Warranty Disclaimer</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">8.1 AS-IS, AS-AVAILABLE Disclaimer</h3>
                <p className="mb-4 text-neutral-200">THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE". Nexon-AI MAKES NO WARRANTIES of any kind, express or implied, including: Merchantability, Fitness for Particular Purpose, Non-Infringement, Accuracy, Reliability, Performance, Compatibility.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">8.2 What We DO NOT Guarantee</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI does NOT guarantee that: Uninterrupted Service, Uptime (outages WILL occur), Error-Free operation, Performance, Data Security, AI Accuracy, Third-Party Performance, Regulatory Compliance, Success.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">8.3 Use at Your Own Risk</h3>
                <p className="mb-4 text-neutral-200">You use the Service entirely at your own risk. You are responsible for: Assessing whether the Service meets your needs, Evaluating whether the Service is suitable for your use case, Testing the Service before relying on it for critical operations, Maintaining backups and contingency plans, Complying with all laws and regulations.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">8.4 Limited Warranty (Exception)</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI provides only the following limited warranty: Service Availability (we will use reasonable efforts consistent with industry standards). Remedy: If we breach this limited warranty, your sole remedy is Service credits per the SLA or termination of your subscription with pro-rata refund (if material breach). Nothing in this section obligates us to guarantee performance, accuracy, or uptime beyond the SLA.</p>
            </section>

            {/* Section 9 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">9. Indemnification</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.1 You Indemnify Us (Most Important)</h3>
                <p className="mb-2 text-neutral-200">You agree to indemnify, defend (at your expense), and hold harmless Nexon-AI from all claims, damages, losses, and expenses (including attorneys' fees, court costs, and settlements) arising from or related to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>A. Your Compliance Failures</strong>: Your violation of TCPA, PECR, or telecommunications laws; Your failure to obtain call recording consent; Your failure to screen against Do-Not-Call lists; Your non-compliance with data protection laws (GDPR, DPA); Your violation of call recording consent requirements; Your failure to provide privacy notices to callers.</li>
                    <li><strong>B. Your Content & Use</strong>: Your use of the Service in violation of this agreement; Your content infringes third-party rights; Your content includes unlawful, fraudulent, or harmful material; Your use causes harm to third parties; Third-party claims that your data or use violates their rights.</li>
                    <li><strong>C. Your Business Activities</strong>: Regulatory violations in your industry; Breach of your customer relationships or contracts; Lawsuits from your customers or call recipients; Your use of the Service for illegal purposes; Fines, penalties, or enforcement actions against you.</li>
                    <li><strong>D. Third-Party Claims Generally</strong>: Any third-party claim arising from your use of the Service; Any claim you breach your representations and warranties; Any claim arising from your data or business conduct.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.2 Conditions for Indemnification</h3>
                <p className="mb-4 text-neutral-200">When you indemnify Nexon-AI, you agree to: Prompt Notice, Cooperation, Control (give Nexon-AI sole control of defense), Assistance, Settlement (not settle without our consent). We reserve the right to take over defense at our expense. You remain liable for all costs even if we control the defense.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.3 We Indemnify You (Limited)</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI will indemnify you IF: A third party claims the Service (our software) infringes their intellectual property rights, You notify us promptly, You don't use the Service in violation of these terms, You let us control the defense. Remedy: We will defend the claim, pay damages, or modify/replace the Service, or terminate with refund. Exclusions apply.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.4 Indemnification Survives</h3>
                <p className="mb-4 text-neutral-200">Indemnification obligations survive termination or expiration of these Terms of Service.</p>
            </section>

            {/* Section 10 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">10. Limitation of Liability</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.1 Limitation of Liability Cap</h3>
                <p className="mb-2 text-neutral-200">TO THE MAXIMUM EXTENT PERMITTED BY LAW: Nexon-AI's total liability to you for any and all claims arising from or related to this agreement, the Service, or your use of the Service shall not exceed:</p>
                <p className="mb-2 text-neutral-200">The GREATER of: 12 months of subscription fees you actually paid to Nexon-AI in the 12 months preceding the claim, OR £1,000 (One Thousand British Pounds).</p>
                <p className="mb-4 text-neutral-200">This cap applies PER CLAIM, not aggregate. Each claim has its own cap (up to 12 months of fees).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.2 Excluded Damages (NEVER LIABLE FOR)</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI is not liable for ANY of the following, regardless of cause: Indirect Damages, Consequential Damages, Special Damages, Punitive Damages, Reputational Harm, Third-Party Claims, Data Loss, Regulatory Fines. In short: No indirect, consequential, special, or punitive damages under any circumstances.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.3 Exceptions to Liability Cap</h3>
                <p className="mb-4 text-neutral-200">These items are NOT subject to the liability cap: Indemnification Obligations, Confidentiality Breach, Gross Negligence or Willful Misconduct, Data Protection Violations (direct liability), Your Obligations, Non-Waivable Claims.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.4 Basis of Liability</h3>
                <p className="mb-4 text-neutral-200">These Terms represent the basis of the bargain between us: You have accepted the liability limitations in exchange for lower pricing. The liability cap reflects appropriate risk allocation for a SaaS business.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.5 Essential Term</h3>
                <p className="mb-4 text-neutral-200">The liability limitation is essential and fundamental to this agreement. If any portion is found unenforceable, the remaining portions survive and apply.</p>
            </section>

            {/* Section 11 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">11. Confidentiality</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.1 Confidential Information</h3>
                <p className="mb-4 text-neutral-200">Each party agrees that "Confidential Information" includes: Technical information, Business plans, Customer lists, Proprietary algorithms, Data processing methods. It does NOT include: Publicly available information, Independently developed information, Information already known, Information received from third parties.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.2 Confidentiality Obligations</h3>
                <p className="mb-4 text-neutral-200">The receiving party agrees to: Keep Confidential Information strictly confidential, Use it only for purposes authorized by this agreement, Protect it with the same care as your own confidential information, Limit access to employees and contractors who need to know.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.3 Permitted Disclosures</h3>
                <p className="mb-4 text-neutral-200">You may disclose Confidential Information if: Compelled by law, Necessary to comply with legal obligations, Necessary to enforce these terms, Required by governmental authority. Nexon-AI may disclose: Customer data to sub-processors, Aggregated anonymized data, Your name as a customer (with permission).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.4 Duration</h3>
                <p className="mb-4 text-neutral-200">Confidentiality obligations survive termination of this agreement and continue for 5 years after termination.</p>
            </section>

            {/* Section 12 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">12. Data Protection & Processing</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.1 Your Responsibilities (Data Controller)</h3>
                <p className="mb-4 text-neutral-200">You are the "data controller" for personal data of your customers/callers. You are responsible for: Lawful Basis, Consent, Privacy Notice, Transparency, Data Subject Rights, Data Security, Compliance. Failure to comply is YOUR responsibility and will result in YOUR indemnification of Nexon-AI.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.2 Nexon-AI Responsibilities (Data Processor)</h3>
                <p className="mb-4 text-neutral-200">We are the "data processor" and will: Process data only per your instructions, Implement appropriate security and confidentiality measures, Assist with data subject requests, Notify you of data breaches, Provide a Data Processing Agreement (DPA), Delete or return data upon contract termination.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.3 Separate Data Processing Agreement</h3>
                <p className="mb-4 text-neutral-200">These ToS do not cover all processor obligations. A separate Data Processing Agreement (DPA) governs data processing details. The DPA is incorporated into these ToS by reference and is binding. Request the DPA from contact@nexon-ai.com.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.4 Call Recording & Consent Responsibility</h3>
                <p className="mb-2 text-neutral-200"><strong>CRITICAL</strong>: You are responsible for obtaining caller consent before we record calls. We provide the technical infrastructure only.</p>
                <p className="mb-2 text-neutral-200"><strong>Your Obligations</strong>: Inform callers they will be recorded, Obtain explicit consent (not implied), Provide a means to decline recording and proceed, Maintain evidence of consent, Provide privacy notice.</p>
                <p className="mb-4 text-neutral-200">If you fail to obtain consent: You violate GDPR and call recording laws, You indemnify Nexon-AI, You pay all fines and damages, We may suspend your account. We are NOT liable for your failure to obtain consent.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.5 Third-Party Data & HIPAA</h3>
                <p className="mb-4 text-neutral-200"><strong>Healthcare Data</strong>: Nexon-AI is NOT a HIPAA Business Associate. You must NOT process Protected Health Information (PHI) through Nexon-AI without additional safeguards. <strong>Special Category Data</strong>: UK GDPR Article 9 data requires heightened protection, explicit legal basis, and additional security.</p>
            </section>

            {/* Section 13 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">13. Term & Termination</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.1 Agreement Term</h3>
                <p className="mb-4 text-neutral-200">This agreement continues until you cancel your subscription OR until Nexon-AI terminates your account. There is no minimum term, but your subscription auto-renews unless cancelled.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.2 Cancellation by You (For Convenience)</h3>
                <p className="mb-4 text-neutral-200">You may cancel anytime by account dashboard, email, or written notice. Cancellation takes effect at end of current billing period (no mid-period refunds). Effect: Your account access terminates, data becomes read-only, and you have 30 days to export data.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.3 Termination by Nexon-AI</h3>
                <p className="mb-4 text-neutral-200">We may terminate immediately if: Material Breach (uncured), Immediate Termination (no notice) for AUP violation, fraud, or legal violation, Inactivity (6 months), Legitimate Business Reasons (with 60 days' notice).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.4 Effect of Termination</h3>
                <p className="mb-4 text-neutral-200">Upon termination: Immediate access cessation, Data Retrieval (30 days), Data Deletion (within 30 days), Accrued Fees due, No Refund (unless SLA breach). Survival of key sections.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.5 Survival</h3>
                <p className="mb-4 text-neutral-200">These clauses survive termination: Indemnification, Limitation of Liability, Confidentiality, Intellectual Property, Data Protection, Dispute Resolution.</p>
            </section>

            {/* Section 14 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">14. Dispute Resolution & Governing Law</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">14.1 Informal Resolution (Good Faith)</h3>
                <p className="mb-4 text-neutral-200">Before initiating legal action, the parties will attempt to resolve disputes through good faith negotiation: Escalation to Management (15 days), Mediation (optional, 30 days), Legal Action if unresolved.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">14.2 Governing Law</h3>
                <p className="mb-4 text-neutral-200">This agreement is governed by the laws of England and Wales (UK), WITHOUT regard to conflict-of-law principles. UK GDPR and Data Protection Act 2018 apply to all personal data processing.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">14.3 Jurisdiction & Courts</h3>
                <p className="mb-4 text-neutral-200">Both parties irrevocably submit to the exclusive jurisdiction of the courts of England and Wales. You consent to personal jurisdiction and venue in UK courts and waive objections.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">14.4 Legal Costs</h3>
                <p className="mb-4 text-neutral-200">In any legal dispute: Each party bears their own attorneys' fees unless a court awards fees. The prevailing party may seek recovery of reasonable costs.</p>
            </section>

            {/* Section 15 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">15. General Provisions</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.1 Entire Agreement</h3>
                <p className="mb-4 text-neutral-200">These Terms of Service, along with our Privacy Notice, Data Processing Agreement, and any specific Service Order, constitute the entire agreement between you and Nexon-AI regarding the Service.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.2 Amendment & Modification</h3>
                <p className="mb-4 text-neutral-200">We may amend these terms at any time. Material changes require 30 days' written notice. Non-material changes are effective upon posting. Continued use = acceptance.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.3 Severability</h3>
                <p className="mb-4 text-neutral-200">If any provision is found invalid, it is severed or reformed, and the remaining provisions remain in full force.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.4 Waiver</h3>
                <p className="mb-4 text-neutral-200">Failure to enforce any provision does NOT constitute a waiver. A waiver must be in writing and signed by Nexon-AI.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.5 Assignment</h3>
                <p className="mb-4 text-neutral-200">You may NOT assign these terms without written consent. Nexon-AI may assign to affiliates, acquirers, or successors.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.6 Notices</h3>
                <p className="mb-4 text-neutral-200">All notices must be in writing and delivered by email or postal mail. Effective when received.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.7 Force Majeure</h3>
                <p className="mb-4 text-neutral-200">Neither party is liable for failure to perform due to events beyond reasonable control (war, natural disasters, pandemics, etc.).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.8 Third-Party Beneficiaries</h3>
                <p className="mb-4 text-neutral-200">No third party has any rights or remedies under these terms except where explicitly stated.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.9 Counterparts</h3>
                <p className="mb-4 text-neutral-200">These terms may be executed in multiple counterparts. Electronic signatures are valid.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.10 Interpretation</h3>
                <p className="mb-4 text-neutral-200">Headings are for convenience only. "Including" means "including but not limited to". "Shall" means mandatory obligation.</p>
            </section>

            {/* Section 16 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">16. Contact Us</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">16.1 Customer Support</h3>
                <p className="mb-4 text-neutral-200">Email: support@nexon-ai.com. Response Time: 2-5 business days. Hours: Monday-Friday, 9 AM - 5 PM GMT.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">16.2 Legal Notices</h3>
                <p className="mb-4 text-neutral-200">Email: contact@nexon-ai.com (subject: "LEGAL NOTICE" or "PRIVACY REQUEST"). Postal: Nexon-AI Limited, [Your Registered Address], Hatfield, England, UK.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">16.3 Complaints</h3>
                <p className="mb-4 text-neutral-200">Contact support@nexon-ai.com with full details. We will respond within 10 business days and attempt to resolve within 30 days.</p>
            </section>

            {/* Final Notes */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">Final Notes</h2>
                <p className="mb-4 text-neutral-200">These Terms are binding and enforceable. By using Nexon-AI, you agree to all terms above, including: Limited liability (£1,000 or 12 months of fees), Excluded damages (no indirect/consequential), Your indemnification of Nexon-AI, Your responsibility for compliance (TCPA, PECR, data protection), Exclusive UK jurisdiction.</p>
                <p className="mb-4 text-neutral-200">Read carefully before signing. If you have questions, contact contact@nexon-ai.com before proceeding.</p>
                <p className="text-sm text-neutral-500 mt-8">
                    <strong>Acceptance</strong>: By clicking "I Agree" or using the Service, you accept these Terms of Service in full.
                </p>
                {/* <div className="mt-12 pt-8 border-t border-neutral-800">
                    <img src="/images/logogreen.png" alt="Nexon-AI" className="h-8 opacity-80" />
                </div> */}
            </section>

        </div>
      </div>
    </div>
    </>
  );
}
