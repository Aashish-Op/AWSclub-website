export default function OrganizerInfo() {
return (
    <section className="w-full bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-950/50 border border-red-600/50 rounded mb-4">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-widest">[ORGANIZERS.SYS]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-red-600">&gt;</span> Powered by <span className="text-red-600">AWS_Cloud_Club</span>
          </h2>
        </div>

        <div className="bg-linear-to-br from-red-950/20 to-black rounded-2xl shadow-2xl p-10 border border-red-900/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <img src="/image/logo/awslpu.png" alt="AWS Cloud Club LPU" className="h-20 mb-6 mx-auto md:mx-0 drop-shadow-lg" />
              <h3 className="text-3xl font-bold text-white mb-3">AWS Cloud Club</h3>
              <p className="text-xl text-white/70 mb-4">Lovely Professional University</p>
              <p className="text-white/80 leading-relaxed mb-6">
                AWS Cloud Club at LPU is a student-driven community focused on cloud computing, cybersecurity, and emerging technologies. We organize workshops, hackathons, and competitions to help students gain practical experience with AWS services and industry-standard tools.
              </p>
              <a 
                href="https://awslpu.in" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)] border border-red-500"
              >
                Visit Our Website →
              </a>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-black/40 p-6 rounded-xl border border-red-900/30 hover:border-red-600 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:animate-glitch">900+</div>
                <div className="text-white/70 text-sm">Active Members</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-red-900/30 hover:border-red-600 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:animate-glitch">10+</div>
                <div className="text-white/70 text-sm">Events Hosted</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-red-900/30 hover:border-red-600 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:animate-glitch">5K+</div>
                <div className="text-white/70 text-sm">Students Reached</div>
              </div>
              <div className="bg-black/40 p-6 rounded-xl border border-red-900/30 hover:border-red-600 transition-all group">
                <div className="text-4xl font-bold text-red-600 mb-2 group-hover:animate-glitch">100+</div>
                <div className="text-white/70 text-sm">Hours of Workshops</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 text-sm mb-6">[SUPPORTED_BY]</p>
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <div className="bg-black/40 px-8 py-4 rounded-lg border border-red-900/30 hover:border-red-600 transition-all">
              <span className="text-white/70 font-semibold">Lovely Professional University</span>
            </div>
            <div className="bg-black/40 px-8 py-4 rounded-lg border border-red-900/30 hover:border-red-600 transition-all">
              <span className="text-white/70 font-semibold">AWS Educate</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
