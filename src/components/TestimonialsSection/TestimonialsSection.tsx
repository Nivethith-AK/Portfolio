import { motion } from "framer-motion";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "T-Villa Management",
      role: "Mind Body & Soul Resort",
      content: "Nivethith designed an exceptionally serene, luxury digital experience for our wellness resort in Sri Lanka. The visual pacing, responsive design, and attention to detail were outstanding.",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Beta Trading Community",
      role: "LURZ AI Platform",
      content: "The real-time market data streaming and AI confidence scoring built by Nivethith provided an intuitive, high-speed workspace. The explainability behind every setup makes a huge difference.",
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Candidate Reviewer",
      role: "CVForge Platform",
      content: "The ATS resume analyzer and streaming Gemini feedback made resume optimization effortless. The clean interface and accurate ATS breakdown received praise from every test user.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section id="testimonials" className="max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
          Client <span className="text-gradient-primary">Testimonials</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Feedback from talented leaders I've had the pleasure of partnering with throughout my career.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((test, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            className="glass-panel p-8 rounded-3xl border border-foreground/10 flex flex-col relative overflow-hidden group hover:border-primary/30 transition-colors duration-500"
          >
            {/* Subtle glow orb */}
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500 pointer-events-none" />
            
            {/* Quote Icon Background */}
            <div className="absolute top-6 right-8 text-primary/10 select-none">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11l-2 2v-3H4V4h6v7zm10 0l-2 2v-3h-4V4h6v7z" />
              </svg>
            </div>

            <p className="text-muted-foreground leading-relaxed flex-grow relative z-10 italic mb-8">
              "{test.content}"
            </p>

            <div className="flex items-center gap-4 relative z-10 mt-auto">
              <img src={test.image} alt={test.name} className="w-12 h-12 rounded-full object-cover border border-foreground/10" />
              <div>
                <h4 className="text-foreground font-bold text-sm">{test.name}</h4>
                <p className="text-primary text-xs font-medium">{test.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
