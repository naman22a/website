import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Viewport */}
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                {/* Description */}
                <meta
                    name="description"
                    content="I can develop both the front-end and back-end of a web application. I am comfortable working with a wide range of technologies and am always willing to learn new ones.Here is a precise description of my awesome webpage."
                />
                <meta name="author" content="Naman Arora" />
                {/* Keywords */}
                <meta
                    name="keywords"
                    content="Naman, Arora, Web Developer, Website, Portfolio,
                    Programming,
                    Web Development,
                    Software Development,
                    Front-end Development,
                    Back-end Development,
                    Full Stack Development,
                    Responsive Design,
                    User Experience (UX),
                    HTML5,
                    CSS3,
                    JavaScript,
                    Python,
                    Node.js,
                    React,
                    Express.js,
                    Database Management,
                    SQL,
                    MongoDB,
                    RESTful APIs,
                    GraphQL,
                    Git,
                    Version Control,
                    Deployment,
                    Cloud Computing,
                    Testing and Debugging,
                    Agile Development,
                    Problem Solving,
                    Object-Oriented Programming (OOP),
                    Data Structures,
                    Algorithms,
                    Transforming ideas into functional websites,
                    Crafting intuitive user experiences with clean code,
                    Building dynamic and responsive web applications,
                    Creating seamless front-end designs with HTML, CSS, and JavaScript,
                    Developing scalable and robust back-end solutions,
                    Full-stack developer proficient in multiple programming languages,
                    Leveraging cutting-edge technologies to deliver innovative solutions,
                    Passionate about delivering high-quality software solutions,
                    Bringing ideas to life through elegant and efficient code,
                    Problem-solving through logical thinking and creative coding,
                    Meticulous attention to detail in every line of code,
                    Collaborating in agile development environments for rapid iteration,
                    Implementing RESTful APIs for seamless data integration,
                    Expertise in database management and optimization,
                    Deploying applications to the cloud for scalable and reliable performance,
                    Embracing version control for efficient collaboration and code management,
                    Continuous learning and staying up-to-date with the latest industry trends,
                    Thriving in fast-paced and challenging coding environments,
                    Delivering projects on time and exceeding client expectations,
                    Enthusiastic about tackling complex algorithms and data structures,
                    Feel free to customize and use these phrases to showcase your skills experience, and passion for coding in your portfolio website.,           
                    "
                />
                {/* Index by website pages */}
                <meta
                    name="robots"
                    content="follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
                />

                {/* Favicon */}
                <link rel="icon" href="/favicon.png" />

                {/* Google search console */}
                <meta
                    name="google-site-verification"
                    content="f1xJCJmDE2FV3kTuVZ5ETtGLOspPpCivXtIRv5HK30Y"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
