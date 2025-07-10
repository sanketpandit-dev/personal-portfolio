import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

export function EducationSection() {
  const education = [
    {
      degree: "Bachelor of Engineering",
      institution: "University of Mumbai",
      field: "Computer Engineering",
      period: "2021 - 2024",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "text-blue-500",
    },
    {
      degree: "Diploma in Computer Engineering",
      institution: "MSBTE",
      field: "Computer Engineering",
      period: "2019 - 2020",
      icon: <Award className="w-6 h-6" />,
      color: "text-emerald-500",
    },
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-mono">
            Education
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Academic foundation and continuous learning
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-dark rounded-2xl p-6 project-card"
            >
              <div className="flex items-center mb-4">
                <div className={`${edu.color} mr-3`}>
                  {edu.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold font-mono">{edu.degree}</h3>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">{edu.field}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
