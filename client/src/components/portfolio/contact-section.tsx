import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";

export function ContactSection() {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "panditsanket2211@gmail.com",
      color: "text-blue-500",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9011835034",
      color: "text-emerald-500",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Mumbai, India",
      color: "text-purple-500",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-6 h-6" />, href: "#", color: "text-gray-400" },
    { icon: <Linkedin className="w-6 h-6" />, href: "#", color: "text-blue-500" },
    { icon: <Twitter className="w-6 h-6" />, href: "#", color: "text-blue-400" },
    { icon: <Instagram className="w-6 h-6" />, href: "#", color: "text-pink-500" },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient font-mono">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's connect!
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-dark rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient font-mono">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-4"
                  >
                    <div className={info.color}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">{info.label}</p>
                      <p className="text-foreground">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-dark rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-gradient font-mono">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    className={`glass-dark p-4 rounded-lg hover:bg-white hover:bg-opacity-20 transition-all duration-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
          
          {/* Contact Message */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-dark rounded-2xl p-6 flex items-center justify-center"
          >
            <div className="text-center">
              <div className="mb-6">
                <Mail className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-gradient font-mono">
                  Let's Connect!
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:panditsanket2211@gmail.com"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 rounded-lg text-white font-medium"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
                <p className="text-sm text-muted-foreground">
                  or reach out via any of the social platforms
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}