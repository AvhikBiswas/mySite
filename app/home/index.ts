// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useEffect } from 'react';
const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            const sections = ['hero', 'about', 'experience', 'tech', 'contact'];
            const currentSection = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (currentSection) {
                setActiveSection(currentSection);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <div className= "min-h-screen bg-black text-white font-mono" >
        {/* Navigation */ }
        < nav className = "fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-800" >
            <div className="max-w-7xl mx-auto px-6 py-4" >
                <div className="flex justify-between items-center" >
                    <div className="text-xl font-bold cursor-pointer" onClick = {() => scrollToSection('hero')}>
                        AB
                        </div>
{/* Desktop Navigation */ }
<div className="hidden md:flex space-x-8" >
{
    ['About', 'Experience', 'Tech', 'Contact'].map((item) => (
        <button
key= { item }
onClick = {() => scrollToSection(item.toLowerCase())}
className = {`text-sm hover:text-gray-300 transition-colors cursor-pointer ${activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400'
    }`}
>
    { item }
    </button>
))}
</div>
{/* Mobile Menu Button */ }
<button
className="md:hidden cursor-pointer"
onClick = {() => setIsMenuOpen(!isMenuOpen)}
>
    <i className={ `fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl` }> </i>
        </button>
        </div>
{/* Mobile Menu */ }
{
    isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-800" >
            <div className="flex flex-col space-y-4 pt-4" >
            {
                ['About', 'Experience', 'Tech', 'Contact'].map((item) => (
                    <button
key= { item }
onClick = {() => scrollToSection(item.toLowerCase())}
    className = "text-left text-gray-400 hover:text-white transition-colors cursor-pointer"
        >
        { item }
        </button>
))
}
</div>
    </div>
)}
</div>
    </nav>
{/* Progress Indicator */ }
<div className="fixed top-0 left-0 w-full h-1 bg-gray-900 z-50" >
    <div
className="h-full bg-white transition-all duration-300"
style = {{ width: `${Math.min((scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` }}
> </div>
    </div>
{/* Hero Section */ }
<section id="hero" className = "min-h-screen flex items-center relative overflow-hidden bg-black" >
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black" > </div>
        < div
className = "absolute inset-0 opacity-30"
style = {{
    backgroundImage: 'https://readdy.ai/api/search-image?query=modern%20abstract%20technological%20landscape%20with%20flowing%20digital%20waves%20and%20geometric%20patterns%20creating%20a%20sophisticated%20atmosphere%20with%20subtle%20depth%20and%20minimalist%20design%20elements%20in%20monochromatic%20style&width=1440&height=1024&seq=hero-bg-002&orientation=landscape',
        backgroundSize: 'cover',
            backgroundPosition: 'center',
                transform: `translateY(${scrollY * 0.5}px)`
}}
> </div>

    < div className = "relative z-10 max-w-7xl mx-auto px-6 w-full" >
        <div className="grid md:grid-cols-2 gap-12 items-center" >
            <div className="space-y-8" >
                <div>
                <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent" >
                    AVHIK BISWAS
                        </h1>
                        < div className = "text-xl md:text-2xl text-gray-400 font-light" >
                            Software Engineer @HomeAbroad
</div>
    </div>

    < div className = "space-y-4 relative" >
        <div className="text-lg md:text-xl text-gray-300 font-light border-l-2 border-white/20 pl-4" >
            <span className="block mb-2" > "Building, Breaking, Finding Meaning" </span>
                < div className = "flex items-center gap-3 text-sm text-gray-400" >
                    <i className="fas fa-robot" > </i>
                        < span > - ChatGPT, while debugging its own existence </span>
                            </div>
                            </div>
                            </div>

                            < div className = "flex items-center gap-6" >
                                <button
onClick={ () => window.open('https://cal.com/avhikbiswas', '_blank') }
className = "!rounded-button whitespace-nowrap bg-white text-black px-8 py-3 text-lg font-medium hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 cursor-pointer flex items-center gap-2"
    >
    <i className="fas fa-calendar-alt" > </i>
Schedule a Call
    </button>

    < div className = "flex gap-4" >
        <a href="https://linkedin.com/in/avhikbiswas" className = "w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors cursor-pointer group" >
            <i className="fab fa-linkedin text-gray-400 group-hover:text-white transition-colors" > </i>
                </a>
                < a href = "https://github.com/avhikbiswas" className = "w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-white transition-colors cursor-pointer group" >
                    <i className="fab fa-github text-gray-400 group-hover:text-white transition-colors" > </i>
                        </a>
                        </div>
                        </div>
                        </div>

                        < div className = "hidden md:block relative" >
                            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" > </div>
                                < div className = "absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-3xl" > </div>
                                    < div className = "relative aspect-square rounded-2xl overflow-hidden border border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500" >
                                        <img
src="https://readdy.ai/api/search-image?query=modern%20minimalist%20workspace%20with%20floating%20geometric%20shapes%20and%20digital%20elements%20creating%20a%20futuristic%20atmosphere%20perfect%20for%20software%20development%20with%20clean%20lines%20and%20sophisticated%20design&width=800&height=800&seq=hero-feature&orientation=squarish"
alt = "Creative Workspace"
className = "w-full h-full object-cover"
    />
    </div>
    </div>
    </div>
    </div>

    < div className = "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2" >
        <div className="text-sm text-gray-500" > Scroll to explore </div>
            < i className = "fas fa-chevron-down text-xl text-gray-500 animate-bounce" > </i>
                </div>
                </section>
{/* About Section */ }
<section id="about" className = "py-20 px-6" >
    <div className="max-w-6xl mx-auto" >
        <div className="grid md:grid-cols-2 gap-16 items-center" >
            <div className="relative" >
                <div className="aspect-square overflow-hidden rounded-lg bg-gray-900" >
                    <img
src="https://readdy.ai/api/search-image?query=professional%20headshot%20portrait%20of%20a%20young%20software%20engineer%20in%20monochromatic%20black%20and%20white%20style%20with%20clean%20modern%20lighting%20and%20minimalist%20background%20showing%20confidence%20and%20technical%20expertise&width=500&height=500&seq=profile-001&orientation=squarish"
alt = "Avhik Biswas"
className = "w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer"
    />
    </div>
    < div className = "absolute -top-4 -right-4 w-24 h-24 border border-gray-700 rounded-lg" > </div>
        </div>
        < div className = "space-y-6" >
            <h2 className="text-4xl md:text-5xl font-bold mb-8" > About Me </h2>
                < div className = "space-y-4 text-gray-300 leading-relaxed" >
                    <p>
                    I am a passionate software engineer with a deep love for creating meaningful digital experiences.
My journey in technology began with curiosity and has evolved into a commitment to building
solutions that make a difference.
</p>
    <p>
Currently working at TechCorp, I specialize in full - stack development with a focus on modern
web technologies.I believe in the power of clean code, thoughtful design, and continuous learning.
</p>
    <p>
When I am not coding, you will find me exploring new technologies, contributing to open - source
projects, or sharing knowledge with the developer community.I am always excited to connect
with fellow engineers and discuss the latest trends in software development.
</p>
    </div>
    </div>
    </div>
    </div>
    </section>
{/* Experience Timeline */ }
<section id="experience" className = "py-20 px-6 bg-gray-900/20" >
    <div className="max-w-4xl mx-auto" >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" > Experience </h2>
            < div className = "relative" >
                {/* Timeline Line */ }
                < div className = "absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gray-700" > </div>
{/* Timeline Items */ }
<div className="space-y-16" >
    {/* Experience 1 */ }
    < div className = "relative flex items-center" >
        <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10" > </div>
            < div className = "ml-16 md:ml-0 md:w-1/2 md:pr-8" >
                <div className="bg-black border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition-colors cursor-pointer" >
                    <div className="text-sm text-gray-400 mb-2" > 2023 - Present </div>
                        < h3 className = "text-xl font-bold mb-2" > Software Engineer </h3>
                            < div className = "text-gray-400 mb-4" > HomeAbroad </div>
                                < p className = "text-gray-300 mb-4" >
                                    Leading development of scalable web applications using Next.js and modern technologies.
                                        Driving technical decisions and implementing best practices.
</p>
    < div className = "flex flex-wrap gap-2" >
        <span className="px-3 py-1 bg-gray-800 text-xs rounded-full" > Next.js </span>
            < span className = "px-3 py-1 bg-gray-800 text-xs rounded-full" > TypeScript </span>
                < span className = "px-3 py-1 bg-gray-800 text-xs rounded-full" > Node.js </span>
                    </div>
                    </div>
                    </div>
                    </div>
{/* Experience 2 */ }
<div className="relative flex items-center" >
    <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black z-10" > </div>
        < div className = "ml-16 md:ml-0 md:w-1/2 md:ml-auto md:pl-8" >
            <div className="bg-black border border-gray-800 p-6 rounded-lg hover:border-gray-600 transition-colors cursor-pointer" >
                <div className="text-sm text-gray-400 mb-2" > 2022 - 2023 </div>
                    < h3 className = "text-xl font-bold mb-2" > Software Engineering Intern </h3>
                        < div className = "text-gray-400 mb-4" > HomeAbroad </div>
                            < p className = "text-gray-300 mb-4" >
                                Contributed to core product development, learned industry best practices,
                                    and collaborated with senior developers on key features.
</p>
                                        < div className = "flex flex-wrap gap-2" >
                                            <span className="px-3 py-1 bg-gray-800 text-xs rounded-full" > React </span>
                                                < span className = "px-3 py-1 bg-gray-800 text-xs rounded-full" > JavaScript </span>
                                                    < span className = "px-3 py-1 bg-gray-800 text-xs rounded-full" > MongoDB </span>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </div>
                                                        </section>
{/* Technology Stack */ }
<section id="tech" className = "py-20 px-6" >
    <div className="max-w-6xl mx-auto" >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" > Technology Stack </h2>
            < div className = "grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8" >
            {
                [
                { name: 'Next.js', icon: 'fab fa-node-js' },
                { name: 'React', icon: 'fab fa-react' },
                { name: 'TypeScript', icon: 'fab fa-js-square' },
                { name: 'Node.js', icon: 'fab fa-node-js' },
                { name: 'Python', icon: 'fab fa-python' },
                { name: 'MongoDB', icon: 'fas fa-database' },
                { name: 'PostgreSQL', icon: 'fas fa-database' },
                { name: 'Docker', icon: 'fab fa-docker' },
                { name: 'AWS', icon: 'fab fa-aws' },
                { name: 'Git', icon: 'fab fa-git-alt' },
                { name: 'Linux', icon: 'fab fa-linux' },
                { name: 'GraphQL', icon: 'fas fa-code' }
                ].map((tech, index) => (
                    <div
key= { index }
className = "flex flex-col items-center p-6 bg-gray-900/30 rounded-lg hover:bg-gray-900/50 transition-all duration-300 transform hover:scale-105 cursor-pointer group"
                    >
                    <i className={`${tech.icon} text-4xl mb-4 text-gray-400 group-hover:text-white transition-colors`} > </i>
                < span className = "text-sm text-gray-400 group-hover:text-white transition-colors" > { tech.name } </span>
                    </div>
))}
</div>
    </div>
    </section>
{/* Articles Section */ }
<section id="articles" className = "py-20 px-6" >
    <div className="max-w-6xl mx-auto" >
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" > Latest Articles </h2>
            < div className = "grid md:grid-cols-2 lg:grid-cols-3 gap-8" >
                {/* Article 1 */ }
                < div className = "bg-gray-900/30 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300" >
                    <div className="aspect-video overflow-hidden" >
                        <img
src="https://readdy.ai/api/search-image?query=modern%20minimalist%20tech%20workspace%20with%20laptop%20and%20coffee%20cup%20on%20desk%2C%20clean%20aesthetic%20design%20in%20monochromatic%20style%20with%20soft%20natural%20lighting%20and%20minimal%20decor&width=600&height=400&seq=article-1&orientation=landscape"
alt = "Article 1"
className = "w-full h-full object-cover"
    />
    </div>
    < div className = "p-6" >
        <div className="text-sm text-gray-400 mb-2" > August 5, 2025 </div>
            < h3 className = "text-xl font-bold mb-3" > Building Scalable Applications with Next.js </h3>
            < p className = "text-gray-400 mb-4 line-clamp-3" >
                Exploring best practices and architectural patterns for building large - scale applications using Next.js and React.
</p>
    < a href = "#" className = "text-white hover:text-gray-300 inline-flex items-center" >
        Read More < i className = "fas fa-arrow-right ml-2" > </i>
            </a>
            </div>
            </div>
{/* Article 2 */ }
<div className="bg-gray-900/30 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300" >
    <div className="aspect-video overflow-hidden" >
        <img
src="https://readdy.ai/api/search-image?query=abstract%20visualization%20of%20breaking%20code%20and%20debugging%20process%20with%20geometric%20patterns%20and%20digital%20elements%20in%20monochromatic%20style&width=600&height=400&seq=article-2&orientation=landscape"
alt = "Article 2"
className = "w-full h-full object-cover"
    />
    </div>
    < div className = "p-6" >
        <div className="text-sm text-gray-400 mb-2" > July 28, 2025 </div>
            < h3 className = "text-xl font-bold mb-3" > Breaking Down Complex Problems </h3>
                < p className = "text-gray-400 mb-4 line-clamp-3" >
                    A systematic approach to solving complex technical challenges in software development through decomposition and analysis.
</p>
                        < a href = "#" className = "text-white hover:text-gray-300 inline-flex items-center" >
                            Read More < i className = "fas fa-arrow-right ml-2" > </i>
                                </a>
                                </div>
                                </div>
{/* Article 3 */ }
<div className="bg-gray-900/30 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300" >
    <div className="aspect-video overflow-hidden" >
        <img
src="https://readdy.ai/api/search-image?query=philosophical%20concept%20of%20meaning%20in%20technology%20illustrated%20through%20minimalist%20design%20elements%20and%20human%20interaction%20with%20digital%20interfaces&width=600&height=400&seq=article-3&orientation=landscape"
alt = "Article 3"
className = "w-full h-full object-cover"
    />
    </div>
    < div className = "p-6" >
        <div className="text-sm text-gray-400 mb-2" > July 15, 2025 </div>
            < h3 className = "text-xl font-bold mb-3" > Finding Meaning in Code </h3>
                < p className = "text-gray-400 mb-4 line-clamp-3" >
                    Reflecting on the philosophical aspects of software development and how it shapes our understanding of technology.
</p>
                        < a href = "#" className = "text-white hover:text-gray-300 inline-flex items-center" >
                            Read More < i className = "fas fa-arrow-right ml-2" > </i>
                                </a>
                                </div>
                                </div>
                                </div>
                                </div>
                                </section>
{/* Contact Section */ }
<section id="contact" className = "py-20 px-6 bg-gray-900/20" >
    <div className="max-w-4xl mx-auto text-center" >
        <h2 className="text-4xl md:text-5xl font-bold mb-8" > Let's Connect</h2>
            < p className = "text-xl text-gray-400 mb-12 max-w-2xl mx-auto" >
                I am always interested in discussing new opportunities, collaborating on projects,
                    or just having a conversation about technology and software engineering.
</p>
{/* Cal.com Integration */ }
<div className="mb-12" >
    <button
onClick={ () => window.open('https://cal.com/avhikbiswas', '_blank') }
className = "!rounded-button whitespace-nowrap bg-white text-black px-12 py-6 text-xl font-semibold hover:bg-gray-200 transition-all duration-300 transform hover:scale-105 cursor-pointer"
    >
    <i className="fas fa-calendar-alt mr-3" > </i>
Schedule a Call
    </button>
    </div>
{/* Social Links */ }
<div className="flex justify-center space-x-8" >
    <a href="https://linkedin.com/in/avhikbiswas" className = "text-gray-400 hover:text-white transition-colors" >
        <i className="fab fa-linkedin text-2xl" > </i>
            </a>
            < a href = "https://github.com/avhikbiswas" className = "text-gray-400 hover:text-white transition-colors" >
                <i className="fab fa-github text-2xl" > </i>
                    </a>
                    < a href = "mailto:avhik@example.com" className = "text-gray-400 hover:text-white transition-colors" >
                        <i className="fas fa-envelope text-2xl" > </i>
                            </a>
                            </div>
                            </div>
                            </section>
{/* Footer */ }
<footer className="py-12 px-6 border-t border-gray-800" >
    <div className="max-w-6xl mx-auto" >
        <div className="flex flex-col md:flex-row justify-between items-center" >
            <div className="text-gray-400 mb-4 md:mb-0" >
© 2024 Avhik Biswas.All rights reserved.
</div>
    < div className = "flex space-x-6" >
        <a href="https://linkedin.com/in/avhikbiswas" className = "text-gray-400 hover:text-white transition-colors cursor-pointer" >
            <i className="fab fa-linkedin text-xl" > </i>
                </a>
                < a href = "https://github.com/avhikbiswas" className = "text-gray-400 hover:text-white transition-colors cursor-pointer" >
                    <i className="fab fa-github text-xl" > </i>
                        </a>
                        < a href = "mailto:avhik@example.com" className = "text-gray-400 hover:text-white transition-colors cursor-pointer" >
                            <i className="fas fa-envelope text-xl" > </i>
                                </a>
                                </div>
                                </div>
                                </div>
                                </footer>
{/* Back to Top Button */ }
{
    scrollY > 500 && (
        <button
onClick={ scrollToTop }
    className = "fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 cursor-pointer z-40"
        >
        <i className="fas fa-chevron-up" > </i>
            </button>
)
}
<style jsx > {`
.!rounded-button {
border-radius: 8px;
}
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
-webkit-appearance: none;
margin: 0;
}
input[type="number"] {
-moz-appearance: textfield;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
body {
font-family: 'Inter', monospace;
min-height: 1024px;
}
`}</style>
    </div>
);
};
export default App