export default function EventOverview() {
  const features = [
    {
      icon: "fas fa-lightbulb",
      title: "Hands-On Learning",
      description: "Gain practical experience through workshops, guided sessions, and real-world challenges"
    },
    {
      icon: "fas fa-chalkboard-teacher",
      title: "Expert-Led Workshops",
      description: "Learn directly from industry professionals through structured technical sessions"
    },
    {
      icon: "fas fa-code",
      title: "Overnight Hackathon",
      description: "Build innovative solutions during an intensive overnight development challenge"
    },
    {
      icon: "fas fa-shield-alt",
      title: "Capture The Flag (CTF)",
      description: "Test your skills in a competitive cybersecurity challenge with real-world scenarios"
    },
    {
      icon: "fas fa-users",
      title: "Team Collaboration",
      description: "Collaborate with peers to brainstorm, build, and solve complex technical problems"
    },
    {
      icon: "fab fa-aws",
      title: "AWS-Powered Experience",
      description: "Explore cloud computing, security, and modern architectures using AWS technologies"
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
            <span className="text-red-600">&gt;</span> What is <span className="text-red-600">Horizon 2026</span>?
          </h2>
          <p className="text-white/80 text-lg max-w-3xl mx-auto leading-relaxed">
            Horizon 2026 is a flagship technical event series organized by AWS Cloud Club at Lovely Professional University, aimed at promoting hands-on learning, innovation, and competitive problem-solving. The series comprises preparatory workshops, technical sessions, and immersive overnight competitions, including a hackathon and a Capture The Flag (CTF). Through real-world problem statements, guided learning, and team-based challenges, participants gain practical exposure to cloud computing, cybersecurity, and modern development practices using AWS technologies. Horizon 2026 offers an inclusive platform for students across skill levels to learn, build, and compete in a structured and engaging environment.
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
              Join Horizon 2026 and challenge yourself with real-world problems, collaborate with peers, and gain hands-on experience in cloud computing and cybersecurity. Whether you're a beginner or an experienced hacker, there's something for everyone.
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
