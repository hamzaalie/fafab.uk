import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Users, Shield, Sparkles, Building2, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';
const HomePage = () => {
  const services = [{
    icon: Users,
    title: 'Staffing solutions',
    description: 'Fast deployment of qualified staff within 2 to 24 hours',
    benefits: ['Temporary and permanent placements', 'Pre-vetted professionals', 'Industry-specific expertise', 'Flexible contracts'],
    link: '/services/staffing'
  }, {
    icon: Shield,
    title: 'Security services',
    description: 'Professional security guards for sites and events',
    benefits: ['SIA licensed guards', 'Site and event security', 'CCTV monitoring', '24/7 availability'],
    link: '/services/security'
  }, {
    icon: Sparkles,
    title: 'Cleaning services',
    description: 'Office and industrial cleaning solutions',
    benefits: ['Daily office cleaning', 'Deep cleaning services', 'Industrial facilities', 'Eco-friendly products'],
    link: '/services/cleaning'
  }, {
    icon: Building2,
    title: 'Facilities management',
    description: 'Complete building support and maintenance',
    benefits: ['Building maintenance', 'Vendor management', 'Compliance support', 'Cost optimization'],
    link: '/services/facilities'
  }];
  return <>
      <Helmet>
        <title>FAFAB Integrated Facilities - Staffing, Security & Cleaning Services UK</title>
        <meta name="description" content="Fast workforce solutions within 2 to 24 hours. Professional staffing, security, cleaning, and facilities management services across the UK." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.6
            }} className="text-center max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{
                letterSpacing: '-0.02em'
              }}>
                  Comprehensive Building Facility Management
                </h1>
                <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
                  Fast workforce solutions within 2 to 24 hours
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
                    <Link to="/contact">Request staff</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8">
                    <Link to="/services/staffing">View services</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="py-20 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }} className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{
                letterSpacing: '-0.02em'
              }}>
                  Our services
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive workforce and facilities solutions tailored to your business needs
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => <ServiceCard key={index} {...service} index={index} />)}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.1
              }}>
                  <Clock className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">2 to 24 hour deployment</h3>
                  <p className="text-muted-foreground">
                    Rapid response to your staffing needs
                  </p>
                </motion.div>

                <motion.div initial={{
                opacity: 0,
                y: 20
              }} animate={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: 0.2
              }}>
                  <CheckCircle2 className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Fully vetted professionals</h3>
                  <p className="text-muted-foreground">
                    All staff undergo thorough background checks
                  </p>
                </motion.div>

              </div>
            </div>
          </section>

          <section className="py-20 bg-primary text-primary-foreground">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5
            }}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{
                letterSpacing: '-0.02em'
              }}>
                  Ready to get started?
                </h2>
                <p className="text-xl text-primary-foreground/90 mb-8">
                  Contact us today for fast, reliable workforce solutions
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-8">
                  <Link to="/contact">Get in touch</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>;
};
export default HomePage;