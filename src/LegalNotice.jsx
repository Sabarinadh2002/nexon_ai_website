import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function LegalNotice() {
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
          className="flex items-center gap-2 text-neutral-200 hover:text-white transition-colors mb-8 group cursor-pointer"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Privacy Notice</h1>
        
        <div className="flex flex-col gap-1 text-neutral-200 mb-12 text-sm border-l-2 border-orange-500 pl-4">
            <p className="font-semibold text-white">Nexon-AI Limited</p>
            <p>Effective Date: January 13, 2026</p>
            <p>Last Updated: January 13, 2026</p>
        </div>

        <div className="space-y-12 text-sm md:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">1. Introduction & Scope</h2>
                <p className="mb-4 text-neutral-200">
                    This Privacy Notice explains how Nexon-AI Limited ("Nexon-AI," "we," "us," "our") collects, uses, discloses, and otherwise processes personal data in connection with our AI voice receptionist and call agent services, website, and related products and services that reference or link to this Privacy Notice.
                </p>
                <p className="mb-4">This Privacy Notice applies to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Business customers who subscribe to our AI receptionist platform (the "Service")</li>
                    <li>End-users and callers who interact with our Service through customer businesses</li>
                    <li>Visitors to our website (www.nexon-ai.com)</li>
                </ul>
                <p className="mb-4 text-neutral-200">
                    <strong className="text-white">Important Scope Exclusions</strong>: This Privacy Notice does not address our privacy practices relating to job applicants, employees, contractors, or other employment-related individuals. This Privacy Notice is not a contract and does not create any legal rights or obligations not otherwise provided by law or our Terms of Service.
                </p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">1.1 Our Commitment</h3>
                <p className="mb-4">Nexon-AI is committed to protecting personal data and maintaining compliance with:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong className="text-white">UK General Data Protection Regulation (UK GDPR)</strong> (as amended by the Data Use and Access Act 2025)</li>
                    <li><strong className="text-white">Data Protection Act 2018 (as amended)</strong></li>
                    <li><strong className="text-white">Privacy and Electronic Communications Regulations 2003 (PECR)</strong> (where applicable)</li>
                    <li><strong className="text-white">UK Information Commissioner's Office (ICO)</strong> guidance</li>
                </ul>
                <p className="text-neutral-200">We process personal data transparently, fairly, and lawfully, with appropriate security safeguards throughout the data lifecycle.</p>
            </section>

            {/* Section 2 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">2. Our Role: Data Controller vs Data Processor</h2>
                <p className="mb-4 text-neutral-200">Under UK GDPR, organizations are classified as either "data controllers" or "data processors." Understanding our role is critical to understanding your privacy rights.</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.1 Nexon-AI as Data Controller</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI acts as a <strong className="text-white">data controller</strong> (meaning we determine the purposes and means of processing) for personal data we collect for our own business purposes, including:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Website Analytics & Performance</strong>: How visitors use our website (IP addresses, pages visited, time on site, device types)</li>
                    <li><strong>Customer Account Management</strong>: Email addresses, phone numbers, company names, billing addresses, account credentials</li>
                    <li><strong>Marketing Communications</strong>: Contact information for email campaigns, webinars, product updates, promotional content</li>
                    <li><strong>Business Operations</strong>: Processing payments, customer support inquiries, contracts, regulatory compliance</li>
                    <li><strong>Service Improvement</strong>: Analyzing usage patterns, identifying technical issues, improving product features</li>
                    <li><strong>Security & Fraud Prevention</strong>: Detecting unauthorized access, investigating malicious activity, protecting our platform</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong className="text-white">Your Privacy Rights</strong>: For data we control, you have full rights under UK GDPR. See Section 7 for detailed rights.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.2 Nexon-AI as Data Processor</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI acts as a <strong className="text-white">data processor</strong> (meaning we process data on your behalf, following your instructions) when you use our Service to handle personal data belonging to your own customers and callers. This data includes:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Caller personal data</strong>: Names, phone numbers, email addresses provided during calls</li>
                    <li><strong>Call recordings & transcripts</strong>: Audio and text of conversations with your customers</li>
                    <li><strong>Appointment & booking details</strong>: Dates, times, service preferences, notes captured by AI agents</li>
                    <li><strong>Customer inquiries</strong>: Questions, feedback, complaints captured through our Service</li>
                    <li><strong>Call metadata</strong>: Call duration, timestamp, outcome, disposition codes</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong className="text-white">Your Data Controller Responsibilities</strong>: When using Nexon-AI as a processor, <strong className="text-white">you</strong> are the data controller and remain responsible for:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Determining the lawful basis for processing (consent, contract, legal obligation, legitimate interest, etc.)</li>
                    <li>Providing privacy notices to your customers</li>
                    <li>Obtaining necessary consents from callers (especially for call recording)</li>
                    <li>Handling data subject access requests (SARs) and deletion requests</li>
                    <li>Ensuring compliance with UK GDPR and call recording laws</li>
                    <li>Implementing security measures within your organization</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong className="text-white">Our Processor Obligations</strong>: Nexon-AI will:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Process personal data only on your documented instructions</li>
                    <li>Implement appropriate technical and organizational security measures</li>
                    <li>Ensure all personnel handling your data are bound by confidentiality</li>
                    <li>Assist you with data subject requests (SARs, deletion, portability) within 10 business days</li>
                    <li>Notify you of any data breaches affecting your data within 24 hours of discovery</li>
                    <li>Delete or return your data upon contract termination (unless legally required to retain)</li>
                    <li>Provide you with evidence of compliance upon request</li>
                    <li>Not use your data for our own purposes without explicit written consent</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong className="text-white">Important</strong>: This Privacy Notice does NOT cover how we process personal data on your behalf as a processor. Please refer to our separate <strong>Data Processing Agreement (DPA)</strong>.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">2.3 Our Data Processing Agreement (DPA)</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI provides a comprehensive <strong>Data Processing Agreement</strong> that outlines:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Detailed processor obligations under Article 28 UK GDPR</li>
                    <li>Sub-processor management and authorization procedures</li>
                    <li>Data subject rights assistance protocols</li>
                    <li>Security and confidentiality commitments</li>
                    <li>International transfer mechanisms (Standard Contractual Clauses where applicable)</li>
                    <li>Data breach notification procedures</li>
                    <li>Liability and indemnification</li>
                    <li>Audit rights and compliance verification</li>
                </ul>
                <p className="text-neutral-200">The DPA is binding on both parties and is incorporated into our Terms of Service by reference. It is available to all customers and can be requested by emailing contact@nexon-ai.com.</p>
            </section>

            {/* Section 3 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">3. How We Collect Personal Data</h2>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.1 Data You Provide Directly</h3>
                
                <h4 className="text-white font-semibold mt-4 mb-2">Account Registration & Signup</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>First and last name, email address, phone number, company name, job title, industry type</li>
                    <li>Business location, website URL, account preferences</li>
                    <li>Payment information (credit card details processed securely by Stripe, see Section 3.4)</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Contact Forms & Inquiries</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Name, email, phone number, message content when you contact us via our website, email, or chat</li>
                    <li>Details about your inquiry, requirements, or feedback</li>
                    <li>Preferred contact method and communication preferences</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Customer Support & Technical Assistance</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Contents of support tickets, chat conversations, or email exchanges with our support team</li>
                    <li>Call recordings or transcripts (where permitted by law) of calls with support staff</li>
                    <li>Documentation of technical issues, configuration details, integration specifics</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Service Configuration & Customization</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>AI agent prompts and custom instructions you create</li>
                    <li>Business phone numbers and call routing preferences</li>
                    <li>Integration credentials (API keys, third-party account links)</li>
                    <li>Booking calendar synchronizations, CRM mappings, business hours</li>
                    <li>Custom data fields and processing rules you configure</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Feedback, Testimonials & Surveys</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Responses to surveys, feedback forms, product ratings, testimonials</li>
                    <li>Beta testing feedback, feature requests, usage insights</li>
                    <li>Case studies or success stories (with your explicit consent)</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Contract & Billing Information</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Billing address, invoice email, payment methods</li>
                    <li>Purchase history, subscription tier, usage metrics</li>
                    <li>Contract terms, renewal dates, amendment requests</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.2 Data Automatically Collected</h3>
                <p className="mb-4 text-neutral-200">We and our third-party service providers automatically collect information when you use our website or Service:</p>

                <h4 className="text-white font-semibold mt-4 mb-2">Device & Network Information</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Device type, manufacturer, model, operating system</li>
                    <li>IP address, browser type, Internet Service Provider</li>
                    <li>Mobile identifier (IDFA, Google Advertising ID if applicable)</li>
                    <li>Unique device identifiers or persistent cookies</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Website Usage & Interaction Data</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Pages visited, time spent on each page, scroll depth</li>
                    <li>Links clicked, buttons pressed, forms completed</li>
                    <li>Search queries, navigation patterns</li>
                    <li>Email opens (if you receive our marketing emails), link clicks</li>
                    <li>Content viewed, videos watched, downloads accessed</li>
                    <li>Referral source (where you came from), exit pages</li>
                    <li>Device settings, location (derived from IP address)</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Call & Service Usage Data</h4>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Login times, session duration, frequency of access</li>
                    <li>Features used, settings modified, integrations accessed</li>
                    <li>Call volumes, call outcomes, routing choices</li>
                    <li>API calls made, data imported/exported</li>
                    <li>Error logs, technical issues encountered</li>
                </ul>

                <h4 className="text-white font-semibold mt-4 mb-2">Behavioral Tracking Technologies</h4>
                <p className="mb-2 text-neutral-200">We use automated data collection technologies including:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Cookies</strong>: Small data files stored on your device (session cookies for functionality, persistent cookies for preferences)</li>
                    <li><strong>Web Beacons & Pixels</strong>: Tiny images embedded in emails or pages that track email opens and page views</li>
                    <li><strong>Local Storage & IndexedDB</strong>: Browser data storage for website preferences and session data</li>
                    <li><strong>Analytics Scripts</strong>: JavaScript that tracks user behavior on our website</li>
                    <li><strong>Mobile SDKs</strong>: Software that collects data from mobile applications</li>
                    <li><strong>Log Files</strong>: Server logs recording access, errors, and activity timestamps</li>
                </ul>

                <p className="mb-4 text-neutral-200"><strong>Purpose of Automatic Collection</strong>: We use automatically collected data to provide and optimize the Service, improve user experience, enhance platform performance, conduct analytics, provide personalized features, monitor security, diagnose technical problems, understand market trends, improve marketing effectiveness, and comply with legal obligations.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.3 Data from Other Sources</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>From Your Customers & Callers</strong>: Personal data your customers share with us through the AI agents, Information about interactions between your customers' customers and our Service</li>
                    <li><strong>From Your Employer or Business Partners</strong>: Contact information if your organization contracts with us, Referral information if referred by a business partner, Company data if integrated with HR systems or CRM platforms</li>
                    <li><strong>From Third-Party Service Providers</strong>: Analytics providers (Google Analytics, Mixpanel, Hotjar), Marketing platforms (HubSpot, Mailchimp) - email engagement data, Payment processors (Stripe) - transaction and billing information, Single Sign-On providers (Google, Microsoft, GitHub) - authentication tokens, Survey and feedback platforms (Typeform, SurveyMonkey)</li>
                    <li><strong>From Public Sources</strong>: Publicly available company information for due diligence, Industry databases or business directories, Public social media profiles (for business intelligence purposes)</li>
                    <li><strong>From Business Partners & Integrations</strong>: Information shared by partners recommending our Service, Usage data from third-party platforms you integrate with us, Customer success data from implementation partners</li>
                    <li><strong>Inferences & Predictions</strong>: Inferences about your business type, company size, industry focus, Predictions about your interest in specific features or products, Behavioral patterns and usage propensities</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">3.4 Payment Information</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI does NOT directly collect or store your full payment card details. All payment processing is handled securely by <strong className="text-white">Stripe</strong> (www.stripe.com), our third-party payment processor.</p>
                <p className="mb-4 text-neutral-200"><strong>When you provide payment information:</strong></p>
                <ol className="list-decimal pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>You submit card details directly to Stripe's secure payment gateway</li>
                    <li>Stripe processes the payment and sends us only a confirmation token</li>
                    <li>We store only the token and the last four digits of your card</li>
                    <li>Your complete card number, expiration date, and CVC are NEVER stored on Nexon-AI servers</li>
                </ol>
                <p className="mb-4 text-neutral-200"><strong>Stripe's Privacy</strong>: Stripe's collection and use of your payment data is governed by <a href="https://stripe.com/privacy" className="text-orange-500 hover:underline">Stripe's Privacy Policy</a>. We recommend reviewing Stripe's privacy policy to understand their data practices.</p>
                <p className="mb-4 text-neutral-200"><strong>Billing Information We Retain</strong>: We do store your billing address, email, name, and invoice history for accounting and tax purposes.</p>
            </section>

            {/* Section 4 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">4. Our Lawful Bases for Processing</h2>
                <p className="mb-4 text-neutral-200">Under UK GDPR, we must have a "lawful basis" for processing personal data. We process your data based on one or more of the following lawful bases:</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.1 Lawful Basis 1: Contract Performance (Article 6(1)(b))</h3>
                <p className="mb-2 text-neutral-200">We process personal data necessary to:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Provide and deliver the Service to you</li>
                    <li>Set up and maintain your account</li>
                    <li>Process payments and billing</li>
                    <li>Provide customer support and technical assistance</li>
                    <li>Configure and customize your AI agents per your instructions</li>
                    <li>Handle contracts, amendments, and renewals</li>
                </ul>
                <p className="mb-4 text-neutral-200">Example: Processing your name and email to create your account, or storing your business phone number to route calls.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.2 Lawful Basis 2: Legitimate Interest (Article 6(1)(f))</h3>
                <p className="mb-2 text-neutral-200">We process personal data where we have a legitimate business interest that does not override your fundamental rights:</p>
                <p className="mb-2 text-neutral-200"><strong>Our Legitimate Interests:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Service Improvement</strong>: Analyzing usage patterns to enhance features, fix bugs, improve performance</li>
                    <li><strong>Marketing & Sales</strong>: Understanding customer needs, promoting our services, communicating product updates</li>
                    <li><strong>Fraud Prevention & Security</strong>: Detecting and preventing unauthorized access, investigating suspicious activity</li>
                    <li><strong>Business Operations</strong>: Financial management, legal compliance, record-keeping, internal reporting</li>
                    <li><strong>Analytics & Research</strong>: Understanding market trends, business intelligence, competitive analysis</li>
                </ul>
                <p className="mb-2 text-neutral-200"><strong>Balancing Test</strong>: We assess that our legitimate interests do not override your rights and freedoms. We implement safeguards such as:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Minimizing data collected to what's necessary</li>
                    <li>Providing transparency about our use</li>
                    <li>Allowing you to opt-out of non-essential processing (e.g., marketing)</li>
                    <li>Implementing strong security measures</li>
                    <li>Deleting data when it's no longer needed</li>
                </ul>
                <p className="mb-4 text-neutral-200">Example: Using analytics to understand which features are most popular, or segmenting customers for targeted product announcements.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.3 Lawful Basis 3: Consent (Article 6(1)(a))</h3>
                <p className="mb-2 text-neutral-200">We process some personal data only with your explicit, freely given consent:</p>
                <p className="mb-2 text-neutral-200"><strong>Where We Collect Consent:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Marketing communications and promotional emails (you can opt-out anytime)</li>
                    <li>Testimonials, case studies, and public references to your company</li>
                    <li>Tracking technologies beyond what's necessary for Service delivery</li>
                    <li>Any purpose you explicitly authorize that goes beyond our stated uses</li>
                </ul>
                <p className="mb-2 text-neutral-200"><strong>How Consent is Managed:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>You can withdraw consent at any time by emailing contact@nexon-ai.com</li>
                    <li>Withdrawal does not affect the lawfulness of processing before withdrawal</li>
                    <li>Consent is recorded and timestamped in our systems</li>
                    <li>You can update your communication preferences in your account dashboard</li>
                </ul>
                <p className="mb-4 text-neutral-200">Example: Signing up to receive our weekly product updates email, or agreeing to be featured in a customer case study.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.4 Lawful Basis 4: Legal Obligation (Article 6(1)(c))</h3>
                <p className="mb-2 text-neutral-200">We process personal data when required by law:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Tax and accounting records (Companies House, HMRC requirements)</li>
                    <li>Response to legal proceedings, court orders, or government requests</li>
                    <li>Law enforcement cooperation or fraud investigation</li>
                    <li>Anti-money laundering (AML) and Know Your Customer (KYC) requirements</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">4.5 Lawful Basis 5: Vital Interests (Article 6(1)(d))</h3>
                <p className="mb-4 text-neutral-200">In rare circumstances, we may process personal data to protect vital interests: Life-threatening emergencies or serious harm, Public health or safety emergencies (e.g., reporting malicious activity).</p>
            </section>

            {/* Section 5 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">5. Categories of Personal Data We Collect</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.1 Contact Information</h4>
                        <p className="text-xs text-neutral-200">First and last name, Email address (personal and business), Phone number (personal and business), Office address and postal code, Job title and department, Communication preferences.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Account administration, customer support, billing, marketing communications</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.2 Account & Subscription</h4>
                        <p className="text-xs text-neutral-200">Email address used for login, Account username and password (encrypted), Account status (active, suspended, cancelled), Subscription tier and pricing plan, Billing cycle and renewal dates, Usage metrics and call volumes, Service configuration and preferences, API keys and integration credentials.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Service delivery, access control, usage tracking, billing, security</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.3 Payment & Financial</h4>
                        <p className="text-xs text-neutral-200">Billing address and billing contact, Payment method (last 4 digits of card only, full details with Stripe), Invoice history and payment records, Tax identification number (VAT, business registration).</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Billing, accounting, tax compliance, fraud prevention</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.4 Professional Information</h4>
                        <p className="text-xs text-neutral-200">Company name and industry type, Company size (number of employees), Company location and website, Professional background and expertise, Business objectives and use case for the Service.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Service customization, market research, product development, sales</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.5 Service Usage & Config</h4>
                        <p className="text-xs text-neutral-200">AI agent prompts, instructions, and custom rules, Phone numbers used for receiving and routing calls, Booking integrations and calendar connections, CRM and third-party platform integrations, Custom fields and data mappings, Call handling preferences and routing logic, Business hours and availability settings.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Service delivery, performance optimization, troubleshooting, analytics</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.6 Call & Interaction Data (Processed as Processor)</h4>
                        <p className="text-xs text-neutral-200">Caller names, phone numbers, email addresses, Call recordings (audio files, typically 12-month retention), Call transcripts (text versions of conversations), Appointment details (date, time, service type, notes), Customer inquiries and questions, Call metadata (duration, timestamp, outcome, disposition), Sentiment analysis and call quality metrics.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: As instructed by you (controller), typically for quality assurance, training, compliance, record-keeping</p>
                        <p className="text-xs text-orange-400 mt-1">Your Responsibility: You are responsible for ensuring lawful basis and caller consent (see Section 6.1 on Call Recording Consent).</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.7 Website & Behavioral Data</h4>
                        <p className="text-xs text-neutral-200">IP address and geolocation (derived from IP), Device type, OS, browser, browser version, Cookies and tracking identifiers, Pages visited, time spent, scroll depth, Links clicked and buttons pressed, Search queries and form entries, Referral source and navigation path, Email open rates and link clicks.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Website analytics, user experience improvement, marketing effectiveness</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.8 Communication & Support Data</h4>
                        <p className="text-xs text-neutral-200">Contents of support tickets, emails, and chat messages, Technical documentation and error reports, Feedback forms and survey responses, Screenshots and files uploaded for support, Call recordings with support team (where permitted), Issue resolution history.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Technical support, service improvement, quality assurance</p>
                    </div>
                    <div className="bg-neutral-900/50 p-4 rounded-lg border border-neutral-800">
                        <h4 className="text-white font-semibold mb-2">5.9 Inferred & Derived Data</h4>
                        <p className="text-xs text-neutral-200">Business classifications and industry segments, Usage propensities and feature preferences, Predicted customer lifecycle stage, Risk scores and compliance flags, Aggregated and anonymized insights.</p>
                        <p className="text-xs text-neutral-500 mt-2">Our Use: Product development, personalization, analytics, security</p>
                    </div>
                </div>
            </section>

            {/* Section 6 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">6. Special Category Data & Call Recording</h2>
                <div className="bg-orange-900/20 border border-orange-500/30 p-6 rounded-xl mb-6">
                    <h3 className="text-lg font-bold text-orange-400 mb-2">6.1 Important: Call Recording Consent is YOUR Responsibility</h3>
                    <p className="mb-4 text-neutral-200">This is critical: Nexon-AI provides the technical infrastructure for call recording, but <strong className="text-white">YOU</strong> (the customer/controller) are responsible for ensuring:</p>
                    
                    <h4 className="text-white font-semibold mt-4 mb-2">Legal Basis for Recording</h4>
                    <p className="mb-2 text-neutral-200">You must have one of the following lawful bases BEFORE recording any calls:</p>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-200 mb-4">
                        <li><strong>Explicit Consent (Most Common)</strong>: Caller must consent after being informed of the recording and its purpose. Implied consent (silence, continuing the call) is NOT sufficient under UK GDPR. Best Practice: "This call may be recorded for training and quality purposes. Press 1 to continue, Press 2 to decline."</li>
                        <li><strong>Legitimate Interest</strong>: Recording is necessary for your legitimate business interests. Your interests do not override caller's fundamental rights. Must be transparent and fair. Example: Recording for quality assurance and training.</li>
                        <li><strong>Legal Obligation</strong>: Recording required by law or regulation. Example: Financial services recording requirements.</li>
                        <li><strong>Contract Performance</strong>: Recording is necessary to fulfill a contract with the caller. Example: Recording for dispute resolution.</li>
                        <li><strong>Vital Interest Protection</strong>: Recording necessary to protect someone's vital interests (rare). Example: Emergency services recording.</li>
                    </ul>

                    <h4 className="text-white font-semibold mt-4 mb-2">What YOU Must Do</h4>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-200 mb-4">
                        <li>Display a clear privacy notice before calls are recorded.</li>
                        <li>Provide an easy way for callers to: Consent to recording, Decline recording and proceed call, Request a copy of their recording later.</li>
                        <li>Maintain evidence of consent (call logs showing consent captured).</li>
                        <li>Respond to data subject access requests (SARs) for their call recording.</li>
                        <li>Delete recordings upon request (within 1 month under GDPR).</li>
                        <li>Inform the UK Information Commissioner's Office (ICO) if required by incident response procedures.</li>
                    </ul>

                    <h4 className="text-white font-semibold mt-4 mb-2">What Nexon-AI Does NOT Do</h4>
                    <ul className="list-disc pl-5 space-y-1 text-neutral-200 mb-4">
                        <li>Nexon-AI does NOT obtain consent on your behalf.</li>
                        <li>Nexon-AI does NOT verify your lawful basis.</li>
                        <li>Nexon-AI does NOT handle caller complaints or SARs directly (you must handle these).</li>
                        <li>Nexon-AI does NOT provide privacy notices to your callers.</li>
                        <li>You are solely responsible for compliance with call recording laws.</li>
                    </ul>
                    <p className="text-neutral-200"><strong>Nexon-AI's Liability</strong>: By using our Service, you warrant that you have obtained all necessary consents and complied with all call recording laws. You indemnify (hold harmless) Nexon-AI from any claims, fines, or damages arising from your failure to obtain consent or comply with call recording regulations.</p>
                </div>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.2 Special Category Data & Biometric Data</h3>
                <p className="mb-4 text-neutral-200"><strong>Voice Data Classification</strong>: Call recordings and voice data are classified as personal data under UK GDPR. Additionally:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Voice data is inherently biometric</strong>: Voice recordings contain unique, permanent characteristics that can identify an individual. Biometric data receives heightened protection under UK GDPR.</li>
                    <li><strong>Special Category Status</strong>: Voice data falls under "special category" (Article 9) data only if you use it to uniquely identify individuals (e.g., voice recognition systems). If you're simply recording conversations without using them for voice identification, they are personal data but not special category data.</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>Sensitive Information Risk</strong>: Voice recordings may reveal sensitive information including: Health conditions (tone, speech patterns may indicate health issues), Emotional state or mental health indicators, Religious or philosophical views, Financial information or account numbers, Biometric identifiers.</p>
                <p className="mb-4 text-neutral-200"><strong>Risk Mitigation</strong>: If your business handles sensitive information in calls: Implement call redaction tools to scrub sensitive data from transcripts, Restrict access to voice recordings to essential personnel only, Implement role-based access controls, Use encryption for stored recordings, Minimize retention periods, Train staff on handling sensitive information.</p>
                <p className="mb-4 text-neutral-200"><strong>Nexon-AI's Role</strong>: We provide the technical infrastructure for secure storage and access control. You must implement the business processes and policies for handling sensitive information.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">6.3 Health & Medical Data (HIPAA, NHS Requirements)</h3>
                <p className="mb-4 text-neutral-200">If you are a healthcare provider, therapist, or medical business:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li>Nexon-AI is NOT a HIPAA-compliant Business Associate (BA)</li>
                    <li>Nexon-AI does NOT provide specific healthcare data protections</li>
                    <li>You should NOT process PHI (Protected Health Information) through our Service without additional legal safeguards</li>
                    <li>We recommend consulting with a legal advisor about HIPAA compliance if processing health data</li>
                </ul>
            </section>

            {/* Section 7 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">7. Your Data Protection Rights</h2>
                <p className="mb-4 text-neutral-200">Under UK GDPR, you have the following rights over personal data we control:</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.1 Right to Be Informed</h3>
                <p className="mb-2 text-neutral-200">You have the right to know: Whether we collect data about you, What data we collect, How we use the data, Who we share it with, How long we keep it, Your rights over the data.</p>
                <p className="mb-4 text-neutral-200">We exercise this right by: Providing this comprehensive Privacy Notice and being transparent in all communications.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.2 Right of Access (Subject Access Request)</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Obtain a copy of your personal data we hold, Understand how we've used your data, Verify the lawfulness of our processing, Request multiple copies if needed.</p>
                <p className="mb-2 text-neutral-200"><strong>How to Request</strong>: Email contact@nexon-ai.com with subject line "Data Subject Access Request" and clearly identify what data you want. Include your account details.</p>
                <p className="mb-2 text-neutral-200"><strong>Our Response</strong>: We will respond within one calendar month (or up to 3 months for complex requests). If your request is manifestly unfounded or excessive, we may refuse or charge a reasonable fee.</p>
                <p className="mb-4 text-neutral-200"><strong>Format</strong>: We will provide your data in a structured, commonly used, machine-readable format (typically CSV or JSON).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.3 Right to Rectification</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Correct inaccurate or incomplete personal data, Request we update your information, Demand we add missing information.</p>
                <p className="mb-2 text-neutral-200">Example: If your name is spelled wrong in our system, you can request correction.</p>
                <p className="mb-2 text-neutral-200"><strong>How to Request</strong>: Email contact@nexon-ai.com with subject line "Rectification Request" and specify what data is inaccurate and the correct version.</p>
                <p className="mb-4 text-neutral-200"><strong>Our Response</strong>: We will correct the data within 10 business days and inform you of the correction.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.4 Right to Erasure ("Right to Be Forgotten")</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Request deletion of your personal data, Have data removed if no longer necessary, Request deletion if lawful basis has ended, Request deletion if you withdraw consent.</p>
                <p className="mb-2 text-neutral-200"><strong>Limitations</strong>: We may not erase data if: Required by law (tax records, financial regulations), Necessary for contract performance, Necessary for legal claims or defense, Data is aggregated and anonymized, Essential for security or fraud prevention.</p>
                <p className="mb-2 text-neutral-200"><strong>How to Request</strong>: Email contact@nexon-ai.com with subject line "Erasure Request" and specify what data should be deleted.</p>
                <p className="mb-4 text-neutral-200"><strong>Our Response</strong>: We will delete the data within one calendar month. We will inform you of deletion, but note that backups may take up to 90 days to be completely purged.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.5 Right to Restrict Processing</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Ask us to limit how we use your data, Restrict processing while we verify accuracy, Restrict processing to storage only, Prevent marketing communications, Stop automated processing.</p>
                <p className="mb-2 text-neutral-200"><strong>How to Request</strong>: Email contact@nexon-ai.com with subject line "Restriction Request" and specify how you want processing restricted.</p>
                <p className="mb-4 text-neutral-200"><strong>Our Response</strong>: We will restrict processing within 10 business days and confirm restrictions in place. During restriction, we will only store your data and notify you before processing resumes.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.6 Right to Data Portability</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Receive your personal data in a structured, commonly used, machine-readable format, Transfer your data to another service provider, Have data transmitted directly to another provider if technically feasible.</p>
                <p className="mb-2 text-neutral-200"><strong>Format</strong>: Data will be provided in CSV, JSON, or XML format (your choice).</p>
                <p className="mb-2 text-neutral-200"><strong>How to Request</strong>: Email contact@nexon-ai.com with subject line "Data Portability Request" and specify the format you prefer.</p>
                <p className="mb-4 text-neutral-200"><strong>Our Response</strong>: We will provide a portable copy within one calendar month. If technically feasible, we can transmit directly to another provider you specify.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.7 Right to Object</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Object to processing based on legitimate interest, Opt-out of marketing communications, Object to automated decision-making, Object to profiling.</p>
                <p className="mb-2 text-neutral-200"><strong>Marketing Opt-Out</strong>: You can unsubscribe from promotional emails by: Clicking the "unsubscribe" link at the bottom of any marketing email, Emailing contact@nexon-ai.com with "Unsubscribe" in subject, Updating your communication preferences in your account dashboard.</p>
                <p className="mb-4 text-neutral-200"><strong>Our Response</strong>: We will honor opt-out requests within 10 business days. Note: We may continue service-related communications (account updates, security alerts).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.8 Right to Withdraw Consent</h3>
                <p className="mb-2 text-neutral-200">If we process data based on your consent: You can withdraw consent at any time, Withdrawal does not affect legality of processing before withdrawal, Withdrawal is effective immediately upon our receipt.</p>
                <p className="mb-4 text-neutral-200"><strong>How to Withdraw</strong>: Email contact@nexon-ai.com with subject line "Withdraw Consent" and specify which consent(s) you're withdrawing.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">7.9 Rights Related to Automated Decision-Making</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Know when automated decision-making is being used, Request human review of automated decisions, Challenge or appeal automated decisions, Receive meaningful explanation of how the decision was made.</p>
                <p className="mb-2 text-neutral-200"><strong>Our Automated Decisions</strong>: We use automated decision-making for: Fraud detection and prevention, Anomaly detection in account activity, Automated call routing and disposition.</p>
                <p className="mb-4 text-neutral-200"><strong>Your Rights</strong>: For decisions with legal or significant effects on you, we will: Inform you that automated processing is occurring, Provide a clear explanation of the logic and factors used, Allow you to request human review, Provide a process to challenge the decision.</p>
            </section>

            {/* Section 8 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">8. Our Use of Personal Data</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">8.1 How We Use Data We Control</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Service Delivery & Account Management</strong>: Creating and maintaining your account, Processing payments and billing, Providing customer support and technical assistance, Sending transactional emails (confirmations, invoices, alerts), System administration and access control.</li>
                    <li><strong>Service Improvement & Analytics</strong>: Analyzing usage patterns and feature adoption, Identifying bugs, errors, and performance issues, Understanding user needs and preferences, Developing new features and improvements, Conducting A/B testing and optimization, Monitoring service availability and reliability.</li>
                    <li><strong>Security & Fraud Prevention</strong>: Detecting and preventing unauthorized access, Investigating suspicious account activity, Preventing fraud and abuse, Protecting our infrastructure and customers, Compliance with law enforcement requests, Maintaining audit logs and records.</li>
                    <li><strong>Marketing & Communications</strong>: Sending product updates and announcements, Promotional emails and special offers (with consent), Invitations to webinars, events, and training, Newsletters and industry insights, Surveys and feedback requests, Case study and testimonial requests.</li>
                    <li><strong>Business Operations</strong>: Financial management and accounting, Legal compliance and regulatory reporting, Contract management and enforcement, Vendor management and payments, HR and employment verification, Insurance and risk management.</li>
                    <li><strong>Research & Analytics</strong>: Aggregated market research and trend analysis, Competitive analysis and business intelligence, Understanding customer demographics and behaviors, Academic research (with anonymization), Product roadmap prioritization.</li>
                </ul>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">8.2 Automated Decision-Making & Profiling</h3>
                <p className="mb-2 text-neutral-200"><strong>We Use Automated Systems For:</strong></p>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Fraud Detection</strong>: Unusual payment activity patterns, Suspicious login locations or timing, Abnormal API usage. Decision: Flag account for manual review or temporary suspension. Your Rights: You can request human review and explanation.</li>
                    <li><strong>Call Routing & Optimization</strong>: Intelligent call distribution based on availability, Optimal agent selection (when you use multiple agents), Pattern matching for similar inquiry types. Decision: Route call to specific AI agent or escalation queue. Your Rights: Not applicable (routing decision doesn't have legal effect on you).</li>
                    <li><strong>Churn Prediction & Retention</strong>: Predictive models identifying at-risk customers, Engagement scoring and activity analysis. Decision: Trigger outreach for retention (not a binding decision). Your Rights: You can request explanation and opt-out of retention targeting.</li>
                </ul>
                <p className="mb-2 text-neutral-200"><strong>Explainability</strong>: For automated decisions with legal or significant effects, we will provide: Clear explanation of the logic applied, Information about data used in the decision, Significance and consequences of the decision, Right to request human intervention.</p>
                <p className="mb-4 text-neutral-200"><strong>No Profiling for Discrimination</strong>: We do NOT use data to: Profile based on protected characteristics (race, gender, age, disability, etc.), Make decisions based solely on automated processing that discriminates, Use voice analysis to infer health, disability, or other sensitive characteristics for targeting.</p>
            </section>

            {/* Section 9 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">9. Who We Share Personal Data With</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.1 Sub-Processors & Service Providers</h3>
                <p className="mb-4 text-neutral-200">As a processor and SaaS provider, Nexon-AI engages carefully selected sub-processors to provide and operate the Service. You have the right to object to sub-processor changes (see Section 9.3).</p>
                
                <h4 className="text-white font-semibold mt-4 mb-2">Our Sub-Processors:</h4>
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-200">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Sub-Processor</th>
                                <th className="p-3 border-b border-neutral-800">Purpose</th>
                                <th className="p-3 border-b border-neutral-800">Data Categories</th>
                                <th className="p-3 border-b border-neutral-800">Location</th>
                                <th className="p-3 border-b border-neutral-800">Protection</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-800/40">
                            <tr><td className="p-3">OpenAI (GPT-4)</td><td className="p-3">AI response generation, conversation context</td><td className="p-3">Call content, customer inquiries</td><td className="p-3">USA</td><td className="p-3">Data Processing Agreement, Standard Contractual Clauses</td></tr>
                            <tr><td className="p-3">Deepgram</td><td className="p-3">Speech-to-text conversion, voice transcription</td><td className="p-3">Call audio, voice data</td><td className="p-3">USA</td><td className="p-3">Data Processing Agreement</td></tr>
                            <tr><td className="p-3">Neon PostgreSQL</td><td className="p-3">Database storage, backup, data persistence</td><td className="p-3">All personal data (encrypted)</td><td className="p-3">USA/EU (configurable)</td><td className="p-3">Encryption at rest, access controls</td></tr>
                            <tr><td className="p-3">Supabase</td><td className="p-3">Real-time API, authentication, data synchronization</td><td className="p-3">Account data, call metadata</td><td className="p-3">USA/EU (configurable)</td><td className="p-3">Encryption, authentication, access controls</td></tr>
                            <tr><td className="p-3">AWS (Amazon Web Services)</td><td className="p-3">Cloud infrastructure, hosting, CDN, backups</td><td className="p-3">All data (encrypted)</td><td className="p-3">USA/EU (configurable by region)</td><td className="p-3">AWS compliance certifications, encryption</td></tr>
                            <tr><td className="p-3">Stripe</td><td className="p-3">Payment processing, billing, invoicing</td><td className="p-3">Payment and billing data only</td><td className="p-3">USA/EU</td><td className="p-3">PCI DSS compliance, tokenization</td></tr>
                            <tr><td className="p-3">Twilio</td><td className="p-3">Telephony infrastructure, call routing</td><td className="p-3">Phone numbers, call metadata</td><td className="p-3">USA/EU (configurable)</td><td className="p-3">Telecommunications compliance</td></tr>
                            <tr><td className="p-3">Google Analytics</td><td className="p-3">Website analytics and user behavior tracking</td><td className="p-3">Website usage, device, IP address (anonymized)</td><td className="p-3">USA</td><td className="p-3">Google Analytics Privacy Policy</td></tr>
                            <tr><td className="p-3">Hotjar</td><td className="p-3">Website heatmaps and user recording</td><td className="p-3">Website interaction, device, location</td><td className="p-3">USA/EU</td><td className="p-3">Hotjar Privacy Policy</td></tr>
                            <tr><td className="p-3">HubSpot</td><td className="p-3">Customer relationship management (CRM)</td><td className="p-3">Contact info, interactions, company data</td><td className="p-3">USA/EU</td><td className="p-3">GDPR compliance, Data Processing Agreement</td></tr>
                            <tr><td className="p-3">Mailchimp</td><td className="p-3">Email marketing and campaign management</td><td className="p-3">Email address, marketing consent</td><td className="p-3">USA</td><td className="p-3">Mailchimp Privacy Policy, Data Processing Agreement</td></tr>
                        </tbody>
                    </table>
                </div>
                
                <h4 className="text-white font-semibold mt-4 mb-2">Sub-Processor Data Flow:</h4>
                <p className="mb-2 text-neutral-200">When you use Nexon-AI:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Your data flows to Nexon-AI's secure UK/EU servers first</li>
                    <li>For call processing: Audio/content sent to Deepgram (speech-to-text) and OpenAI (AI response)</li>
                    <li>For storage: Encrypted backups to AWS and Neon</li>
                    <li>For payment: Payment data to Stripe only</li>
                    <li>For communication: Email campaigns to Mailchimp (marketing only)</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>Data Minimization</strong>: Each sub-processor receives only the data necessary for their specific function. For example, OpenAI receives the text of caller inquiries but not billing information.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.2 Sub-Processor Authorization & Objection Rights</h3>
                <p className="mb-2 text-neutral-200"><strong>Your Authorization</strong>: By accepting our Terms of Service and this Privacy Notice, you authorize Nexon-AI to use the sub-processors listed above.</p>
                <p className="mb-2 text-neutral-200"><strong>30-Day Notice for Changes</strong>: If we add new sub-processors or materially change existing sub-processor arrangements:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>We will notify you in writing at least 30 days before the change takes effect</li>
                    <li>We will provide details of the new sub-processor and data they will access</li>
                    <li>You have the right to object within the 30-day notice period</li>
                    <li>If you object and no alternative is available, you may terminate the relevant service component</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>How to Object</strong>: Email contact@nexon-ai.com with subject line "Sub-Processor Objection" within the notice period. Include which sub-processor you object to and your reason.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.3 Data Shared With Your Customers & End-Users</h3>
                <p className="mb-2 text-neutral-200"><strong>As Your Processor</strong>: We may disclose personal data to:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>Your employees and team members (those with account access)</li>
                    <li>Your business partners and integrations you authorize (e.g., CRM systems)</li>
                    <li>Third-party analytics or reporting tools you enable in your dashboard</li>
                    <li>Law enforcement or regulatory authorities (only per legal requirement and with your notice)</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>You Control Access</strong>: You can control who in your organization has access to what data through: Role-based access control in your account dashboard, Team member permissions and API key management, Integration permissions and data access scopes.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.4 Business Partners & Integrations</h3>
                <p className="mb-2 text-neutral-200">If you enable integrations with third-party tools (CRM, calendar, booking systems, etc.):</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>We share only the data you explicitly authorize</li>
                    <li>Integration providers access data per their own privacy policies</li>
                    <li>You are responsible for reviewing their privacy practices</li>
                    <li>We recommend checking their privacy policies before granting access</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>Common Integrations</strong>: Calendar systems (Google Calendar, Outlook, Apple Calendar), CRM platforms (Salesforce, HubSpot, Pipedrive), Booking systems (Calendly, Acuity Scheduling, SimplyBook), Communication tools (Slack, Microsoft Teams, Zapier), Accounting systems (QuickBooks, Xero).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.5 Legal & Law Enforcement Disclosure</h3>
                <p className="mb-2 text-neutral-200">We may disclose personal data to law enforcement, regulators, or legal advisors: To comply with legal obligations or court orders, To respond to legitimate governmental requests, To protect our legal rights and defend claims, To prevent fraud or illegal activity, To protect public safety or vital interests.</p>
                <p className="mb-4 text-neutral-200"><strong>Our Process</strong>: When possible, we will: Notify you of the request or disclosure (unless legally prohibited), Seek to limit the scope and provide only the minimum necessary, Keep records of disclosures for audit purposes, Challenge overly broad requests.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">9.6 Business Transactions & Reorganization</h3>
                <p className="mb-4 text-neutral-200">In the event of a merger, acquisition, bankruptcy, or sale of assets: Your personal data may be transferred to the acquiring organization, The acquiring organization must honor this Privacy Notice (or provide notice of changes), You will be notified of any material changes to data handling practices.</p>
            </section>

            {/* Section 10 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">10. Data Retention & Deletion</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.1 Retention Schedules</h3>
                <p className="mb-4 text-neutral-200">We retain personal data only as long as necessary for the purposes for which it was collected:</p>
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-200">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Data Category</th>
                                <th className="p-3 border-b border-neutral-800">Retention Period</th>
                                <th className="p-3 border-b border-neutral-800">Reason</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-800/40">
                            <tr><td className="p-3">Account Information</td><td className="p-3">Contract + 6 years</td><td className="p-3">Legal/Tax</td></tr>
                            <tr><td className="p-3">Payment Records</td><td className="p-3">6 years</td><td className="p-3">Tax compliance</td></tr>
                            <tr><td className="p-3">Call Recordings</td><td className="p-3">12 months</td><td className="p-3">Quality/Compliance</td></tr>
                            <tr><td className="p-3">Call Transcripts</td><td className="p-3">12 months</td><td className="p-3">Reference</td></tr>
                            <tr><td className="p-3">Customer Support</td><td className="p-3">3 years</td><td className="p-3">Service improvement</td></tr>
                            <tr><td className="p-3">Website Analytics</td><td className="p-3">26 months</td><td className="p-3">Analytics</td></tr>
                            <tr><td className="p-3">Marketing Consent</td><td className="p-3">Until withdrawn</td><td className="p-3">Compliance</td></tr>
                            <tr><td className="p-3">Login/Security Logs</td><td className="p-3">90 days</td><td className="p-3">Security</td></tr>
                            <tr><td className="p-3">Operational Backups</td><td className="p-3">30-90 days</td><td className="p-3">Disaster recovery</td></tr>
                            <tr><td className="p-3">Archive/Long-term Backups</td><td className="p-3">1-7 years</td><td className="p-3">Legal/regulatory requirements, business continuity</td></tr>
                            <tr><td className="p-3">Deleted Data</td><td className="p-3">90 days post-deletion</td><td className="p-3">Backup purging</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.2 Deletion Upon Request</h3>
                <p className="mb-2 text-neutral-200"><strong>Right to Deletion</strong>: You can request deletion of your personal data at any time (subject to legal limitations):</p>
                <p className="mb-2 text-neutral-200"><strong>How to Request</strong>: Email contact@nexon-ai.com with subject line "Deletion Request" and specify what data to delete.</p>
                <p className="mb-2 text-neutral-200"><strong>Timeline</strong>: Deletion from active systems: 10 business days, Deletion from backups: up to 90 days (backups purged on rotation schedule). We will confirm deletion once complete.</p>
                <p className="mb-4 text-neutral-200"><strong>Exceptions</strong>: We may not delete data if: Required by law (tax records, financial regulations), Necessary for contract performance, Necessary for legal claims or defense, Data is aggregated and anonymized, Essential for security or fraud prevention.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">10.3 Contract Termination</h3>
                <p className="mb-2 text-neutral-200">When your subscription ends:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Immediate Access Removal (End of Service)</strong>: Your account access is disabled within 24 hours, Data becomes read-only (cannot be modified).</li>
                    <li><strong>Data Retrieval Period (30 days)</strong>: You can download/export your data via your dashboard, You can request data export via API, Contact support@nexon-ai.com for bulk export assistance.</li>
                    <li><strong>Data Deletion (30 days post-termination)</strong>: All personal data is securely deleted from active systems, You will receive deletion confirmation.</li>
                    <li><strong>Backup Purging (90 days post-termination)</strong>: Backups containing your data are purged on regular rotation schedule, Long-term/archive backups deleted per legal retention requirements.</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>Legal Retention</strong>: We may retain data longer if: Required by tax law (6 years for business records), Subject to legal hold or litigation, Required by regulatory investigation.</p>
            </section>

            {/* Section 11 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">11. International Data Transfers</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.1 Our Data Processing Locations</h3>
                <p className="mb-2 text-neutral-200"><strong>Nexon-AI Primary Location</strong>: United Kingdom (Hatfield, England)</p>
                <p className="mb-4 text-neutral-200"><strong>Our Sub-Processors' Locations</strong>: USA-Based: OpenAI, Deepgram, Stripe, Twilio (partial); EU-Based: AWS (EU regions available), Supabase (EU option), Neon (EU option), Twilio (partial); Configurable: You can request EU-only data processing for certain sub-processors.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.2 International Data Transfers & Legal Safeguards</h3>
                <p className="mb-2 text-neutral-200"><strong>US Data Transfers</strong>: When personal data is transferred to the USA (e.g., to OpenAI or Deepgram):</p>
                <p className="mb-2 text-neutral-200"><strong>UK GDPR Requirements</strong>: Under UK GDPR Chapter 5, data transfers outside the UK must be safeguarded. Our safeguards include:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Standard Contractual Clauses (SCCs)</strong>: Legally binding contracts between Nexon-AI and US sub-processors, SCCs include mandatory data protection commitments, SCCs provide data subject remedies and enforcement.</li>
                    <li><strong>US Provider Certifications</strong>: OpenAI, Deepgram, Stripe comply with GDPR and maintain Data Processing Agreements, Sub-processors implement appropriate technical and organizational measures.</li>
                    <li><strong>Data Minimization</strong>: We transfer only the minimum data necessary (e.g., caller inquiry text, not full personal profile), Sensitive personal data is not transferred unless necessary.</li>
                    <li><strong>Encryption & Security</strong>: Data in transit is encrypted (TLS 1.2+), Data at rest in US systems is encrypted, Access controls limit exposure.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.3 Your Rights for Transfers</h3>
                <p className="mb-2 text-neutral-200">You have the right to: Know which sub-processors are located outside the UK, Request EU/UK-only data processing (where available), Object to transfers to specific countries, Receive details of transfer mechanisms and safeguards.</p>
                <p className="mb-4 text-neutral-200"><strong>How to Request EU-Only Processing</strong>: Email contact@nexon-ai.com and specify your data residency requirements. Note: Some features may not be available with EU-only processing.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">11.4 Privacy Shield & Adequacy Decisions</h3>
                <p className="mb-2 text-neutral-200"><strong>EU-UK Data Transfers</strong>: The UK maintains an "adequacy decision" with the EU, allowing data to flow freely from the EU to the UK.</p>
                <p className="mb-4 text-neutral-200"><strong>UK-EU Transfers</strong>: When Nexon-AI transfers personal data from the UK to the EU: Standard Contractual Clauses are used for non-EU transfers, EU sub-processor transfers are within the EU adequacy zone (no SCCs needed, but DPAs required).</p>
            </section>

            {/* Section 12 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">12. Security & Data Protection Measures</h2>
                <p className="mb-4 text-neutral-200">We implement comprehensive technical and organizational security measures to protect personal data:</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.1 Encryption</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Data at Rest (Stored Data)</strong>: AES-256 encryption for database content, Encrypted file storage for backups, Encrypted keys stored separately from encrypted data, Key rotation every 90 days.</li>
                    <li><strong>Data in Transit (Moving Data)</strong>: TLS 1.2+ (minimum) for all data transmission, HTTPS for website and API connections, Encrypted VPN tunnels for internal data movement, Certificate pinning for enhanced HTTPS security.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.2 Access Controls</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Authentication</strong>: Multi-factor authentication (MFA) required for all accounts, Strong password policies (minimum 12 characters, complexity requirements), Passwordless authentication options (biometric, security keys), Session timeouts for inactive users (15 minutes).</li>
                    <li><strong>Authorization</strong>: Role-based access control (RBAC) limiting data access to job necessity, Principle of least privilege (staff access only to required data), API key management with rotation requirements, Audit logs tracking who accessed what data and when.</li>
                    <li><strong>Physical Access</strong>: Data centers with restricted physical access, Biometric authentication for data center access, Surveillance cameras and intrusion detection, Data center compliance certifications (ISO 27001, SOC 2).</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.3 Network Security</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Firewalls & Intrusion Detection</strong>: Next-generation firewalls (WAF) preventing unauthorized access, Intrusion detection systems (IDS) monitoring for attacks, DDoS protection and mitigation, Network segmentation isolating sensitive data.</li>
                    <li><strong>Vulnerability Management</strong>: Regular security assessments and penetration testing (quarterly), Automated vulnerability scanning, Prompt patching of identified vulnerabilities (critical patches within 48 hours), Bug bounty program rewarding responsible disclosure.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.4 Monitoring & Incident Response</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Continuous Monitoring</strong>: Real-time security event logging, Anomaly detection for unusual activity, Automated alerts for suspicious patterns, 24/7 security operations center (SOC) monitoring.</li>
                    <li><strong>Incident Response</strong>: Incident response plan and procedures, Dedicated security incident response team, Forensic investigation capabilities, Data breach notification protocol (notify you within 24 hours of discovery).</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.5 Data Protection by Design & Default</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Privacy by Design</strong>: Privacy assessment in product development, Privacy built into architecture from start, Data minimization enforced at system level, Encryption enabled by default.</li>
                    <li><strong>Staff Training</strong>: Annual data protection and security training, Confidentiality agreements for all staff, Authorized access training for sensitive systems, Regular security awareness campaigns.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.6 Backup & Disaster Recovery</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Backup Strategy</strong>: Daily automated backups to geographically diverse locations, Backup encryption same as production systems, Backup integrity testing (monthly), Rapid restore capability (4-hour RTO).</li>
                    <li><strong>Disaster Recovery</strong>: Hot standby systems in secondary data centers, Automatic failover for service continuity, Recovery procedures tested quarterly, Business continuity plan (availability target 99%).</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">12.7 Security Certifications & Audits</h3>
                <p className="mb-2 text-neutral-200">We maintain compliance with security standards including:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>ISO 27001: Information security management system</li>
                    <li>SOC 2 Type II: Service organization controls audit</li>
                    <li>GDPR: Data protection compliance</li>
                    <li>HIPAA-ready (call recording only, not full HIPAA BA)</li>
                </ul>
            </section>

            {/* Section 13 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">13. Cookies & Tracking Technologies</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.1 Cookie Policy</h3>
                <p className="mb-4 text-neutral-200"><strong>What are Cookies?</strong> Cookies are small text files stored on your device that track preferences and activity.</p>
                <p className="mb-2 text-neutral-200"><strong>Types of Cookies We Use:</strong></p>
                
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-200">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Cookie Type</th>
                                <th className="p-3 border-b border-neutral-800">Purpose</th>
                                <th className="p-3 border-b border-neutral-800">Duration</th>
                                <th className="p-3 border-b border-neutral-800">Consent Required?</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-800/40">
                            <tr><td className="p-3">Session</td><td className="p-3">Maintain login state</td><td className="p-3">Session</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Authentication</td><td className="p-3">Keep logged in</td><td className="p-3">30 days</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Preference</td><td className="p-3">Settings</td><td className="p-3">1 year</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Analytics</td><td className="p-3">Track usage</td><td className="p-3">2 years</td><td className="p-3">No (under DUAA 2025)</td></tr>
                            <tr><td className="p-3">Performance</td><td className="p-3">Monitor speed/errors</td><td className="p-3">90 days</td><td className="p-3">No</td></tr>
                            <tr><td className="p-3">Marketing</td><td className="p-3">Retargeting</td><td className="p-3">1 year</td><td className="p-3">Yes</td></tr>
                            <tr><td className="p-3">Third-Party</td><td className="p-3">Partner tracking</td><td className="p-3">Varies</td><td className="p-3">Yes</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="mb-2 text-neutral-200"><strong>Consent Changes (DUAA 2025)</strong>: Under UK GDPR as amended by the Data Use and Access Act 2025, we do NOT need consent for: Website analytics (Google Analytics), Performance monitoring (error tracking, uptime), Functional diagnostics (site functionality testing).</p>
                <p className="mb-4 text-neutral-200">We DO need consent for: Targeted advertising and marketing cookies, Behavioral profiling, Cross-site tracking.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.2 How to Manage Cookies</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>In Your Browser</strong>: Most browsers allow you to disable cookies or block certain types, You can delete existing cookies in browser settings, "Private/Incognito" browsing prevents cookie storage.</li>
                    <li><strong>On Our Website</strong>: Accept/Reject button on first visit, Cookie preferences link at bottom of pages, Update preferences anytime in your account settings.</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>Note</strong>: Blocking essential cookies may prevent site features from working properly.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">13.3 Other Tracking Technologies</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Web Beacons & Pixels</strong>: Tiny images (1x1 pixels) that track email opens and page views, Used in marketing emails to measure engagement, Can be disabled by disabling image loading in email.</li>
                    <li><strong>Local Storage & IndexedDB</strong>: Browser storage for website preferences, Similar to cookies but more storage capacity, Can be cleared in browser settings.</li>
                    <li><strong>Analytics Scripts</strong>: JavaScript code tracking user behavior, Used by Google Analytics, Hotjar, Mixpanel, Blocked by browser privacy extensions.</li>
                </ul>
            </section>

            {/* Section 14 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">14. Children's Privacy</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">14.1 Age Restrictions</h3>
                <p className="mb-4 text-neutral-200">Our Service is intended for business users and is NOT directed at children under the age of 18. We do not knowingly collect personal data from children under 18.</p>
                <p className="mb-4 text-neutral-200"><strong>If You Are Under 18</strong>: Do not use our Service or provide personal data to us. If you're under 18 and have provided data, please ask your parent/guardian to contact us immediately for deletion.</p>
                <p className="mb-4 text-neutral-200"><strong>If You Are a Parent/Guardian</strong>: If you discover your child has provided personal data to us, please contact contact@nexon-ai.com immediately and we will delete the information.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">14.2 Parental Consent</h3>
                <p className="mb-4 text-neutral-200">If we discover we're processing data from someone under 18, we will seek parental/guardian consent if legally required. We reserve the right to request age verification before processing.</p>
            </section>

            {/* Section 15 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">15. Your Privacy Choices & Preferences</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.1 Communication Preferences</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200">
                    <li><strong>Marketing Communications</strong>: You can unsubscribe from promotional emails by clicking "unsubscribe" link, Update preferences in your account dashboard under "Communication Settings", Email contact@nexon-ai.com with "Unsubscribe" to opt out of all marketing.</li>
                    <li><strong>Service Communications</strong>: We will continue sending service-related emails (account alerts, security, invoices, support), These are necessary for account management and cannot be opted out.</li>
                    <li><strong>Frequency Control</strong>: Choose how often you receive newsletters (weekly, monthly, never), Choose which topics interest you (product updates, webinars, tips, deals).</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.2 Cookie & Tracking Preferences</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Managing Cookies</strong>: Cookie preference banner on website allows Accept/Reject/Customize, Access Cookie Settings anytime via footer link, Browser settings also allow cookie control.</li>
                    <li><strong>Do Not Track Signals</strong>: If your browser sends "Do Not Track" signal, we honor it for non-essential tracking, Essential tracking for security and functionality continues regardless.</li>
                    <li><strong>Targeted Advertising Opt-Out</strong>: Opt out of personalized advertising at Digital Advertising Alliance, Device-level ad personalization controls (Apple, Android, Google).</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">15.3 Processor Data Rights (When We're Your Processor)</h3>
                <p className="mb-2 text-neutral-200">When we process data as your processor (for your customers' data):</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li>YOU handle data subject requests (SARs, deletion, portability)</li>
                    <li>We support you by responding to your requests within 10 business days</li>
                    <li>You manage customer preferences and communication consent</li>
                    <li>We implement technical controls for data restriction, deletion, portability</li>
                </ul>
                <p className="mb-4 text-neutral-200"><strong>How to Submit Processor Rights Requests</strong>: Email contact@nexon-ai.com with: Your account details, Type of request (SAR, deletion, rectification, etc.), Specific data or time period involved, Include evidence you have authority to make request.</p>
            </section>

            {/* Section 16 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">16. Third-Party Websites</h2>
                <p className="mb-4 text-neutral-200">Our website and communications may contain links to third-party websites, social media platforms, and external services. This Privacy Notice applies only to Nexon-AI.</p>
                
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">16.1 External Links</h3>
                <p className="mb-2 text-neutral-200">When you click links to other websites: You leave Nexon-AI's website and enter a third-party site, Their privacy policy governs how they handle your data, We are not responsible for their privacy practices, We recommend reviewing their privacy policies.</p>
                <p className="mb-4 text-neutral-200"><strong>Common Third-Party Sites</strong>: Social media (LinkedIn, Twitter, YouTube), Payment processors (Stripe), Cloud providers (AWS, Google Drive), Collaboration tools (Microsoft Teams).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">16.2 Embedded Content</h3>
                <p className="mb-2 text-neutral-200">Our website may embed: YouTube videos, Social media feeds, Maps, Live chat widgets.</p>
                <p className="mb-4 text-neutral-200"><strong>Third-Party Cookies</strong>: Embedded content from third parties may set cookies on your device, which are governed by their privacy policies.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">16.3 Links on Nexon-AI</h3>
                <p className="mb-4 text-neutral-200">When we provide links in our Privacy Notice or communications: We're not endorsing or assuming responsibility for those sites, Review their privacy policies independently, We do our best to link to current, accurate resources.</p>
            </section>

            {/* Section 17 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">17. Data Breach Notification</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">17.1 What is a Data Breach?</h3>
                <p className="mb-4 text-neutral-200">A data breach is unauthorized access to, disclosure of, or loss of personal data that compromises the security or privacy of the data. Examples: Unauthorized login to an account, Hacker gaining access to our servers, Personal data leaked publicly, Loss of encrypted backup media, Insider theft or misuse of data.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">17.2 Our Breach Notification Process</h3>
                <p className="mb-2 text-neutral-200">If Your Data is Affected:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Discovery (0-24 hours)</strong>: Our security team detects or reports a breach, Investigation begins immediately.</li>
                    <li><strong>Assessment (24-72 hours)</strong>: Determine scope: what data, whose data, how many people affected, Determine severity: minimal risk vs high risk to data subjects, Determine cause: system vulnerability, human error, malicious attack.</li>
                    <li><strong>Your Notification (Within 24 hours of discovery)</strong>: We notify you by email if you're affected, Details: what happened, what data was affected, what we're doing, what you should do, Contact point for questions.</li>
                    <li><strong>Data Subject Notification (Your responsibility)</strong>: If your customers' data is affected, YOU must notify them, We provide evidence and details to help you draft communications, Timeline: Within 3 business days if high-risk, or without undue delay.</li>
                    <li><strong>Regulatory Notification (Your/Our responsibility)</strong>: If high-risk, you/we may need to notify UK Information Commissioner's Office (ICO), Timeline: Within 30 days of becoming aware, We provide evidence and details.</li>
                </ul>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">17.3 Containment & Remediation</h3>
                <ul className="list-disc pl-5 space-y-1 mb-4 text-neutral-200">
                    <li><strong>Our Actions Upon Breach</strong>: Isolate affected systems to prevent further access, Revoke compromised credentials and access tokens, Forensic analysis to identify cause and extent, Implement remediation to prevent recurrence, Enhance security monitoring.</li>
                    <li><strong>Your Actions</strong>: Reset your password if credentials compromised, Review account activity for unauthorized transactions, Enable multi-factor authentication if not already, Contact bank/payment provider if payment data affected, Monitor for identity theft or fraud.</li>
                </ul>
            </section>

            {/* Section 18 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">18. Legal Basis & Regulatory Compliance</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">18.1 Applicable Laws</h3>
                <p className="mb-4 text-neutral-200">This Privacy Notice and our data practices comply with: UK GDPR (UK General Data Protection Regulation) as amended by Data Use and Access Act 2025, Data Protection Act 2018 (supplementary legislation), Privacy and Electronic Communications Regulations 2003 (PECR), ICO Guidance (Information Commissioner's Office, UK regulator), UK Common Law (privacy, confidentiality).</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">18.2 Your Regulatory Rights</h3>
                <p className="mb-2 text-neutral-200">You have the right to file a complaint with the UK Information Commissioner's Office (ICO):</p>
                <p className="mb-2 text-neutral-200"><strong>UK ICO Contact</strong>: Website: https://ico.org.uk, Phone: +44 (0) 303 123 1113, Email: casework@ico.org.uk, Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF.</p>
                <p className="mb-4 text-neutral-200"><strong>No Need for Prior Notice</strong>: You can file a complaint directly with the ICO without notifying us first, though we welcome the opportunity to address concerns.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">18.3 Data Protection Officer (DPO)</h3>
                <p className="mb-4 text-neutral-200">Nexon-AI does not currently employ a dedicated Data Protection Officer, as we are a small SaaS provider. However, for privacy-related inquiries, please contact contact@nexon-ai.com and mark "ATTENTION: PRIVACY OFFICER" in subject.</p>
            </section>

            {/* Section 19 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">19. Amendments to This Privacy Notice</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">19.1 Changes & Updates</h3>
                <p className="mb-4 text-neutral-200">We may update this Privacy Notice from time to time to reflect: Changes in our data practices, New regulations or legal requirements, Feedback from customers and regulators, Changes to sub-processors or data flows.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">19.2 Notification of Changes</h3>
                <p className="mb-2 text-neutral-200"><strong>Material Changes</strong>: If we make material changes that significantly affect your privacy: We will notify you by email to your registered email address, We will post the updated notice on our website, We will highlight what changed, We will provide at least 30 days' notice before changes take effect.</p>
                <p className="mb-2 text-neutral-200"><strong>What Constitutes Material Change</strong>: New purposes for processing data, New sub-processors or data transfer countries, Changes to your rights or our obligations, Changes to data retention or deletion practices.</p>
                <p className="mb-4 text-neutral-200"><strong>Non-Material Changes</strong>: We may update without notice for: Clarifications or improved wording, Contact information updates, Administrative changes, Adding sub-processors with same or better protections.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">19.3 Acceptance of Changes</h3>
                <p className="mb-4 text-neutral-200">Continued use of our Service after the notice period constitutes your acceptance of updated terms. If you do not accept changes, you may: Request deletion of your account, Discontinue use of the Service, Contact contact@nexon-ai.com to discuss concerns.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">19.4 Version History</h3>
                <p className="mb-4 text-neutral-200">We maintain a history of previous versions of this Privacy Notice. Upon request, you can access prior versions to see what changed. Email contact@nexon-ai.com with "Privacy Notice History Request" in subject.</p>
            </section>

            {/* Section 20 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">20. Contact Us & Exercising Your Rights</h2>
                <h3 className="text-lg font-semibold text-white mt-6 mb-3">20.1 Contact Information</h3>
                <p className="mb-2 text-neutral-200">For questions about this Privacy Notice, to exercise your data protection rights, or to report a privacy concern:</p>
                <p className="mb-2 text-neutral-200"><strong>Primary Contact</strong>: Email: contact@nexon-ai.com, Subject line: "PRIVACY REQUEST" or "DATA SUBJECT REQUEST".</p>
                <p className="mb-2 text-neutral-200"><strong>Include in Your Request</strong>: Your full name, Account email address or account ID, Specific request (access, deletion, rectification, objection, etc.), Preferred contact method, Signature (if mailed).</p>
                <div className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 mb-4">
                    <p className="text-white font-bold mb-1">Mailing Address:</p>
                    <p className="text-neutral-200">Nexon-AI Limited</p>
                    <p className="text-neutral-200">[Your registered business address]</p>
                    <p className="text-neutral-200">Hatfield, England</p>
                    <p className="text-neutral-200">United Kingdom</p>
                </div>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">20.2 Response Times</h3>
                <div className="overflow-x-auto mb-6 border border-neutral-800 rounded-lg">
                    <table className="w-full text-left text-sm text-neutral-200">
                        <thead className="bg-neutral-900 text-white">
                            <tr>
                                <th className="p-3 border-b border-neutral-800">Request Type</th>
                                <th className="p-3 border-b border-neutral-800">Response Time</th>
                                <th className="p-3 border-b border-neutral-800">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-neutral-800 bg-neutral-800/40">
                            <tr><td className="p-3">General inquiries</td><td className="p-3">5-10 business days</td><td className="p-3">Non-binding timeframe, best effort</td></tr>
                            <tr><td className="p-3">Subject Access Requests (SARs)</td><td className="p-3">1 calendar month</td><td className="p-3">May extend to 3 months for complex requests</td></tr>
                            <tr><td className="p-3">Deletion requests</td><td className="p-3">10 business days (active systems), 90 days (backups)</td><td className="p-3">Backups purged on rotation schedule</td></tr>
                            <tr><td className="p-3">Rectification requests</td><td className="p-3">10 business days</td><td className="p-3">Confirmation provided</td></tr>
                            <tr><td className="p-3">Data portability requests</td><td className="p-3">1 calendar month</td><td className="p-3">Provided in structured, machine-readable format</td></tr>
                            <tr><td className="p-3">Restriction requests</td><td className="p-3">10 business days</td><td className="p-3">Data restricted, processing stopped</td></tr>
                            <tr><td className="p-3">Other GDPR requests</td><td className="p-3">1 calendar month</td><td className="p-3">Standard GDPR timeline</td></tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">20.3 Request Verification</h3>
                <p className="mb-4 text-neutral-200">To protect your privacy, we may ask you to verify your identity before responding to requests by: Confirming account details, Providing identification documents, Answering security questions, Confirming email address ownership.</p>

                <h3 className="text-lg font-semibold text-white mt-6 mb-3">20.4 Fee Policy</h3>
                <p className="mb-2 text-neutral-200"><strong>Free Requests</strong>: We do not charge for: Exercising data subject rights (access, deletion, rectification, etc.), Questions about our data practices, Most subject access requests.</p>
                <p className="mb-2 text-neutral-200"><strong>Exceptions</strong>: We may charge a reasonable administrative fee if: Requests are manifestly unfounded or excessive, You request multiple copies of the same data, You request unreasonably frequent copies.</p>
                <p className="mb-4 text-neutral-200"><strong>Fee Notice</strong>: If we determine a fee is appropriate, we will notify you before processing the request.</p>
            </section>

            {/* Section 21 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">21. Glossary of Key Terms</h2>
                <ul className="list-disc pl-5 space-y-2 mb-4 text-neutral-200 text-sm">
                    <li><strong>Automated Decision-Making (ADM)</strong>: Decisions made solely by automated means (computer systems) without human involvement that have legal or similar significant effects on individuals.</li>
                    <li><strong>Biometric Data</strong>: Information derived from biological/physical characteristics (fingerprints, facial recognition, voiceprints) used to identify individuals.</li>
                    <li><strong>Cookie</strong>: Small text file stored on a device that tracks information about a user's browsing.</li>
                    <li><strong>Data Controller</strong>: Organization that determines the purposes and means of processing personal data; typically the organization collecting the data.</li>
                    <li><strong>Data Processor</strong>: Organization that processes personal data on behalf of a controller, following their instructions; Nexon-AI in this relationship.</li>
                    <li><strong>Data Subject</strong>: Individual whose personal data is being processed; you or your customers.</li>
                    <li><strong>Data Subject Access Request (SAR)</strong>: Request from an individual to receive a copy of their personal data and information about how it's processed.</li>
                    <li><strong>Encryption</strong>: Converting data into a coded format that cannot be read without a decryption key; protects data from unauthorized access.</li>
                    <li><strong>GDPR</strong>: General Data Protection Regulation; primary EU/UK data protection law.</li>
                    <li><strong>Lawful Basis</strong>: Legal justification for processing personal data; examples include consent, contract, legitimate interest, legal obligation.</li>
                    <li><strong>Multi-Factor Authentication (MFA)</strong>: Security method requiring multiple verification steps (password + code, fingerprint, etc.).</li>
                    <li><strong>Personal Data</strong>: Information relating to an identified or identifiable individual.</li>
                    <li><strong>Privacy by Design</strong>: Incorporating privacy protection into system design and business processes from the start.</li>
                    <li><strong>Processing</strong>: Any action performed on personal data (collection, storage, analysis, sharing, deletion, etc.).</li>
                    <li><strong>Right to Be Forgotten</strong>: Right to request deletion of personal data in certain circumstances.</li>
                    <li><strong>Role-Based Access Control (RBAC)</strong>: System limiting data access to individuals based on their job role and need to know.</li>
                    <li><strong>Special Category Data</strong>: Sensitive personal data (health, race, religion, biometric, genetic) requiring heightened protection.</li>
                    <li><strong>Standard Contractual Clauses (SCCs)</strong>: Legally binding contracts approved by regulators for international data transfers.</li>
                    <li><strong>Sub-Processor</strong>: Third party that processes personal data on behalf of a processor, who acts on behalf of a controller; part of the processing chain.</li>
                    <li><strong>TLS</strong>: Transport Layer Security; encryption protocol protecting data in transit over internet.</li>
                </ul>
            </section>

            {/* Section 22 */}
            <section>
                <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">22. Final Note</h2>
                <p className="mb-4 text-neutral-200">This Privacy Notice is comprehensive but may not address every possible scenario. If you have questions not answered here, please contact us at contact@nexon-ai.com.</p>
                <p className="mb-4 text-neutral-200"><strong>We Are Committed To Your Privacy</strong>: Nexon-AI takes data protection seriously. We design our systems, policies, and practices with your privacy as a core principle. We welcome feedback and strive to continuously improve our privacy and security practices.</p>
                <div className="flex flex-col md:flex-row gap-8 mt-8 pt-8 border-t border-neutral-800">
                    {/* <div className="shrink-0">
                        <img src="/images/logogreen.png" alt="Nexon-AI" className="h-10" />
                    </div> */}
                    {/* <p className="text-sm text-neutral-500">
                        <strong>Nexon-AI Limited</strong><br/>
                        Hatfield, England, United Kingdom<br/>
                        www.nexon-ai.com<br/>
                        contact@nexon-ai.com<br/><br/>
                        Effective Date: January 13, 2026<br/>
                        Last Updated: January 13, 2026
                        Next Review Date: January 13, 2027
                    </p> */}
                </div>
            </section>

        </div>
      </div>
    </div>
    </>
  );
}