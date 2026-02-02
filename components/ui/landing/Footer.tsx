export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white mt-20">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-red-600/50 to-transparent"></div>
      
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-12 gap-12 mb-12">
          <div className="md:col-span-5">
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-red-600/20 blur-2xl"></div>
              <img src="/image/logo/awslpu.png" alt="AWS Cloud Club" className="h-14 relative z-10" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3"><span className="text-red-600">&gt;</span> HORIZON 2026</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-md">
              A premier series of overnight competitions organized by AWS Cloud Club at Lovely Professional University. Join us for an unforgettable hacking experience.
            </p>
            
            <div className="flex gap-3">
              <a href="https://www.linkedin.com/company/aws-cloud-community-lpu" target="_blank" rel="noopener noreferrer" 
                 className="relative group w-11 h-11 bg-red-950/20 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all border border-red-900/30 hover:border-red-600">
                <i className="fab fa-linkedin text-lg text-red-600 group-hover:text-white"></i>
              </a>
              <a href="https://instagram.com/awscloudcommunity.lpu" target="_blank" rel="noopener noreferrer" 
                 className="relative group w-11 h-11 bg-red-950/20 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all border border-red-900/30 hover:border-red-600">
                <i className="fab fa-instagram text-lg text-red-600 group-hover:text-white"></i>
              </a>
              <a href="mailto:club@awslpu.in" 
                 className="relative group w-11 h-11 bg-red-950/20 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all border border-red-900/30 hover:border-red-600">
                <i className="fas fa-envelope text-lg text-red-600 group-hover:text-white"></i>
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-base font-bold text-red-600 mb-5 uppercase tracking-widest">[NAVIGATION]</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/60 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform text-red-600"></i>
                  About Event
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-white/60 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform text-red-600"></i>
                  Schedule
                </a>
              </li>
              <li>
                <a href="/register" className="text-white/60 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform text-red-600"></i>
                  Participate Now
                </a>
              </li>
              <li>
                <a href="/rules" className="text-white/60 hover:text-red-500 transition-colors text-sm flex items-center gap-2 group">
                  <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition-transform text-red-600"></i>
                  Rules & Guidelines
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-base font-bold text-red-600 mb-5 uppercase tracking-widest">[CONTACT]</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 bg-red-950/20 rounded-lg flex items-center justify-center shrink-0 border border-red-900/30">
                  <i className="fas fa-envelope text-red-600"></i>
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-1">Email</div>
                  <a href="mailto:club@awslpu.in" className="text-white hover:text-red-500 transition-colors font-medium">club@awslpu.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 bg-red-950/20 rounded-lg flex items-center justify-center shrink-0 border border-red-900/30">
                  <i className="fas fa-globe text-red-600"></i>
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-1">Website</div>
                  <a href="https://awslpu.in" rel="noopener noreferrer" className="text-white hover:text-red-500 transition-colors font-medium">awslpu.in</a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <div className="w-10 h-10 bg-red-950/20 rounded-lg flex items-center justify-center shrink-0 border border-red-900/30">
                  <i className="fas fa-map-marker-alt text-red-600"></i>
                </div>
                <div>
                  <div className="text-white/40 text-xs mb-1">Location</div>
                  <span className="text-white/80 font-medium">Lovely Professional University<br/>Punjab, India</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="relative pt-8 border-t border-red-900/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm text-center md:text-left">
              &copy; 2026 Horizon Series. All rights reserved. Powered by <span className="text-red-600 font-medium">AWS Cloud Club LPU</span>.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" rel="noopener noreferrer" className="text-white/50 hover:text-red-500 transition-colors">Privacy Policy</a>
              <a href="/terms" rel="noopener noreferrer" className="text-white/50 hover:text-red-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
