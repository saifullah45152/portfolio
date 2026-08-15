'use client';

import Projects from '@/components/sections/Projects';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { animateScroll as scroll } from 'react-scroll';

export default function Portfolio() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        {/* <section className="h-screen flex flex-col justify-center items-center text-center p-6 bg-gradient-to-br from-indigo-500 to-purple-600 text-white"> */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-4"
        >
          Hi, I’m Saif Ullah 👋
        </motion.h1>
        <p className="text-xl max-w-2xl">
          Senior Flutter Developer with 4 years of hands-on experience building and deploying mobile
          & web apps. Delivered 25+ successful projects.
        </p>
        <div className="mt-6 flex gap-4">
          <Button
            onClick={() => {
              // const section = document.getElementById("projects");
              // section?.scrollIntoView({ behavior: "smooth" });
              scroll.scrollTo(document.getElementById('projects')!.offsetTop, { duration: 800 });
            }}
          >
            View Projects
          </Button>

          <Button
            href="https://drive.google.com/file/d/1qJrwsEvk3HNFi1Kn5-Pf5kURZCgObOh-/view?usp=sharing"
            target="_blank"
          >
            Download Resume
          </Button>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed">
          Delivered faster apps, happier users, and cheaper backends. Senior Mobile App Developer
          with 4 years of experience building 25+ Flutter & Dart applications for 5,000+ users.
          Boosted app load speeds by 80%, drove a 70% jump in user engagement, and cut backend costs
          by 95% through optimised architecture in a large-scale reminder app. Skilled in
          integrating third-party APIs, payment gateways, social media logins, and push
          notifications. Strong collaborator with excellent communication skills. Verified freelance
          developer with a consistent 5-star rating on 36+ projects.
        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Skills & Tools</h2>
          <div className="space-y-8">
            {[
              {
                category: 'Languages & Frameworks',
                skills: ['Dart', 'Flutter', 'Node.js', 'JavaScript', 'HTML/CSS', 'PHP'],
              },
              {
                category: 'Architecture',
                skills: ['Clean Architecture', 'MVVM', 'MVC', 'SOLID Principles'],
              },
              {
                category: 'State Management',
                skills: ['BloC', 'Provider', 'Riverpod', 'GetX'],
              },
              {
                category: 'Backend & Cloud',
                skills: [
                  'Firebase Auth',
                  'Firestore',
                  'Storage',
                  'Cloud Functions',
                  'Analytics',
                  'Crashlytics',
                ],
              },
              {
                category: 'Database',
                skills: [
                  'SQLite',
                  'Hive',
                  'MongoDB',
                  'Shared Preferences',
                  'Drift',
                  'Secure Storage',
                ],
              },
              {
                category: 'APIs & Integration',
                skills: ['REST APIs', 'RESTful', 'GraphQL', 'WebSocket', 'JSON parsing'],
              },
              {
                category: 'UI/UX',
                skills: [
                  'Material Design',
                  'Cupertino',
                  'Custom Animations',
                  'Responsive Design',
                ],
              },
              {
                category: 'Testing',
                skills: ['Unit Testing', 'Widget Testing', 'Integration Testing'],
              },
              {
                category: 'Tools',
                skills: ['Android Studio', 'VS Code', 'Git', 'GitHub', 'Postman'],
              },
              {
                category: 'CI/CD & DevOps',
                skills: [
                  'GitHub Actions',
                  'Mobile deployment pipelines',
                  'Automated testing',
                  'Release management',
                ],
              },
              {
                category: 'Other',
                skills: [
                  'Stripe',
                  'PayPal',
                  'Google Maps',
                  'Push Notifications',
                ],
              },
            ].map(({ category, skills }) => (
              <div key={category}>
                <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
                  {skills.map(skill => (
                    <Card key={skill}>
                      <CardContent className="p-4 font-semibold text-sm sm:text-base">
                        {skill}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">Gym-Based App</h3>
              <p className="mb-4">
                A mobile-first solution with User, Trainer, and Web Admin modules.
              </p>
              <Button variant="outline">View Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-2">POS App</h3>
              <p className="mb-4">
                Flutter-based POS system for restaurants and small businesses.
              </p>
              <Button variant="outline">View Details</Button>
            </CardContent>
          </Card>
        </div>
      </section> */}

      {/* Experience */}
      <section id="experience" className="py-20 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold mb-16 text-center">Experience</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute top-0 bottom-0 left-3 w-1 bg-gray-300"></div>

          <div className="space-y-16">
            {/* Experience 1 */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0 w-7 h-7 bg-indigo-600 rounded-full mt-0"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Flutter Developer</h3>
                <p className="text-sm text-gray-600">
                  Sanmiwago · Dec 2023 – Dec 2025 | New York · Remote
                </p>
                <p className="mt-2">
                  Lead a mobile development team in building a complete digital ecosystem of more
                  than 10 integrated applications that improved restaurant chain operations from
                  inventory management to customer ordering.
                </p>
                <ul className="list-disc list-inside mt-2 text-lg">
                  <li>
                    Delivered a POS system processing thousands of transactions/month, integrating
                    thermal printers, Stripe, and Socket.io for real-time remote access.
                  </li>
                  <li>
                    Developed mobile & kiosk components of cross-platform ordering suite, increasing
                    customer efficiency by 40%.
                  </li>
                  <li>
                    Contributed to internal logistics & attendance system, reducing manual tracking
                    by 60%.
                  </li>
                  <li>Designed a real-time staff tip calculator.</li>
                  <li>Integrated video conferencing into remote POS ordering system.</li>
                  {/* <li>Built internal chat tool for multi-location coordination.</li> */}
                  <li>
                    Reduced crash rates & improved performance across multiple apps via bug fixes,
                    memory optimization, and refactoring.
                  </li>
                </ul>
                {/* <p className="mt-2 text-sm text-gray-500">Skills: Flutter, Kotlin + 23 more</p> */}
                <p className="mt-2 text-sm text-gray-500">
                  Skills: Flutter Kotlin Swift (Programming Language) Node.js Point of Sale (POS)
                  Systems Kiosk Development Thermal Printers Express.js Stripe WebSocket Socket.io
                  Video Conferencing Zoom Stripe Connect iOS Development Android Development Google
                  Cloud Platform (GCP) Firebase Cloud Firestore REST APIs Mobile Payments Payment
                  Gateways Git GitHub Algolia
                </p>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0 w-7 h-7 bg-indigo-600 rounded-full mt-1"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Flutter Developer</h3>
                <p className="text-sm text-gray-600">
                  Tosty Devs · Dec 2022 – Dec 2023 | Vehari, Pakistan
                </p>
                <ul className="list-disc list-inside mt-2 text-lg">
                  <li>
                    Lead cross-functional team delivering 15+ full-cycle Flutter & web projects.
                  </li>
                  <li>Oversaw task allocation, timelines, and maintained quality standards.</li>
                  <li>
                    Implemented operational planning to meet demand forecasts and scalability.
                  </li>
                </ul>
                {/* <p className="mt-2 text-sm text-gray-500">Skills: Project Management, Project Planning + 6 more</p> */}
                <p className="mt-2 text-sm text-gray-500">
                  Skills: Project Management Project Planning Software Project Management Project
                  Estimation Project Delivery Business Research Agile Project Management Scrum
                </p>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0 w-7 h-7 bg-indigo-600 rounded-full mt-1"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Junior Flutter Developer</h3>
                <p className="text-sm text-gray-600">
                  SkillzUpp Technologies · May 2022 – Dec 2022 | Vehari, Pakistan
                </p>
                <ul className="list-disc list-inside mt-2 text-lg">
                  <li>
                    Designed, developed, deployed 10+ mobile & web apps targeting Android, iOS, Web,
                    Windows.
                  </li>
                  <li>Led app architecture design, API integrations, UI/UX implementation.</li>
                  <li>
                    Built features like payment gateways, push notifications, and real-time data
                    sync using Firebase, REST APIs, WebSockets.
                  </li>
                </ul>
                {/* <p className="mt-2 text-sm text-gray-500">Skills: Flutter, Cross-platform + 24 more</p> */}
                <p className="mt-2 text-sm text-gray-500">
                  Skills: Flutter Cross-platform Development Android Development iOS Development
                  Node.js Mobile Application Development Google Cloud Platform (GCP) Wireframing
                  REST APIs Payment Gateways Git GitHub Stripe Connect JSON Problem Solving
                  Object-Oriented Programming (OOP) Computer Science Firebase Mobile Payments
                  Android Software Design Docker Amazon Web Services (AWS) AWS Lambda AWS
                  MediaConvert
                </p>
              </div>
            </div>

            {/* Experience 4 */}
            <div className="flex items-start relative">
              <div className="flex-shrink-0 w-7 h-7 bg-indigo-600 rounded-full mt-1"></div>
              <div className="ml-6">
                <h3 className="text-xl font-semibold">Flutter Intern</h3>
                <p className="text-sm text-gray-600">
                  Tagnati · March 2022 – May 2022 | Lahore, Pakistan
                </p>
                <ul className="list-disc list-inside mt-2 text-lg">
                  <li>
                    Collaborated on design, development, implementation of mobile apps using Flutter
                    & Dart.
                  </li>
                  <li>Wrote clean code, learned from seniors, followed coding standards.</li>
                  <li>Built user-friendly interfaces using Flutter widgets.</li>
                  <li>Participated in code reviews to improve quality.</li>
                </ul>
                {/* <p className="mt-2 text-sm text-gray-500">Skills: Git, OOP + 7 more</p> */}
                <p className="mt-2 text-sm text-gray-500">
                  Skills: Git Object-Oriented Programming (OOP) Computer Science Android Development
                  Wireframing Flutter REST APIs Debugging Problem Solving
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Let’s Connect</h2>
        <p className="mb-6 text-lg">
          Interested in working together? Reach out via email or connect with me on LinkedIn.
        </p>
        <div className="flex justify-center gap-6">
          <Button
            variant="outline"
            href="https://www.linkedin.com/in/saif-ullah-pathan/"
            target="_blank"
          >
            LinkedIn
          </Button>
          <Button href="mailto:saifullah45152@gmail.com">Email Me</Button>
          <Button variant="outline" href="https://github.com/saifullah45152" target="_blank">
            GitHub
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-900 text-gray-300">
        © {new Date().getFullYear()} Saif Ullah. All rights reserved.
      </footer>
    </div>
  );
}
