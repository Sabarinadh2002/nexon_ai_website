import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-[#050505] text-neutral-300 font-sans selection:bg-orange-500/30 bg-grid">
      <div className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Privacy Notice</h1>
        
        <div className="flex flex-col gap-1 text-neutral-400 mb-12 text-sm border-l-2 border-orange-500 pl-4">
            <p className="font-semibold text-white">Nexon-AI Limited</p>
            <p>Effective Date: January 13, 2026</p>
            <p>Last Updated: January 13, 2026</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Introduction & Scope</h2>
                <p className="mb-4">
                    This Privacy Notice explains how Nexon-AI Limited ("Nexon-AI," "we," "us," "our") collects, uses, discloses, and otherwise processes personal data in connection with our AI voice receptionist and call agent services, website, and related products and services that reference or link to this Privacy Notice.
                </p>
                <p className="mb-4">This Privacy Notice applies to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li>Business customers who subscribe to our AI receptionist platform (the "Service")</li>
                    <li>End-users and callers who interact with our Service through customer businesses</li>
                    <li>Visitors to our website (www.nexon-ai.com)</li>
                </ul>
                <p className="mb-4">
                    <strong className="text-white">Important Scope Exclusions</strong>: This Privacy Notice does not address our privacy practices relating to job applicants, employees, contractors, or other employment-related individuals. This Privacy Notice is not a contract and does not create any legal rights or obligations not otherwise provided by law or our Terms of Service.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">1.1 Our Commitment</h3>
                <p className="mb-4">Nexon-AI is committed to protecting personal data and maintaining compliance with:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li><strong className="text-white">UK General Data Protection Regulation (UK GDPR)</strong> (as amended by the Data Use and Access Act 2025)</li>
                    <li><strong className="text-white">Data Protection Act 2018 (as amended)</strong></li>
                    <li><strong className="text-white">Privacy and Electronic Communications Regulations 2003 (PECR)</strong> (where applicable)</li>
                    <li><strong className="text-white">UK Information Commissioner's Office (ICO)</strong> guidance</li>
                </ul>
                <p>We process personal data transparently, fairly, and lawfully, with appropriate security safeguards throughout the data lifecycle.</p>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. Our Role: Data Controller vs Data Processor</h2>
                <p className="mb-4">Under UK GDPR, organizations are classified as either "data controllers" or "data processors." Understanding our role is critical to understanding your privacy rights.</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.1 Nexon-AI as Data Controller</h3>
                <p className="mb-4">Nexon-AI acts as a <strong className="text-white">data controller</strong> (meaning we determine the purposes and means of processing) for personal data we collect for our own business purposes, including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li><strong>Website Analytics & Performance</strong>: How visitors use our website</li>
                    <li><strong>Customer Account Management</strong>: Email addresses, phone numbers, billing details</li>
                    <li><strong>Marketing Communications</strong>: Contact information for campaigns</li>
                    <li><strong>Business Operations</strong>: Processing payments, support inquiries</li>
                    <li><strong>Service Improvement</strong>: Analyzing usage patterns</li>
                    <li><strong>Security & Fraud Prevention</strong>: Protecting our platform</li>
                </ul>
                <p className="mb-4"><strong className="text-white">Your Privacy Rights</strong>: For data we control, you have full rights under UK GDPR. See Section 7 for detailed rights.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.2 Nexon-AI as Data Processor</h3>
                <p className="mb-4">Nexon-AI acts as a <strong className="text-white">data processor</strong> (meaning we process data on your behalf, following your instructions) when you use our Service to handle personal data belonging to your own customers and callers. This data includes caller personal data, call recordings, transcripts, and appointment details.</p>
                <p className="mb-4"><strong className="text-white">Your Data Controller Responsibilities</strong>: When using Nexon-AI as a processor, <strong className="text-white">you</strong> are the data controller and remain responsible for determining lawful basis, providing privacy notices, and obtaining necessary consents (especially for call recording).</p>
                <p className="mb-4"><strong className="text-white">Important</strong>: This Privacy Notice does NOT cover how we process personal data on your behalf as a processor. Please refer to our separate <strong>Data Processing Agreement (DPA)</strong>.</p>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. How We Collect Personal Data</h2>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.1 Data You Provide Directly</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li><strong>Account Registration</strong>: Name, email, phone, company details.</li>
                    <li><strong>Contact Forms</strong>: Inquiries via website or chat.</li>
                    <li><strong>Customer Support</strong>: Tickets, emails, and call recordings with support.</li>
                    <li><strong>Service Configuration</strong>: AI agent prompts, custom instructions, integrations.</li>
                    <li><strong>Billing Information</strong>: Invoice details and payment history.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.2 Data Automatically Collected</h3>
                <p className="mb-4">We collect device information, website usage data, and call service usage metrics automatically using cookies and similar technologies.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.3 Data from Other Sources</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li><strong>From Your Customers & Callers</strong>: Personal data shared through AI agents.</li>
                    <li><strong>From Third-Party Service Providers</strong>: Analytics, marketing, payment processors.</li>
                    <li><strong>From Public Sources</strong>: Publicly available company info.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.4 Payment Information</h3>
                <p className="mb-4">Nexon-AI does NOT directly collect or store your full payment card details. All payment processing is handled securely by <strong className="text-white">Stripe</strong>. We only store a confirmation token and the last four digits of your card.</p>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Our Lawful Bases for Processing</h2>
                <p className="mb-4">We process your data based on:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li><strong>Contract Performance</strong>: To provide the Service, manage accounts, and billing.</li>
                    <li><strong>Legitimate Interest</strong>: For service improvement, marketing, security, and analytics.</li>
                    <li><strong>Consent</strong>: For marketing communications and optional tracking.</li>
                    <li><strong>Legal Obligation</strong>: For tax records and legal compliance.</li>
                    <li><strong>Vital Interests</strong>: In rare emergencies.</li>
                </ul>
            </section>

            {/* Section 5 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Categories of Personal Data We Collect</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">Contact & Account</h4>
                        <p className="text-xs text-neutral-400">Name, email, phone, job title, login credentials, subscription tier.</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">Professional & Financial</h4>
                        <p className="text-xs text-neutral-400">Company details, industry, billing address, payment history.</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">Service Usage</h4>
                        <p className="text-xs text-neutral-400">AI prompts, routing rules, integrations, call metadata.</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">Call Data (Processor)</h4>
                        <p className="text-xs text-neutral-400">Caller details, recordings, transcripts (processed on your behalf).</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">Website & Behavioral</h4>
                        <p className="text-xs text-neutral-400">IP address, device type, cookies, page visits.</p>
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Special Category Data & Call Recording</h2>
                <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-xl mb-6">
                    <h3 className="text-lg font-bold text-orange-400 mb-2">Important: Call Recording Consent is YOUR Responsibility</h3>
                    <p className="mb-4">Nexon-AI provides the infrastructure, but <strong className="text-white">YOU</strong> (the customer) are responsible for ensuring lawful basis for recording calls. You must:</p>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-300">
                        <li>Display a clear privacy notice.</li>
                        <li>Obtain necessary consent from callers (e.g., "This call may be recorded...").</li>
                        <li>Comply with UK GDPR and call recording laws.</li>
                    </ul>
                </div>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.2 Special Category Data & Biometric Data</h3>
                <p className="mb-4"><strong>Voice Data</strong>: Voice recordings are personal data. They may contain special category data (health, etc.) if revealed by the caller. You should implement appropriate safeguards if handling sensitive information.</p>
            </section>

            {/* Section 7 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">7. Your Data Protection Rights</h2>
                <p className="mb-4">Under UK GDPR, you have the following rights over personal data we control:</p>
                <ul className="space-y-3 text-neutral-400">
                    <li><strong className="text-white">Right of Access</strong>: Request a copy of your data.</li>
                    <li><strong className="text-white">Right to Rectification</strong>: Correct inaccurate data.</li>
                    <li><strong className="text-white">Right to Erasure</strong>: Request deletion ("Right to be Forgotten").</li>
                    <li><strong className="text-white">Right to Restrict Processing</strong>: Limit how we use your data.</li>
                    <li><strong className="text-white">Right to Data Portability</strong>: Get your data in a portable format.</li>
                    <li><strong className="text-white">Right to Object</strong>: Object to processing or marketing.</li>
                    <li><strong className="text-white">Right to Withdraw Consent</strong>: Withdraw consent at any time.</li>
                    <li><strong className="text-white">Rights Related to Automated Decision-Making</strong>: Request human review.</li>
                </ul>
                <p className="mt-4 text-sm bg-neutral-900 p-3 rounded border border-neutral-800">
                    To exercise these rights, email <a href="mailto:contact@nexon-ai.com" className="text-orange-500 hover:underline">contact@nexon-ai.com</a> with the subject line "Data Subject Access Request".
                </p>
            </section>

            {/* Section 8 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">8. Our Use of Personal Data</h2>
                <p className="mb-4">We use data for service delivery, account management, security, fraud prevention, marketing (with consent), and business operations.</p>
                <p className="mb-4"><strong>Automated Decision-Making</strong>: We use automated systems for fraud detection and call routing. We do not use profiling for discrimination.</p>
            </section>

            {/* Section 9 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">9. Who We Share Personal Data With</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.1 Sub-Processors</h3>
                <p className="mb-4">We engage the following sub-processors to provide the Service:</p>
                
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Sub-Processor</th>
                                <th className="p-3 border-b border-neutral-800">Purpose</th>
                                <th className="p-3 border-b border-neutral-800">Data Categories</th>
                                <th className="p-3 border-b border-neutral-800">Location</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            <tr><td className="p-3">OpenAI</td><td className="p-3">AI response generation</td><td className="p-3">Call content</td><td className="p-3">USA</td></tr>
                            <tr><td className="p-3">Deepgram</td><td className="p-3">Speech-to-text</td><td className="p-3">Audio/Voice</td><td className="p-3">USA</td></tr>
                            <tr><td className="p-3">Neon PostgreSQL</td><td className="p-3">Database storage</td><td className="p-3">All personal data</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">Supabase</td><td className="p-3">Real-time API & Auth</td><td className="p-3">Account data</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">AWS</td><td className="p-3">Cloud infrastructure</td><td className="p-3">All data</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">Stripe</td><td className="p-3">Payment processing</td><td className="p-3">Payment data</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">Twilio</td><td className="p-3">Telephony</td><td className="p-3">Phone numbers</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">Google Analytics</td><td className="p-3">Analytics</td><td className="p-3">Usage data</td><td className="p-3">USA</td></tr>
                            <tr><td className="p-3">Hotjar</td><td className="p-3">Heatmaps</td><td className="p-3">Interaction</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">HubSpot</td><td className="p-3">CRM</td><td className="p-3">Contact info</td><td className="p-3">USA/EU</td></tr>
                            <tr><td className="p-3">Mailchimp</td><td className="p-3">Email marketing</td><td className="p-3">Email address</td><td className="p-3">USA</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-neutral-500">Note: You have the right to object to sub-processor changes within 30 days of notice.</p>
            </section>

            {/* Section 10 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">10. Data Retention & Deletion</h2>
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Data Category</th>
                                <th className="p-3 border-b border-neutral-800">Retention Period</th>
                                <th className="p-3 border-b border-neutral-800">Reason</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            <tr><td className="p-3">Account Information</td><td className="p-3">Contract + 6 years</td><td className="p-3">Legal/Tax</td></tr>
                            <tr><td className="p-3">Payment Records</td><td className="p-3">6 years</td><td className="p-3">Tax compliance</td></tr>
                            <tr><td className="p-3">Call Recordings</td><td className="p-3">12 months</td><td className="p-3">Quality/Compliance</td></tr>
                            <tr><td className="p-3">Call Transcripts</td><td className="p-3">12 months</td><td className="p-3">Reference</td></tr>
                            <tr><td className="p-3">Customer Support</td><td className="p-3">3 years</td><td className="p-3">Service improvement</td></tr>
                            <tr><td className="p-3">Website Analytics</td><td className="p-3">26 months</td><td className="p-3">Analytics</td></tr>
                            <tr><td className="p-3">Deleted Data</td><td className="p-3">90 days post-deletion</td><td className="p-3">Backup purging</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-4"><strong>Contract Termination</strong>: Upon termination, you have 30 days to retrieve data before it is deleted.</p>
            </section>

            {/* Section 11 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">11. International Data Transfers</h2>
                <p className="mb-4">When we transfer data to the USA (e.g., to OpenAI), we rely on <strong>Standard Contractual Clauses (SCCs)</strong> and ensure sub-processors maintain appropriate security measures. You can request EU-only processing for certain features.</p>
            </section>

            {/* Section 12 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">12. Security Measures</h2>
                <p className="mb-4">We implement robust security including:</p>
                <ul className="grid md:grid-cols-2 gap-4 text-neutral-400">
                    <li className="bg-neutral-900/30 p-3 rounded border border-neutral-800"><strong>Encryption</strong>: AES-256 for data at rest, TLS 1.2+ for transit.</li>
                    <li className="bg-neutral-900/30 p-3 rounded border border-neutral-800"><strong>Access Control</strong>: MFA, Role-Based Access, Least Privilege.</li>
                    <li className="bg-neutral-900/30 p-3 rounded border border-neutral-800"><strong>Monitoring</strong>: 24/7 SOC, Intrusion Detection.</li>
                    <li className="bg-neutral-900/30 p-3 rounded border border-neutral-800"><strong>Backups</strong>: Encrypted daily backups with disaster recovery.</li>
                </ul>
            </section>

            {/* Section 13 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">13. Cookies & Tracking</h2>
                <p className="mb-4">We use cookies for essential functionality, analytics, and marketing. You can manage your preferences via our website or browser settings.</p>
                
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-400">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Cookie Type</th>
                                <th className="p-3 border-b border-neutral-800">Purpose</th>
                                <th className="p-3 border-b border-neutral-800">Consent Required?</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800">
                            <tr><td className="p-3">Session</td><td className="p-3">Maintain login state</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Authentication</td><td className="p-3">Keep logged in</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Preference</td><td className="p-3">Settings</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Analytics</td><td className="p-3">Track usage</td><td className="p-3">No (under DUAA 2025)</td></tr>
                            <tr><td className="p-3">Marketing</td><td className="p-3">Retargeting</td><td className="p-3">Yes</td></tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {/* Section 14 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">14. Children's Privacy</h2>
                <p className="mb-4">Our Service is intended for business users and is NOT directed at children under 18. We do not knowingly collect personal data from children.</p>
            </section>

            {/* Section 15 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">15. Your Privacy Choices</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400">
                    <li><strong>Marketing</strong>: Unsubscribe via email link or dashboard.</li>
                    <li><strong>Cookies</strong>: Manage via banner or browser settings.</li>
                    <li><strong>Do Not Track</strong>: We honor DNT signals for non-essential tracking.</li>
                </ul>
            </section>

            {/* Section 16 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">16. Third-Party Websites</h2>
                <p className="mb-4">Our website may contain links to third-party sites. This Privacy Notice applies only to Nexon-AI. We are not responsible for third-party privacy practices.</p>
            </section>

            {/* Section 17 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">17. Data Breach Notification</h2>
                <p className="mb-4">In the event of a data breach, we will notify affected customers within <strong>24 hours</strong> of discovery. We will assist you with your regulatory and data subject notification obligations.</p>
            </section>

            {/* Section 18 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">18. Legal Basis & Regulatory Compliance</h2>
                <p className="mb-4">We comply with UK GDPR, Data Protection Act 2018, PECR, and ICO guidance. You have the right to file a complaint with the UK Information Commissioner's Office (ICO).</p>
            </section>

            {/* Section 19 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">19. Amendments</h2>
                <p className="mb-4">We may update this notice. Material changes will be notified via email with 30 days' notice.</p>
            </section>

            {/* Section 20 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">20. Contact Us</h2>
                <p className="mb-4">For privacy inquiries or to exercise your rights:</p>
                <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800">
                    <p className="text-white font-bold mb-1">Nexon-AI Limited</p>
                    <p className="text-neutral-400 mb-4">Hatfield, England, United Kingdom</p>
                    <p className="text-neutral-400">Email: <a href="mailto:contact@nexon-ai.com" className="text-orange-500 hover:underline">contact@nexon-ai.com</a></p>
                </div>
            </section>

            {/* Section 21 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">21. Glossary</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-400 text-sm">
                    <li><strong>Data Controller</strong>: Organization determining purpose of processing.</li>
                    <li><strong>Data Processor</strong>: Organization processing on behalf of controller.</li>
                    <li><strong>Personal Data</strong>: Info relating to an identified individual.</li>
                    <li><strong>Special Category Data</strong>: Sensitive data (health, biometric, etc.).</li>
                </ul>
            </section>

            {/* Section 22 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">22. Final Note</h2>
                <p className="mb-4">We are committed to your privacy. If you have questions, please contact us.</p>
                <p className="text-sm text-neutral-500 mt-8">
                    <strong>Nexon-AI Limited</strong><br/>
                    Effective Date: January 13, 2026<br/>
                    Last Updated: January 13, 2026
                </p>
            </section>

        </div>
      </div>
    </div>
    </>
  );
}
