import { motion } from "framer-motion";
import { Briefcase, Code, CheckCircle } from "lucide-react";

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Alphonsol Pvt Ltd",
      period: "Jan 2024 - Present",
      icon: <Briefcase className="w-6 h-6" />,
      color: "text-blue-500",
      achievements: [
        "Developed enterprise ticketing system with ASP.NET Web API",
        "Built Hi Connect Agent App using Flutter",
        "Implemented real-time features and database optimization",
      ],
    },
    {
      title: "Web Development Intern",
      company: "PHN Technology",
      period: "2023",
      icon: <Code className="w-6 h-6" />,
      color: "text-emerald-500",
      achievements: [
        "Gained hands-on experience with modern web technologies",
        "Worked on responsive web applications",
        "Collaborated with senior developers on projects",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-mono">
            Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional journey and key achievements
          </p>
        </motion.div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="timeline-line hidden md:block" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`timeline-item grid md:grid-cols-2 gap-8 ${
                  index % 2 === 0 ? "" : "md:justify-items-end"
                }`}
              >
                <div
                  className={`glass-dark rounded-2xl p-6 project-card ${
                    index % 2 === 0 ? "" : "md:order-2"
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`${exp.color} mr-3`}>
                      {exp.icon}
                    </div>
                    <h3 className="text-xl font-semibold font-mono">{exp.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {exp.company} • {exp.period}
                  </p>
                  <ul className="space-y-2 text-sm">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {index % 2 === 1 && <div className="hidden md:block" />}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
