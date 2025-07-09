import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  const projects = [
    {
      title: "Task Management System",
      description: "A comprehensive task management application with real-time collaboration features",
      icon: "fas fa-tasks",
      gradient: "from-blue-500 to-purple-600",
      technologies: ["Flutter", "Node.js", "MongoDB"],
      github: "#",
      demo: "#",
    },
    {
      title: "Green Force App",
      description: "Environmental awareness mobile application promoting sustainable practices",
      icon: "fas fa-leaf",
      gradient: "from-green-500 to-teal-600",
      technologies: ["Flutter", "Firebase", "Dart"],
      github: "#",
      demo: "#",
    },
    {
      title: "ShopSphere Platform",
      description: "Full-stack e-commerce platform with advanced features and payment integration",
      icon: "fas fa-shopping-cart",
      gradient: "from-purple-500 to-pink-600",
      technologies: ["JavaScript", "ASP.NET", "PostgreSQL"],
      github: "#",
      demo: "#",
    },
  ];

  const techColors: Record<string, string> = {
    Flutter: "bg-blue-500/20 text-blue-400",
    "Node.js": "bg-green-500/20 text-green-400",
    MongoDB: "bg-purple-500/20 text-purple-400",
    Firebase: "bg-orange-500/20 text-orange-400",
    Dart: "bg-red-500/20 text-red-400",
    JavaScript: "bg-yellow-500/20 text-yellow-400",
    "ASP.NET": "bg-purple-500/20 text-purple-400",
    PostgreSQL: "bg-blue-500/20 text-blue-400",
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-mono">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-dark rounded-2xl overflow-hidden project-card"
            >
              {/* Project Preview */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <i className={`${project.icon} text-6xl text-white opacity-80`} />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 font-mono">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded-full text-sm ${techColors[tech]}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-blue-400 hover:text-blue-300"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    asChild
                    className="text-emerald-400 hover:text-emerald-300"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
