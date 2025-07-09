import { motion } from "framer-motion";
import { Code, Database, Smartphone, Server } from "lucide-react";

export function AboutSection() {
  const journey = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Engineer",
      description: "Currently working at Alphonsol Pvt Ltd, developing innovative solutions",
      color: "text-blue-500",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Full Stack Developer",
      description: "Expertise in Flutter, ASP.NET, and modern web technologies",
      color: "text-emerald-500",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Always exploring new technologies and improving my skills",
      color: "text-purple-500",
    },
  ];

  const skills = [
    { icon: <Smartphone className="w-5 h-5" />, text: "Mobile App Development with Flutter", color: "text-blue-500" },
    { icon: <Server className="w-5 h-5" />, text: "Backend Development with ASP.NET & Node.js", color: "text-emerald-500" },
    { icon: <Database className="w-5 h-5" />, text: "Database Design & Management", color: "text-purple-500" },
    { icon: <Code className="w-5 h-5" />, text: "Full Stack Web Development", color: "text-yellow-500" },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-mono">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and constantly learning new technologies
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gradient font-mono">My Journey</h3>
            <div className="space-y-6">
              {journey.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className={`${item.color} mt-1`}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-2xl p-8"
          >
            <h3 className="text-2xl font-semibold mb-6 text-gradient font-mono">What I Do</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-4"
                >
                  <div className={skill.color}>
                    {skill.icon}
                  </div>
                  <span>{skill.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
