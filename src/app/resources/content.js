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
    skills: ['Splunk', 'Tableau', 'ServiceNow Vulnerability Response Module', 'Qualys', 'Axonius', 'Amazon Web Services (AWS)', 'Thread Modeling', 'PCI', 'FedRAMP', 'Microsoft Office']
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
    subline: <>I'm Rick, a Cybersecurity Engineer at <InlineCode>Amazon Web Services (AWS)</InlineCode>, where I build and manage services that detect and automate the mitigation of cybersecurity threats across the organizationn’s infrastructure.<br/><br/> After hours, I build my own projects.</>
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
                    // <>WIP</>,
                    // <>Achieved a 90% vulnerability remediation rate within a single quarter by collaborating closely with remediation teams and driving initiatives for quick resolution.</>,
                    <>Designed and implemented an internal service that reduced remediation campaign launch times by 90%, saving over 6 hours per campaign.</>,
                    <>Partnered with service teams to execute large-scale vulnerability remediation campaigns, improving the security posture of AWS environments. Led efforts in AMI hardening, security patching, and compliance adherence for FedRAMP and PCI standards, reaching a 99.5% patch rate.</>,
                    <>Built three scalable data pipelines and dashboards to report on vulnerability metrics, operation metrics, and remediation progress. Provided actionable insights for senior leadership, enabling prioritization of security initiatives and achieving measurable reductions in the vulnerability backlog.</>,
                    <>Collaborated with service teams to identify and resolve challenges in patching customer-interdependent hosts, enhancing security and reducing operational delays.</>

                    // <>Developed Automated vulnerability ticketing workflows, eliminating manual Excel reporting and boosting operational efficiency.</>,
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