export default function EventOverview() {
  const features = [
    {
      icon: "fas fa-shield-alt",
      title: "Real-World Challenges",
      description: "Solve practical cybersecurity problems inspired by industry scenarios"
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Pre-Workshop Training",
      description: "Learn from expert speakers before the competition begins"
    },
    {
      icon: "fas fa-trophy",
      title: "Exciting Prizes",
      description: "Win cash prizes, certificates, and AWS Cloud Club swag"
    },
    {
      icon: "fas fa-moon",
      title: "Overnight Competition",
      description: "12-hour intensive CTF experience from evening to morning"
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Work with teammates to solve complex security challenges"
    },
    {
      icon: "fab fa-aws",
      title: "AWS Integration",
      description: "Learn cloud security concepts with AWS technologies"
    }
  ];

  return (
    <section id="about" className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-950/50 border border-red-600/50 rounded mb-4">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-widest">[ABOUT_EVENT.SYS]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-red-600">&gt;</span> What is <span className="text-red-600">Dawn_CTF</span>?
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Dawn CTF 2026 is a premier 12-hour overnight Capture The Flag cybersecurity competition organized by AWS Cloud Club at Lovely Professional University. The event promotes practical cybersecurity skills through structured learning and competitive problem-solving, including a preparatory workshop followed by an intensive overnight CTF where participants apply technical knowledge to real-world security challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-red-950/20 to-black p-6 rounded-xl border border-red-900/30 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/20"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform text-red-600 group-hover:animate-glitch"><i className={feature.icon}></i></div>
              <h3 className="text-xl font-bold text-white mb-2 transition-colors">{feature.title}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <div className="bg-linear-to-r from-red-950/50 via-red-900/20 to-red-950/50 p-10 rounded-2xl border border-red-900/50 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            <h3 className="text-3xl font-bold text-white mb-4"><span className="text-red-600">&gt;</span> Ready to Test Your Skills?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Join hundreds of cybersecurity enthusiasts for an unforgettable overnight hacking experience. All skill levels welcome!
            </p>
            <a
              href="/register"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-8 py-3 rounded-lg hover:scale-105 transition-all shadow-[0_0_30px_rgba(220,38,38,0.4)] border border-red-500"
            >
                Sign Up Your Team Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
