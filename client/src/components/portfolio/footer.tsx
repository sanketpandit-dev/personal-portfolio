import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";

export function Footer() {
  const { scrollToTop, scrollToElement, scrollProgress } = useScroll();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold text-gradient font-mono mb-4 md:mb-0"
            >
              Sanket Pandit
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex space-x-6 mb-4 md:mb-0"
            >
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToElement(item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-sm"
            >
              © 2024 Sanket Pandit. All rights reserved.
            </motion.div>
          </div>
        </div>
      </footer>
      
      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 glass-dark p-4 rounded-full hover:bg-white hover:bg-opacity-20 transition-all duration-300 transform hover:scale-110 ${
          scrollProgress > 10 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </>
  );
}
