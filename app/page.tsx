"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Rocket, Zap, Globe, Users, Award, Medal, Star, Menu, X } from "lucide-react"
import { getSponsorsByTier } from "@/data/sponsors"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-900"></div>
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/20">
          <div className="container mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="#home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <Rocket className="w-4 h-4 text-black" />
              </div>
              <span className="font-bold text-lg text-white">Tech Trek</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#about" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">
                Misión
              </Link>
              <Link href="#events" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">
                Eventos
              </Link>
              <Link href="#contact" className="text-sm text-gray-200 hover:text-white transition-colors font-medium">
                Contacto
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <Button size="sm" className="bg-primary text-black hover:bg-primary/90 transition-colors font-semibold hidden sm:inline-flex">
                Únete
              </Button>
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-white hover:text-primary hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 transform"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <>
              {/* Backdrop overlay */}
              <div 
                className="md:hidden fixed inset-0 top-16 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setMobileMenuOpen(false)}
              />
              
              {/* Menu panel */}
              <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl border-b border-white/20 shadow-2xl animate-fade-in z-50">
                <div className="container mx-auto px-4 py-6">
                  <nav className="flex flex-col items-center space-y-6 max-w-sm mx-auto">
                    <Link 
                      href="#about" 
                      className="text-gray-200 hover:text-primary transition-all duration-300 font-medium py-3 px-6 rounded-lg hover:bg-white/10 hover:scale-105 w-full text-center transform"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Misión
                    </Link>
                    <Link 
                      href="#events" 
                      className="text-gray-200 hover:text-primary transition-all duration-300 font-medium py-3 px-6 rounded-lg hover:bg-white/10 hover:scale-105 w-full text-center transform"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Eventos
                    </Link>
                    <Link 
                      href="#contact" 
                      className="text-gray-200 hover:text-primary transition-all duration-300 font-medium py-3 px-6 rounded-lg hover:bg-white/10 hover:scale-105 w-full text-center transform"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Contacto
                    </Link>
                    <div className="pt-6 border-t border-white/20 w-full flex justify-center">
                      <Button 
                        size="sm" 
                        className="bg-primary text-black hover:bg-primary/90 hover:scale-105 transition-all duration-300 font-semibold px-8 py-3 shadow-lg transform"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Únete
                      </Button>
                    </div>
                  </nav>
                </div>
              </div>
            </>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-6 sm:mb-8">
              <Link href="https://www.itba.edu.ar/" target="_blank" rel="noopener noreferrer">
                <Badge variant="outline" className="border-primary/60 text-primary bg-primary/20 mb-4 sm:mb-6 hover:bg-primary/30 transition-colors cursor-pointer font-semibold text-xs sm:text-sm">
                  ITBA • Buenos Aires
                </Badge>
              </Link>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent">
              Tech Trek
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-2xl mx-auto font-medium px-4">
              Explorando el futuro tecnológico
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
              <Button size="lg" className="bg-primary text-black hover:bg-primary/90 transition-colors group font-semibold w-full sm:w-auto">
                Comenzar Viaje
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/20 hover:text-white hover:border-white/60 bg-transparent transition-colors font-semibold w-full sm:w-auto"
              >
                Explorar
              </Button>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">¿Qué es Tech Trek?</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed px-4">
                Tech Trek es la organización estudiantil líder en tecnología del{" "}
                <span className="text-primary font-semibold">Instituto Tecnológico de Buenos Aires (ITBA)</span>. Conectamos
                estudiantes con el ecosistema tecnológico argentino e internacional a través de eventos, workshops y
                networking.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-20">
              <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Workshops</h3>
                  <p className="text-gray-200 text-sm">Talleres técnicos con expertos</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Networking</h3>
                  <p className="text-gray-200 text-sm">Conexiones con la industria</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Startups</h3>
                  <p className="text-gray-200 text-sm">Apoyo al emprendimiento</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2 text-white">Comunidad</h3>
                  <p className="text-gray-200 text-sm">Red de estudiantes tech</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center px-4">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 text-white">Nuestro Impacto</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-gray-200 font-medium">Estudiantes alcanzados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-200 font-medium">Eventos realizados</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-gray-200 font-medium">Empresas colaboradoras</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Section - Tech Trek Hub */}
        <section id="events" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-7xl">
            {/* Centered Event Card */}
            <div id="event-card" className="flex justify-center mb-12 sm:mb-16">
              <div className="max-w-sm sm:max-w-xl w-full">
                <div
                  className="group relative perspective-1000"
                  onMouseMove={(e) => {
                    if (window.innerWidth >= 768) { // Only on desktop
                      const card = e.currentTarget.querySelector(".tech-card") as HTMLElement
                      if (card) {
                        const rect = card.getBoundingClientRect()
                        const x = e.clientX - rect.left
                        const y = e.clientY - rect.top
                        const centerX = rect.width / 2
                        const centerY = rect.height / 2
                        const rotateX = (y - centerY) / 20
                        const rotateY = (centerX - x) / 20

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                      }
                    }
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget.querySelector(".tech-card") as HTMLElement
                    if (card) {
                      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
                    }
                  }}
                >
                  {/* Main Event Card */}
                  <div 
                    className="tech-card relative w-full aspect-square shadow-2xl transition-all duration-500 ease-out cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => window.open('https://app.fanz.com.ar/event/23376?eventDateId=33468', '_blank')}
                  >
                    <Image
                      src="/tthub.jpeg"
                      alt="Tech Trek Hub '25"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                      priority
                    />

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    {/* 3D Shadow Layers - Only on desktop */}
                    <div className="hidden md:block absolute inset-0 bg-black/20 transform translate-x-1 translate-y-1 -z-10 opacity-0 group-hover:opacity-30 transition-all duration-500 blur-sm rounded-lg"></div>
                    <div className="hidden md:block absolute inset-0 bg-black/30 transform translate-x-2 translate-y-2 -z-20 opacity-0 group-hover:opacity-20 transition-all duration-500 blur-md rounded-lg"></div>
                  </div>

                  {/* Floating Light Particles - Only on desktop */}
                  <div className="hidden md:block absolute inset-0 pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white/60 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000"
                        style={{
                          left: `${20 + i * 15}%`,
                          top: `${10 + i * 12}%`,
                          animationDelay: `${i * 200}ms`,
                          animation: "float 3s ease-in-out infinite",
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Registration Note */}
                <div className="text-center mt-6 sm:mt-8">
                  <Badge className="bg-primary/30 border-primary/60 text-primary font-semibold">
                    Registro abierto
                  </Badge>
                </div>
              </div>
            </div>

            {/* Event Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
              {/* What is Tech Trek Hub */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-white">¿Qué es Tech Trek Hub?</h4>
                <p className="text-gray-200 leading-relaxed mb-6 text-sm sm:text-base">
                  Una experiencia única que conecta estudiantes con empresas líderes, startups innovadoras 
                  y profesionales del ecosistema tecnológico argentino e internacional.
                </p>
                <ul className="space-y-3 text-gray-200 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Charlas magistrales con líderes de la industria</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Workshops técnicos y mentorías personalizadas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Networking con más de 500 estudiantes y profesionales</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                    <span>Demo day de startups estudiantiles</span>
                  </li>
                </ul>
              </div>

              {/* Event Details */}
              <div className="bg-white/10 border border-white/20 rounded-lg p-6 sm:p-8 backdrop-blur-sm">
                <h4 className="text-lg sm:text-xl font-semibold mb-4 text-primary">Tech Trek Hub 2025</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📅</span>
                    <div>
                      <span className="text-gray-200 text-sm">Fecha</span>
                      <div className="text-white font-semibold">8 de Agosto</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕛</span>
                    <div>
                      <span className="text-gray-200 text-sm">Horario</span>
                      <div className="text-white font-semibold">12:00 - 18:00 hs</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <span className="text-gray-200 text-sm">Lugar</span>
                      <div className="text-white font-semibold">Domos del Parque de Innovación</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🎫</span>
                    <div>
                      <span className="text-gray-200 text-sm">Entrada</span>
                      <div className="text-white font-semibold">Gratuita</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Nuestro Team</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
                El equipo de estudiantes apasionados que lidera Tech Trek
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
              {[
                {
                  name: "María González",
                  role: "Presidente & Fundadora",
                  career: "Ingeniería en Informática",
                  year: "4to año",
                },
                { name: "Juan Pérez", role: "VP de Tecnología", career: "Ingeniería en Sistemas", year: "3er año" },
                { name: "Ana Rodríguez", role: "VP de Eventos", career: "Ingeniería Industrial", year: "4to año" },
                {
                  name: "Carlos López",
                  role: "VP de Comunicaciones",
                  career: "Ingeniería en Informática",
                  year: "2do año",
                },
              ].map((member, i) => (
                <Card
                  key={i}
                  className="bg-white/15 border-white/30 backdrop-blur-sm group hover:bg-white/20 transition-all duration-500"
                >
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-br from-primary/50 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                      <span className="text-black font-bold text-lg sm:text-xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg sm:text-xl mb-2 text-white">{member.name}</h3>
                    <p className="text-primary text-base sm:text-lg mb-3 font-semibold">{member.role}</p>
                    <p className="text-gray-100 mb-1 text-sm sm:text-base">{member.career}</p>
                    <p className="text-gray-200 text-sm">{member.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contributors Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Contributors</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">
                Mentores y profesionales que guían nuestro crecimiento
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 max-w-4xl mx-auto">
              {[
                {
                  name: "Dr. Roberto Fernández",
                  role: "Mentor en Inteligencia Artificial",
                  company: "Google Argentina",
                  expertise: "Machine Learning & AI",
                },
                {
                  name: "Ing. Laura Castro",
                  role: "Mentora en Blockchain",
                  company: "Binance",
                  expertise: "Web3 & DeFi",
                },
                {
                  name: "Lic. Pablo Morales",
                  role: "Mentor en Startups",
                  company: "Mercado Libre",
                  expertise: "Product & Growth",
                },
                { name: "Dra. Carmen Ruiz", role: "Mentora en UX/UI", company: "Globant", expertise: "Design Systems" },
                {
                  name: "Ing. Andrés Vega",
                  role: "Mentor en DevOps",
                  company: "Auth0",
                  expertise: "Cloud & Infrastructure",
                },
                {
                  name: "Lic. Valeria Sosa",
                  role: "Mentora en Data Science",
                  company: "Despegar",
                  expertise: "Analytics & ML",
                },
              ].map((contributor, i) => (
                <Card
                  key={i}
                  className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/40 to-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform">
                      <span className="text-black font-bold text-lg">
                        {contributor.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <h4 className="font-semibold text-base sm:text-lg mb-2 text-white">{contributor.name}</h4>
                    <p className="text-primary text-sm mb-2 font-medium">{contributor.role}</p>
                    <p className="text-gray-200 text-sm mb-2">{contributor.company}</p>
                    <p className="text-gray-200 text-xs">{contributor.expertise}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 bg-white/5">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-20">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Sponsors</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mx-auto px-4">Empresas que apoyan nuestra visión tecnológica</p>
            </div>

            {/* Platinum Sponsors */}
            {getSponsorsByTier("Platinum").length > 0 && (
              <div className="mb-16 sm:mb-20">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-400">Platinum</h3>
                    <Award className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-400" />
                  </div>
                  <p className="text-gray-200 px-4">Nuestros patrocinadores principales</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 max-w-4xl mx-auto">
                  {getSponsorsByTier("Platinum").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-gradient-to-br from-yellow-400/15 to-yellow-600/10 border-yellow-400/30 backdrop-blur-sm group hover:from-yellow-400/25 hover:to-yellow-600/15 transition-all duration-500 shadow-lg"
                    >
                      <CardContent className="p-8 sm:p-10 text-center">
                        <div className="w-24 sm:w-28 h-24 sm:h-28 bg-gradient-to-br from-yellow-400/40 to-yellow-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 sm:mb-8 group-hover:scale-105 transition-transform shadow-lg">
                          <span className="text-black font-bold text-2xl sm:text-3xl">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-bold text-xl sm:text-2xl mb-3 group-hover:text-yellow-400 transition-colors text-white">
                          {sponsor.name}
                        </h4>
                        <p className="text-gray-200 text-sm mb-4">{sponsor.description}</p>
                        <Badge variant="outline" className="border-yellow-400/60 text-yellow-400 bg-yellow-400/20 font-semibold text-xs sm:text-sm">
                          Platinum Sponsor
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Gold Sponsors */}
            {getSponsorsByTier("Gold").length > 0 && (
              <div className="mb-16 sm:mb-20">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Medal className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />
                    <h3 className="text-xl sm:text-2xl font-bold text-yellow-500">Gold</h3>
                    <Medal className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />
                  </div>
                  <p className="text-gray-200 px-4">Patrocinadores oro</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-5xl mx-auto">
                  {getSponsorsByTier("Gold").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-gradient-to-br from-yellow-500/15 to-yellow-600/10 border-yellow-500/30 backdrop-blur-sm group hover:from-yellow-500/25 hover:to-yellow-600/15 transition-all duration-500"
                    >
                      <CardContent className="p-6 sm:p-8 text-center">
                        <div className="w-18 sm:w-20 h-18 sm:h-20 bg-gradient-to-br from-yellow-500/40 to-yellow-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-105 transition-transform">
                          <span className="text-black font-bold text-lg sm:text-2xl">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-bold text-lg sm:text-xl mb-2 group-hover:text-yellow-500 transition-colors text-white">
                          {sponsor.name}
                        </h4>
                        <p className="text-gray-200 text-xs mb-3">{sponsor.description}</p>
                        <Badge variant="outline" className="border-yellow-500/60 text-yellow-500 bg-yellow-500/20 font-semibold text-xs">
                          Gold Sponsor
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Silver Sponsors */}
            {getSponsorsByTier("Silver").length > 0 && (
              <div className="mb-16 sm:mb-20">
                <div className="text-center mb-8 sm:mb-12">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300" />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-200">Silver</h3>
                    <Star className="w-5 sm:w-6 h-5 sm:h-6 text-gray-300" />
                  </div>
                  <p className="text-gray-200 px-4">Patrocinadores plata</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto">
                  {getSponsorsByTier("Silver").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-gradient-to-br from-gray-400/15 to-gray-500/10 border-gray-400/30 backdrop-blur-sm group hover:from-gray-400/25 hover:to-gray-500/15 transition-all duration-300"
                    >
                      <CardContent className="p-4 sm:p-6 text-center">
                        <div className="w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br from-gray-300/40 to-gray-400/20 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-105 transition-transform">
                          <span className="text-black font-bold text-sm sm:text-lg">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-semibold text-xs sm:text-sm group-hover:text-gray-100 transition-colors mb-2 text-white">
                          {sponsor.name}
                        </h4>
                        <Badge variant="outline" className="border-gray-300/60 text-gray-200 bg-gray-300/20 text-xs font-medium">
                          Silver
                        </Badge>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Nos acompañan */}
            {getSponsorsByTier("Nos acompañan").length > 0 && (
              <div className="mb-12 sm:mb-16">
                <div className="text-center mb-8 sm:mb-12">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2">Nos acompañan</h3>
                  <p className="text-gray-200 px-4">Organizaciones que apoyan nuestra misión</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
                  {getSponsorsByTier("Nos acompañan").map((sponsor) => (
                    <Card
                      key={sponsor.id}
                      className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-300"
                    >
                      <CardContent className="p-3 sm:p-4 text-center">
                        <div className="w-10 sm:w-12 h-10 sm:h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:bg-primary/30 transition-colors">
                          <span className="text-primary font-bold text-xs sm:text-sm">{sponsor.name.substring(0, 2)}</span>
                        </div>
                        <h4 className="font-semibold text-xs group-hover:text-primary transition-colors text-white">
                          {sponsor.name}
                        </h4>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="text-center mt-12 sm:mt-16 px-4">
              <p className="text-gray-200 mb-6">¿Tu empresa quiere patrocinar Tech Trek?</p>
              <Button className="bg-primary text-black hover:bg-primary/90 transition-colors font-semibold w-full sm:w-auto">Convertirse en Sponsor</Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">1000+</div>
                <div className="text-gray-200 font-medium text-sm sm:text-base">Estudiantes</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-gray-200 font-medium text-sm sm:text-base">Eventos</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">30+</div>
                <div className="text-gray-200 font-medium text-sm sm:text-base">Empresas</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">5</div>
                <div className="text-gray-200 font-medium text-sm sm:text-base">Años</div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">Únete a Tech Trek</h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-6 sm:mb-8"></div>
              <p className="text-lg sm:text-xl text-gray-200 max-w-3xl mx-auto px-4">
                Cada año abrimos una única oportunidad para que nuevos estudiantes se sumen a nuestra comunidad
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              {/* Main Join Card */}
              <div className="relative group mb-12 sm:mb-16">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <Card className="relative bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                  <CardContent className="p-8 sm:p-12 text-center">
                    <div className="mb-6 sm:mb-8">
                      <div className="w-16 sm:w-20 h-16 sm:h-20 bg-primary/30 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                        <Rocket className="w-8 sm:w-10 h-8 sm:h-10 text-primary" />
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Inscripciones 2025</h3>
                      <p className="text-base sm:text-lg text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
                        ¿Sos estudiante de ITBA y te apasiona la tecnología? Esta es tu oportunidad de formar parte 
                        del equipo que está transformando el ecosistema tech estudiantil.
                      </p>
                    </div>

                    {/* Status Badge */}
                    <div className="mb-6 sm:mb-8">
                      <Badge variant="outline" className="border-primary/60 text-primary bg-primary/20 px-4 sm:px-6 py-2 text-base sm:text-lg font-semibold">
                        🚀 Próximamente en Marzo 2025
                      </Badge>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                      <div className="flex items-start gap-3 sm:gap-4 text-left">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary/30 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <Users className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Liderazgo Estudiantil</h4>
                          <p className="text-gray-200 text-sm">Lidera iniciativas y proyectos que impactan a cientos de estudiantes</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3 sm:gap-4 text-left">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary/30 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <Globe className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Red Internacional</h4>
                          <p className="text-gray-200 text-sm">Conecta con profesionales y estudiantes de todo el mundo</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-4 text-left">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary/30 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <Zap className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Experiencia Única</h4>
                          <p className="text-gray-200 text-sm">Organiza eventos tech que marcan la diferencia en ITBA</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 sm:gap-4 text-left">
                        <div className="w-7 sm:w-8 h-7 sm:h-8 bg-primary/30 rounded-full flex items-center justify-center shrink-0 mt-1">
                          <Award className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Crecimiento Personal</h4>
                          <p className="text-gray-200 text-sm">Desarrolla habilidades que potenciarán tu carrera profesional</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-6 sm:pt-8 border-t border-white/20">
                      <Button 
                        size="lg" 
                        className="bg-primary text-black hover:bg-primary/90 transition-all duration-300 hover:scale-105 group px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
                      >
                        Quiero estar notificado
                        <ArrowRight className="ml-2 w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <p className="text-gray-200 text-sm mt-4">
                        Te enviaremos un email cuando abramos las inscripciones
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-3xl mb-4">📅</div>
                    <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Una vez al año</h4>
                    <p className="text-gray-200 text-sm">Las inscripciones abren una única vez, no te pierdas la oportunidad</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-3xl mb-4">🎯</div>
                    <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Proceso Selectivo</h4>
                    <p className="text-gray-200 text-sm">Buscamos estudiantes apasionados y comprometidos con la tecnología</p>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 border-white/20 backdrop-blur-sm group hover:bg-white/15 transition-all duration-500">
                  <CardContent className="p-6 sm:p-8 text-center">
                    <div className="text-3xl mb-4">🌟</div>
                    <h4 className="font-semibold mb-2 text-white text-sm sm:text-base">Experiencia única</h4>
                    <p className="text-gray-200 text-sm">Forma parte de algo más grande y crea el futuro tecnológico</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/20 py-12 sm:py-16 px-4 sm:px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
              <div className="sm:col-span-2 md:col-span-1">
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-black" />
                  </div>
                  <span className="font-bold text-lg text-white">Tech Trek</span>
                </div>
                <p className="text-gray-200">Instituto Tecnológico de Buenos Aires</p>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Contacto</h3>
                <div className="space-y-2 text-gray-200 text-sm sm:text-base">
                  <p>info@techtrek.itba.edu.ar</p>
                  <p>Buenos Aires, Argentina</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-4 text-white">Síguenos</h3>
                <div className="flex gap-4">
                  <Link href="#" className="text-gray-200 hover:text-primary transition-colors p-2">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                  <Link href="#" className="text-gray-200 hover:text-primary transition-colors p-2">
                    <Users className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
              <p className="text-gray-200 text-sm sm:text-base">
                © {new Date().getFullYear()} Tech Trek ITBA. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
