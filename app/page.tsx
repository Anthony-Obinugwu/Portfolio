"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Menu,
  X,
  Calendar,
  Building,
  Sun,
  Moon,
  ExternalLink,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
    if (!isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "experiences", "about", "technologies", "certifications", "portfolio", "volunteering"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const experiences = [
    {
      title: "IT Specialist",
      company: "Outtabox Group",
      location: "Abuja, Nigeria",
      period: "2025 - Present",
      type: "Full-time",
      description: "Enabling digital efficiency through technology solutions and system optimization.",
      technologies: ["React", "Git", "Slack", "Zoho CRM"],
      achievements: [
        "Implementing digital solutions to improve operational efficiency",
        "Managing and optimizing CRM systems for better customer relationship management",
        "Collaborating with cross-functional teams using modern development tools",
      ],
    },
    {
      title: "Quality Assurance Developer/Engineer Intern",
      company: "Trusted Transfers",
      location: "Lagos, Nigeria",
      period: "2024",
      type: "Remote",
      description: "Focused on quality assurance and development tasks using various testing and tracking tools.",
      technologies: ["PostgreSQL", "Postman", "Slack", "ClickUp", "Jam", "API Testing"],
      achievements: [
        "Conducted thorough QA processes using Jam for recording findings",
        "Utilized Slack and ClickUp for task management and communication",
        "Performed database manipulation with PostgreSQL and API testing via Postman",
      ],
    },
    {
      title: "Java Backend Intern",
      company: "ActivEdge Technologies",
      location: "Lagos, Nigeria",
      period: "2024",
      type: "On-site",
      description: "Developed backend solutions using Java, Spring framework, and REST APIs.",
      technologies: ["Java", "Spring", "REST API", "Git", "Slack", "Clockify"],
      achievements: [
        "Received recommendations from Engineering Lead for rapid project completion",
        "Developed a working day randomizer for the company",
        "Created an ATM demo project and successfully onboarded it to Spring",
      ],
    },
    {
      title: "IT Support Intern",
      company: "Wills Smart Technology",
      location: "Abuja, Nigeria",
      period: "2023",
      type: "On-site",
      description: "Provided technical assistance and engaged in various clerical and marketing activities.",
      technologies: ["Technical Support", "Content Creation", "Marketing", "Documentation"],
      achievements: [
        "Delivered technical support and troubleshooting for software and hardware issues",
        "Assisted in content creation and marketing campaigns",
        "Managed inventory and performed clerical activities",
      ],
    },
  ]

  const volunteeringExperiences = [
    {
      title: "Chief Operating Officer (COO)",
      company: "TrixMart",
      location: "Abuja, Nigeria",
      period: "2025 - Present",
      type: "Full-time",
      description:
        "Leading operations for a student-to-student marketplace connecting buyers and sellers in the educational ecosystem.",
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Stripe",
        "Flutter",
        "Firebase",
        "Project Management",
      ],
      achievements: [
        "Built and managed a seller base of over 100+ active vendors",
        "Grew customer base to over 2,000+ registered users",
        "Achieved over ₦500,000+ in monthly sales volume since launch",
        "Developed strategic partnerships with educational institutions",
      ],
      websiteUrl: "https://trix-mart-landing-page.vercel.app/",
      hasVideo: true,
    },
    {
      title: "E-commerce Manager",
      company: "TDotWheels.ca & JFCandles.ca",
      location: "Remote",
      period: "2023 - 2025",
      type: "Part-time",
      description:
        "Managed end-to-end e-commerce operations for automotive and home fragrance businesses, driving digital growth and customer engagement.",
      technologies: [
        "Shopify",
        "Google Analytics",
        "Social Media Marketing",
        "Customer Service",
        "Inventory Management",
      ],
      achievements: [
        "Optimized product listings and improved conversion rates across both platforms",
        "Implemented customer service strategies that enhanced user experience",
        "Managed inventory systems and coordinated with suppliers for timely fulfillment",
        "Developed marketing campaigns that increased brand visibility and sales",
      ],
    },
  ]

  const technologies = {
    languages: [
      {
        name: "Java",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RG309deslE1Pn5bdKvYDqBMlfnrhbU.png",
      },
      {
        name: "JavaScript",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3lQDnT3rczfw8mYrfU0t1cJQ5IiNjl.png",
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iwZDMNdkkx286Ychgldhb44Qy7mYoe.png",
      },
      {
        name: "Python",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DzvyNhIg5FLg6CwgK7nk0REC3BcP6K.png",
      },
      {
        name: "React",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qHuqmU6wA84Fp7Q3LsHgu0Y9USWVAs.png",
      },
      {
        name: "SQL",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CSFDTKzk0ovS1hX7ArBRPgPJXFD2fn.png",
      },
    ],
    frameworks: [
      {
        name: "Spring",
        level: "Beginner",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PYBQaWNPNQ4XLldO1G1azuDaXjd1hT.png",
      },
      {
        name: "Express.js",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vBrBcJsoB2TkC0mCziNRF0bxoFHSPT.png",
      },
      {
        name: "LangChain",
        level: "Beginner",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IiJDi6ng0Z2BdNT9wxMSV9DjQGx0hW.png",
      },
      {
        name: "Firebase",
        level: "Intermediate",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wZ5J3wQm87xDSRgWOFrWMurM2GS9ax.png",
      },
    ],
    tools: [
      {
        name: "Git",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-X6u2ApxLSfBakGq8JRLe0FeK6u8dNx.png",
      },
      {
        name: "Postman",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-OXL9NQlN3HNZD0mghnRfYeWmYRxBk3.png",
      },
      {
        name: "PgAdmin4",
        icon: "🐘",
      },
      {
        name: "ClickUp",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-52EyAOSRK5a9CictDLMxIKYcM2EIf7.png",
      },
      {
        name: "GitHub",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VkrOTlABuLCIM62FUeyg5L0yl6UDnv.png",
      },
      {
        name: "Slack",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-nLfAWeoirL0ugW7cQAMs3cfTo0mqFe.png",
      },
      {
        name: "Jira",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-3UnewaKp91XeGyjJCq2Xbv5wbsKWFW.png",
      },
    ],
    databases: [
      {
        name: "PostgreSQL",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-foLle0DM8Qe1DfBLgMORoCiaGouiQA.png",
      },
      {
        name: "MySQL",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fD7LqtOFOtjlJVTT4vWHiVz1X5hhZY.png",
      },
      {
        name: "SQLite",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-h44EiJ7tTog1tLYRMIYHAHJayMQbAp.png",
      },
      {
        name: "Firebase Storage",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wZ5J3wQm87xDSRgWOFrWMurM2GS9ax.png",
      },
      {
        name: "AWS S3",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MJ2oGvfP4NeHBIzMwFjroQ7gMmmVdm.png",
      },
      {
        name: "Aurora",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-52B77lxm5MjcZ07MXhFTUPBhZ8FZWP.png",
      },
    ],
    cloud: [
      {
        name: "Vercel",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-dgihC07AbSpdlbwq0BcN0kXCe52rrV.png",
      },
      {
        name: "DigitalOcean",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gsgkUxzAuuHROkqSSKjeuuCJ4iEYDN.png",
      },
      {
        name: "Railway",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-rC6a9jaYUSVB5eF7dfbbaWQtXdvlnf.png",
      },
      {
        name: "Elastic Beanstalk",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jEAZJxxsHoTUY3fMnm2laCAcfAJdVR.png",
      },
    ],
    automation: [
      {
        name: "Amazon Bedrock",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8MX0iN4X71WuI6y4kq8eCGQOGxMsG9.png",
      },
      {
        name: "LangChain",
        logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-IiJDi6ng0Z2BdNT9wxMSV9DjQGx0hW.png",
      },
    ],
  }

  const certifications = [
    {
      title: "Digital Skills: Artificial Intelligence",
      issuer: "Accenture",
      platform: "FutureLearn",
      date: "July 4, 2024",
      duration: "3 weeks, 2 hours per week",
      score: "86%",
      description:
        "Comprehensive course exploring the potential of Artificial Intelligence and its impact on the workplace. Covered AI fundamentals, industry applications, and strategies for adapting skills to work alongside AI systems.",
      skills: [
        "AI Fundamentals",
        "Generative AI",
        "AI in Industry",
        "Human-AI Collaboration",
        "Future Skills Planning",
      ],
      certificateUrl: "https://futurelearn.com/certificates/b4l3elq",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-jEAZJxxsHoTUY3fMnm2laCAcfAJdVR.png",
    },
    {
      title: "Responsive Web Design Developer Certification",
      issuer: "freeCodeCamp",
      platform: "freeCodeCamp.org",
      date: "April 14, 2024",
      duration: "~300 hours of coursework",
      description:
        "Comprehensive certification covering HTML, CSS, responsive design principles, CSS Grid, Flexbox, and accessibility. Built multiple projects demonstrating proficiency in creating responsive, accessible web interfaces.",
      skills: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "Flexbox", "Web Accessibility"],
      certificateUrl: "https://freecodecamp.org/certification/htmlkill/responsive-web-design",
      logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-10%20at%2022.41.30-SW3gNWxLMtQoPBSmm9K5IaYWREigV6.png",
    },
  ]

  const projects = [
    {
      title: "Working Day Randomizer",
      description:
        "A Spring-based application that randomizes working days for ActivEdge Technologies, improving team scheduling efficiency.",
      technologies: ["Java", "Spring", "REST API"],
      type: "Backend Application",
      image: "/working-day-randomizer-dashboard.png",
      githubUrl: "https://github.com/Anthony-Obinugwu/Roster-Project-Springboot-",
    },
    {
      title: "TrixMart Registration Bot",
      description:
        "An intelligent registration system built with Spring, React, TypeScript, and JavaScript. Used WhatsApp's web.js to collect information from students by turning my phone number into a bot, then storing the data in a database for seamless student onboarding.",
      technologies: ["Spring", "React", "TypeScript", "JavaScript", "WhatsApp Web.js", "Database"],
      type: "Full-Stack Application",
      image: "/whatsapp-bot-registration.png",
      githubUrl: "https://github.com/Anthony-Obinugwu/trixMartWhatsappBot",
    },
    {
      title: "Company Landing Page",
      description:
        "A modern, responsive landing page designed and developed for my company, showcasing services, team, and company values with an elegant user interface.",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      type: "Frontend Application",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-10%20at%2023.51.17-EtamTQYkFO2jH0qKdkz3YtT0qVc5Mp.png",
      githubUrl: "https://github.com/Anthony-Obinugwu/landingPageO",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Dark Mode Toggle - Left Side */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors duration-300">
                Lumos
              </span>
              <button
                onClick={toggleDarkMode}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-200 dark:bg-slate-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
                role="switch"
                aria-checked={isDarkMode}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white dark:bg-slate-900 transition-transform duration-300 flex items-center justify-center ${
                    isDarkMode ? "translate-x-6" : "translate-x-1"
                  }`}
                >
                  {isDarkMode ? (
                    <Moon size={12} className="text-slate-400" />
                  ) : (
                    <Sun size={12} className="text-yellow-500" />
                  )}
                </span>
              </button>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors duration-300">
                Nox
              </span>
            </div>

            {/* Right Side Content */}
            <div className="flex items-center gap-6">
              <div className="font-bold text-xl text-slate-800 dark:text-white transition-colors duration-300">
                {""}
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex space-x-8">
                {[
                  { id: "home", label: "Home" },
                  { id: "experiences", label: "Experiences" },
                  { id: "about", label: "About" },
                  { id: "technologies", label: "Technologies" },
                  { id: "certifications", label: "Certifications" },
                  { id: "portfolio", label: "Portfolio" },
                  { id: "volunteering", label: "Leadership" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400"
                        : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              {/* Mobile Navigation Button */}
              <button
                className="md:hidden text-slate-600 dark:text-slate-300 transition-colors duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
              {[
                { id: "home", label: "Home" },
                { id: "experiences", label: "Experiences" },
                { id: "about", label: "About" },
                { id: "technologies", label: "Technologies" },
                { id: "certifications", label: "Certifications" },
                { id: "portfolio", label: "Portfolio" },
                { id: "volunteering", label: "Leadership" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300">
                Software Developer
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl transition-colors duration-300">
                "I'm not a great programmer; i'm just a good programmer with great habits." ~ Kent Beck
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("portfolio")}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-8 py-3 transition-colors duration-300"
                >
                  View My Work
                </Button>
                <Button
                  variant="outline"
                  onClick={() => window.open("/anthony-chinedu-cv.pdf", "_blank")}
                  className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-3 transition-colors duration-300"
                >
                  View CV
                </Button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* Experiences Section */}
      <section
        id="experiences"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Professional Experiences
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-blue-500 dark:border-l-blue-400 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800 dark:border-slate-700"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-300 mb-3 transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="w-fit bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                    {exp.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                      Key Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 transition-colors duration-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8 transition-colors duration-300">
            About Me
          </h2>
          <div className="prose prose-lg mx-auto text-slate-600 dark:text-slate-300 transition-colors duration-300">
            <p className="mb-6">
              Hi, I'm{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">
                Anthony Chinedu O.
              </strong>
              , a passionate{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">
                Software Developer
              </strong>
              . I studied Computing Science at Nile University and have co-built a startup while leading student clubs
              and organising seminars and events. As a software developer I work across{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">Java</strong>,{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">Python</strong> and{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">SQL</strong>, using{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">Spring Boot</strong>,{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">Postman</strong>,{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">Docker</strong> and{" "}
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">Git</strong> to design,
              build and test full-stack applications deployed to Vercel and AWS; I also integrate LLM/AI tooling
              <strong className="text-slate-900 dark:text-white transition-colors duration-300">
                (LangChain, AstraDB)
              </strong>{" "}
              to enhance product capabilities. I follow disciplined engineering practices that produce clean, testable
              code and great UX — as Kent Beck puts it,{" "}
              {"\"I'm not a great programmer, I'm just a good programmer with great habits.\""}
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section
        id="technologies"
        className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(technologies).map(([category, techList]) => {
              const categoryTitles = {
                languages: "Languages",
                frameworks: "Frameworks",
                tools: "Tools",
                databases: "Databases & Storage",
                cloud: "Cloud & Deployment",
                automation: "AI & Automation",
              }

              return (
                <div key={category}>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4 transition-colors duration-300">
                    {categoryTitles[category] || category.charAt(0).toUpperCase() + category.slice(1)}
                  </h3>
                  <div className="space-y-3">
                    {techList.map((tech, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-white dark:bg-slate-800 rounded-md shadow-sm hover:shadow-md transition-all duration-300 p-4 dark:border-slate-700"
                      >
                        <div className="flex items-center gap-3">
                          {tech.logo ? (
                            <img
                              src={tech.logo || "/placeholder.svg"}
                              alt={`${tech.name} logo`}
                              className="w-6 h-6 object-contain"
                            />
                          ) : (
                            <span className="text-xl">{tech.icon}</span>
                          )}
                          <span className="font-medium text-slate-900 dark:text-white transition-colors duration-300">
                            {tech.name}
                          </span>
                        </div>
                        {tech.level && (
                          <Badge
                            variant="outline"
                            className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                          >
                            {tech.level}
                          </Badge>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Certifications
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="shadow-sm hover:shadow-lg transition-all duration-300 bg-white dark:bg-slate-800 dark:border-slate-700 border-l-4 border-l-green-500 dark:border-l-green-400"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <img
                        src={cert.logo || "/placeholder.svg"}
                        alt={`${cert.issuer} logo`}
                        className="w-12 h-12 object-contain rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                        {cert.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
                        >
                          {cert.issuer}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                        >
                          {cert.date}
                        </Badge>
                        {cert.score && (
                          <Badge
                            variant="outline"
                            className="border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300"
                          >
                            Score: {cert.score}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm leading-relaxed transition-colors duration-300">
                    {cert.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm text-slate-500 dark:text-slate-400 mb-2 transition-colors duration-300">
                      <strong>Duration:</strong> {cert.duration}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Portfolio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white dark:bg-slate-800 dark:border-slate-700 overflow-hidden"
              >
                <div className="relative h-48 bg-slate-100 dark:bg-slate-700">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-8 h-8 bg-white dark:bg-slate-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110"
                    >
                      <Github size={16} className="text-slate-700 dark:text-slate-300" />
                    </a>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Badge
                      variant="outline"
                      className="mb-3 text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                    >
                      {project.type}
                    </Badge>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering & Leadership Section */}
      <section id="volunteering" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center transition-colors duration-300">
            Volunteering & Leadership
          </h2>

          <div className="space-y-8">
            {volunteeringExperiences.map((exp, index) => (
              <Card
                key={index}
                className="border-l-4 border-l-green-500 dark:border-l-green-400 shadow-sm hover:shadow-md transition-all duration-300 bg-white dark:bg-slate-800 dark:border-slate-700"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-slate-600 dark:text-slate-300 mb-3 transition-colors duration-300">
                        <div className="flex items-center gap-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar size={16} />
                          <span>{exp.period}</span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="w-fit bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 transition-colors duration-300"
                        >
                          {exp.type}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-4 transition-colors duration-300">
                    {exp.description}
                  </p>

                  {exp.hasVideo && (
                    <div className="mb-4">
                      <div className="relative h-64 bg-slate-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                        <img
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-10%20at%2023.38.24-l8dWt8treAP20UBJtDO1FLZ26oSHkW.png"
                          alt="TrixMart Landing Page"
                          className="w-full h-full object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                          onClick={() => window.open("https://trix-mart-landing-page.vercel.app/", "_blank")}
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors duration-300 flex items-center justify-center"></div>
                      </div>
                    </div>
                  )}

                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                      Key Technologies & Skills:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-medium text-slate-900 dark:text-white mb-2 transition-colors duration-300">
                      Key Achievements:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-slate-600 dark:text-slate-300 transition-colors duration-300">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-sm">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {exp.websiteUrl && (
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="bg-transparent border-green-500 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors duration-300"
                        onClick={() => window.open(exp.websiteUrl, "_blank")}
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Visit TrixMart
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900 dark:bg-slate-950 text-white transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-xl text-slate-300 dark:text-slate-400 mb-12 transition-colors duration-300">
            I'm always open to discussing new opportunities and interesting projects.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Nigeria</h3>
                <p className="text-slate-300 dark:text-slate-400 transition-colors duration-300 text-sm">
                  Lekki, Lagos, Nigeria
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Canada</h3>
                <p className="text-slate-300 dark:text-slate-400 transition-colors duration-300 text-sm">
                  230 Oak Street, Toronto ON
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-slate-300 dark:text-slate-400 transition-colors duration-300 text-sm">
                  NG: (+234) 701-734-9468
                </p>
                <p className="text-slate-300 dark:text-slate-400 transition-colors duration-300 text-sm">
                  CA: +1 (437) 215-6256
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-slate-300 dark:text-slate-400 transition-colors duration-300 text-sm">
                  obinugwuchinedu1@gmail.com
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center gap-6">
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 dark:border-slate-500 text-white hover:bg-slate-800 dark:hover:bg-slate-900 bg-transparent transition-colors duration-300"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/anthony-obinugwu-03ba23199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
                  "_blank",
                )
              }
            >
              <Linkedin size={20} className="mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-slate-600 dark:border-slate-500 text-white hover:bg-slate-800 dark:hover:bg-slate-900 bg-transparent transition-colors duration-300"
              onClick={() => window.open("https://github.com/Anthony-Obinugwu", "_blank")}
            >
              <Github size={20} className="mr-2" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-950 dark:bg-black text-slate-400 dark:text-slate-500 text-center transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <p>&copy; 2024 Anthony Chinedu O. All rights reserved.</p>
          <p className="mt-2 text-sm">If I can do it, you can too. </p>
        </div>
      </footer>
    </div>
  )
}
