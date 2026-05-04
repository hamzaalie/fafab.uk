
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Wrench, ClipboardCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const FacilitiesPage = () => {
  const benefits = [
    'Building maintenance and repairs',
    'Vendor and contractor management',
    'Compliance and safety support',
    'Preventive maintenance programs',
    'Cost optimization strategies',
    'Emergency response services'
  ];

  return (
    <>
      <Helmet>
        <title>Facilities management - FAFAB Integrated Facilities</title>
        <meta name="description" content="Complete building support and maintenance services. Professional facilities management with compliance support and cost optimization." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <section className="bg-primary text-primary-foreground py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ letterSpacing: '-0.02em' }}>
                  Facilities management
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl">
                  Complete building support and maintenance for optimal facility performance
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Comprehensive facilities support</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our facilities management services ensure your buildings operate efficiently and safely. We handle everything from routine maintenance to emergency repairs, vendor coordination, and compliance management.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    With a proactive approach to building management, we help reduce costs, minimize downtime, and maintain a safe, comfortable environment for your staff and visitors.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">Building care</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Wrench className="w-5 h-5 text-accent" />
                      <span className="font-medium">Maintenance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ClipboardCheck className="w-5 h-5 text-accent" />
                      <span className="font-medium">Compliance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">Cost control</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Facilities services include</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Pricing information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      Facilities management pricing is tailored to your specific needs:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Size and complexity of your facilities</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Scope of services required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Contract duration and service level agreements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Number of locations and operating hours</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      We offer flexible pricing models including fixed monthly fees, pay-per-service, and hybrid arrangements. Contact us for a comprehensive facilities assessment and proposal.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Need facilities support?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Let us handle your building management so you can focus on your business
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get facilities support</Link>
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default FacilitiesPage;
