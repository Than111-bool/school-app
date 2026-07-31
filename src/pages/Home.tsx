import React from 'react';
import { 
  ChevronLeft, ChevronRight, Users, GraduationCap, BookOpen, 
  Building2, Calendar, ArrowRight 
} from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="font-sans text-gray-800 bg-white">
      
      <section className="relative h-[520px] bg-cover bg-center flex items-center text-white" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?q=80&w=1600&auto=format&fit=crop')` }}>
        
        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2.5 rounded-full shadow-md transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-sm px-3 py-1 rounded-sm">
              WELCOME TO
            </span>
            <h1 className="text-4xl text-amber-300  md:text-5xl font-bold mt-3 mb-4 leading-tight">
              BRIGHT FRUTURE SCHOOL
            </h1>
            <p className="text-sm md:text-base text-gray-100 mb-8 leading-relaxed">
              We provide high quality education and nurture students to become the leaders of tomorrow.
            </p>
            <div className="flex space-x-4">
              <button className="bg-[#be4e0d] hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
                LEARN MORE
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#0d52be] text-sm font-medium px-6 py-3 rounded-md transition-colors">
                APPLY NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">About Our School</h2>
            <div className="w-12 h-1 bg-[#0d52be] mb-6"></div>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              Bright Future School provides a safe and inspiring environment where students can learn, grow and achieve excellence in academic, sports and co-curricular activities.
            </p>
            <button className="bg-[#0d52be] hover:bg-blue-700 text-white text-sm font-medium px-6 py-2.5 rounded-md transition-colors">
              Read More
            </button>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop" 
              alt="Students studying" 
              className="rounded-2xl shadow-lg w-full object-cover h-[300px]"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-blue-50/50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Our Achievements</h2>
          <div className="w-12 h-1 bg-[#0d52be] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
           
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <Users className="w-10 h-10 text-[#0d52be] mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">1200+</h3>
              <p className="text-xs text-gray-500 font-medium">Students</p>
            </div>

            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <GraduationCap className="w-10 h-10 text-emerald-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">80+</h3>
              <p className="text-xs text-gray-500 font-medium">Teachers</p>
            </div>

           
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <BookOpen className="w-10 h-10 text-amber-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">30+</h3>
              <p className="text-xs text-gray-500 font-medium">Courses</p>
            </div>

            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
              <Building2 className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-1">25</h3>
              <p className="text-xs text-gray-500 font-medium">Years Experience</p>
            </div>
          </div>
        </div>
      </section>

    
      <section className="py-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Latest News</h2>
          <div className="w-12 h-1 bg-[#0d52be] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop" 
              alt="Science Fair" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-gray-900 mb-2">Science Fair 2026</h3>
                <div className="flex items-center text-xs text-gray-400 mb-3 space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>May 20, 2026</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Students will participate in the annual science exhibition.
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-xs font-semibold text-[#0d52be] hover:underline">
                Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          
          <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            <img 
              src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=600&auto=format&fit=crop" 
              alt="Sports Day" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-gray-900 mb-2">Sports Day</h3>
                <div className="flex items-center text-xs text-gray-400 mb-3 space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>May 15, 2026</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Join the annual sports competition this September.
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-xs font-semibold text-[#0d52be] hover:underline">
                Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>

          
          <div className="border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col">
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop" 
              alt="Computer Lab" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-base text-gray-900 mb-2">New Computer Lab</h3>
                <div className="flex items-center text-xs text-gray-400 mb-3 space-x-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>May 10, 2026</span>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed mb-6">
                  Our school has opened a modern computer laboratory.
                </p>
              </div>
              <a href="#" className="inline-flex items-center text-xs font-semibold text-[#0d52be] hover:underline">
                Read More <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;