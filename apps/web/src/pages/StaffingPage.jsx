
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Users, CheckCircle2, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const StaffingPage = () => {
  const benefits = [
    'Temporary and permanent placements',
    'Pre-vetted and qualified professionals',
    'Industry-specific expertise',
    'Flexible contract terms',
    'Compliance and right-to-work checks',
    'Ongoing support and management'
  ];

  return (
    <>
      <Helmet>
        <title>Staffing solutions - FAFAB Integrated Facilities</title>
        <meta name="description" content="Fast deployment of qualified staff within 24-48 hours. Temporary and permanent placements across all industries." />
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
                  Staffing solutions
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl">
                  Fast deployment of qualified staff within 24-48 hours for your business needs
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
                  <h2 className="text-3xl font-bold mb-6">Quick deployment, quality guaranteed</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    We understand that staffing needs can arise urgently. Our extensive network of pre-vetted professionals allows us to deploy qualified staff to your location within 24-48 hours.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Whether you need temporary cover, permanent placements, or specialized expertise, we provide flexible solutions tailored to your industry and requirements.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-medium">24-48 hour deployment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-accent" />
                      <span className="font-medium">Pre-vetted staff</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">Compliance checked</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-5 h-5 text-accent" />
                      <span className="font-medium">Flexible contracts</span>
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
                      <CardTitle>Key benefits</CardTitle>
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
                      Our staffing rates are competitive and transparent. Pricing varies based on:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Role type and skill level required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Contract duration (temporary vs permanent)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Industry sector and location</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Volume of staff required</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      Contact us for a customized quote based on your specific requirements. We offer volume discounts and flexible payment terms for ongoing contracts.
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
                <h2 className="text-3xl font-bold mb-6">Need staff urgently?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get in touch today and we'll have qualified professionals ready within 24-48 hours
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Request staff</Link>
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

export default StaffingPage;
