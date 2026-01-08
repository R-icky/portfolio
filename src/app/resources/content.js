import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Rick',
    lastName:  'Wong',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Cybersecurity Engineer',
    // avatar:    '/images/avatar.jpg',
    avatar:    '/images/avatar-rick.jpeg',
    location:  'America/Los_Angeles',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languagetitle: 'Languages',
    languages: ['English', 'Chinese - Cantonese', 'Chinese - Mandarin', 'Python', 'C', 'SQL'],  // optional: Leave the array empty if you don't want to display languages
    skilltitle: 'Technical Skills',
    skills: ['AppSec', 'Vulnerability Management', 'AI Security', 'Threat Modeling', 'Design and build Security Tools', 'PCI DSS 4.0', 'FedRAMP', 'PII Protection', 'Qualys', 'Axonius', 'AWS (Lambda, Redshift, S3, ECS, CDK, Bedrock)', 'Python', 'Java', 'SQL', 'FastAPI', 'ETL Pipelines', 'React', 'TypeScript', 'Tableau', 'QuickSight', 'ServiceNow Vulnerability Response', 'Splunk', 'CI/CD Security', 'Metrics Automation']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    // {
    //     name: 'GitHub',
    //     icon: 'github',
    //     link: 'https://github.com/once-ui-system/nextjs-starter',
    // },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/ricky-wong-096597112',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:wwc102395@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Cybersecurity Engineer and Builder</>,
    subline: <>I'm Rick, a Security Engineer at <InlineCode>Amazon Web Services (AWS)</InlineCode>, where I design and build AI-enhanced security tools, automate threat modeling, and strengthen platform security for high-visibility AI projects.<br/><br/> After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com/rick-wong'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Rick is a highly skilled Security Engineer with expertise in vulnerability management, secure system design, and architecture. <br></br><br></br>
        In addition to his strong risk analysis capabilities, Rick is also a builder who designs and implements services, including automations, to optimize systems and improve efficiency. <br></br><br></br>
        He excels at collaborating with cross-functional teams to deliver secure, scalable solutions that consistently enhance organizational security and operational performance.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Amazon Web Services (AWS)',
                timeframe: '2023 - Present',
                role: 'Security Engineer',
                achievements: [
                    <>Executive AI Security Consultation: Provided security architecture guidance for high-visibility AI projects presented to the CEO and VP; assessed risks for integrations with external providers and enforced sandbox isolation requirements.</>,
                    <>Security Automation Engineering: Designed and developed AI-enhanced security tools, including an automated threat modeler and a multi-agent code review system to accelerate manual security assessments.</>,
                    <>Large Language Model (LLM) Security: Strengthened platform security by implementing input/output validation guardrails and developing robust data sanitization mechanisms for internal AI applications.</>,
                    <>Proactive Risk Mitigation: Identified and remediated a critical PII exposure risk in critical service, preventing unauthorized audible access to sensitive customer data by unauthorized attendees.</>,
                    <>Vulnerability Remediation at Scale: Reduced 99.99% of critical-severity, past-SLA vulnerabilities within one quarter through targeted remediation strategies and cross-team partnership.</>,
                    <>Enterprise Access Control: Launched a company-wide critical access control campaign, achieving 92% completion in 30 days and 100% within 50 days by remediating over 4,700 over-permissioned material sets and IAM roles.</>,
                    <>Compliance & Governance: Led remediation efforts for 178 services across 31 regions, achieving 99.99% patch compliance and securing the organization's first successful PCI audit for containerized environments.</>,
                    <>Vulnerability Program Ownership: Owned the Customer Interdependency Program, reducing past-due critical vulnerabilities by 89% and decreasing the age of the oldest vulnerabilities by 59%.</>,
                    <>Data Integrity for Leadership: Identified and corrected a 46% overcounting error (7.23M hosts) in executive business reporting, ensuring precise resource planning for organization leadership.</>,
                    <>Real-time Metrics Pipelines: Built three scalable data pipelines monitoring vulnerability metrics and operational KPIs with real-time dashboards using QuickSight, Redshift, and Lambda.</>,
                    <>Remediation Orchestration: Designed an internal remediation orchestration service that reduced campaign launch times by 90%, saving 6+ hours per deployment.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    // {
                    //     src: '/images/projects/project-01/cover-01.jpg',
                    //     alt: 'Once UI Project',
                    //     width: 16,
                    //     height: 9
                    // }
                ]
            },
            {
                company: 'Western Union',
                timeframe: '2020 - 2023',
                role: 'Senior Information Security Analyst',
                achievements: [
                    <>Substantially reduced unmanaged risk by leading the operation and maintenance of vulnerability scanning tools, ensuring accurate and up-to-date assessments for a secure IT environment.</>,
                    <>Achieved a 90% vulnerability remediation rate within a quarter by collaborating with cross-functional teams, including IT, engineering, and executives, to develop and implement comprehensive remediation plans.</>,
                    <>Automated vulnerability ticketing workflows, replacing manual Excel reporting, and enhanced the ServiceNow Vulnerability Response Module by implementing new features that streamlined and optimized vulnerability management.</>,
                    <>Leveraged ServiceNow and Tableau to create real-time dashboards, significantly improving vulnerability tracking, visibility, and data-driven decision-making across the organization.</>,
                    <>Produced in-depth vulnerability reports and tracked Key Risk Indicators (KRIs), delivering actionable insights and reliable metrics to measure cybersecurity performance and inform strategic decisions.</>,
                    <>Delivered high-quality, data-driven analysis, creating status reports and dashboards to keep all stakeholders informed of the cybersecurity program’s progress and challenges.</>,
                ],
                images: [
                    {
                        src: '/images/projects/work/servicenow-1.png',
                        alt: 'ServiceNow',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/servicenow-2.png',
                        alt: 'ServiceNow',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/qualys.png',
                        alt: 'Qualys',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/tableau.png',
                        alt: 'Qualys',
                        width: 16,
                        height: 9
                    } 
                ]
            },
            {
                company: 'Western Union (Contract)',
                timeframe: '2019 - 2020',
                role: 'Software Engineer',
                achievements: [
                    <>Proactively monitored system performance and analyzed real-time data to identify potential bottlenecks, improving system reliability and uptime.</>,
                    <>Diagnosed and resolved critical production issues, collaborating with cross-functional teams to implement timely remediation strategies and ensure minimal downtime.</>,
                    <>Maintained and optimized production code, conducting debugging and troubleshooting to enhance performance and scalability in live environments.</>,
                    <>Designed and developed automation systems and interactive dashboards, streamlining operational processes and providing actionable insights to stakeholders.</>,
                ],
                images: [
                    {
                        src: '/images/projects/work/splunk.png',
                        alt: 'Splunk',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/work/splunk-1.png',
                        alt: 'Splunk',
                        width: 16,
                        height: 9
                    } 
                 ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Educations',
        institutions: [
            {
                name: 'University of California, Davis',
                description: <>Bachelor of Science, Computer Science</>,
            }
        ]
    },
    certifications: {
        display: true, // set to false to hide this section
        title: 'Certifications',
        cert: [
            {
                name: 'ISC2 Certified in Cybersecurity',
                institutions: 'ISC2',
                issuedate: "Issued: Nov 2024",
                credlink: "https://www.credly.com/badges/86f99287-8ef5-4959-9479-d864b3457299"
            },
            {
                name: 'ISC2 Candidate',
                institutions: 'ISC2',
                issuedate: "Issued: Oct 2024",
                credlink: "https://www.credly.com/badges/18cd7b7a-7532-4280-90ad-51b74e9dda2e/public_url"
            },
            {
                name: 'CompTIA Security+',
                institutions: 'CompTIA',
                issuedate: "Issued: May 2024",
                credlink: "https://www.credly.com/badges/34c4d727-f617-4c8c-977f-38feda9119c5/linked_in_profile"
            },
            {
                name: 'AWS Certified Cloud Practitioner',
                institutions: 'Amazon Web Services (AWS)',
                issuedate: "Issued: Jan 2024",
                credlink: "https://www.credly.com/badges/468c7940-0e55-4f3b-ac86-4f4da7c6a4ac/linked_in_profile"
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Figma',
                description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design, tech and random stuff...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/shanghai.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/hammer1.webp', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/blossom.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/hongkong.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/hammer.webp', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/manutd.jpeg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/rockymountain.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/anemone2.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/shrimp.avif', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/coral.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/cr7.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/rabbitsnail.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/rooney.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/oreo.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/oreo1.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };