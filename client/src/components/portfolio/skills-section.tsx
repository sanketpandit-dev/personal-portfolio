import { motion } from "framer-motion";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: "fab fa-java", color: "text-orange-500" },
        { name: "Dart", icon: "fas fa-code", color: "text-blue-500" },
        { name: "JavaScript", icon: "fab fa-js-square", color: "text-yellow-500" },
        { name: "HTML/CSS", icon: "fab fa-html5", color: "text-orange-600" },
      ],
    },
    {
      title: "Frameworks",
      skills: [
        { name: "Flutter", icon: "fas fa-mobile-alt", color: "text-blue-500" },
        { name: "ASP.NET Web API", icon: "fas fa-server", color: "text-purple-500" },
        { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
        { name: "Firebase", icon: "fas fa-fire", color: "text-orange-500" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "PostgreSQL", icon: "fas fa-database", color: "text-blue-500" },
        { name: "SSMS", icon: "fas fa-database", color: "text-red-500" },
        { name: "MongoDB", icon: "fas fa-leaf", color: "text-green-500" },
        { name: "SQLite", icon: "fas fa-database", color: "text-gray-500" },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git & GitHub", icon: "fab fa-git-alt", color: "text-orange-500" },
        { name: "VS Code", icon: "fas fa-code", color: "text-blue-500" },
        { name: "Android Studio", icon: "fas fa-mobile-alt", color: "text-green-500" },
        { name: "Postman", icon: "fas fa-paper-plane", color: "text-orange-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-mono">
            Skills & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="glass-dark rounded-2xl p-6 hover:bg-opacity-30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-gradient font-mono">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <i className={`${skill.icon} ${skill.color}`} />
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
