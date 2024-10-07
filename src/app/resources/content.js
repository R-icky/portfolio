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
    skills: ['Splunk', 'Tableau', 'ServiceNow VMDR', '', '', '', 'Amazon Web Services (AWS)', 'Thread Modeling']
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
        link: 'https://topmate.io/ricky_wong'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Selene is a Jakarta-based design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Her work spans digital interfaces, interactive experiences, and the convergence of design and technology.</>
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
                    <>Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Western Union',
                timeframe: '2020 - 2023',
                role: 'Senior Information Security Analyst',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
            },
            {
                company: 'Western Union (Contract)',
                timeframe: '2019 - 2020',
                role: 'Software Engineer',
                achievements: [
                    <>Developed a design system that unified the brand across multiple platforms, improving design consistency by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>
                ],
                images: [ ]
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
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
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
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };