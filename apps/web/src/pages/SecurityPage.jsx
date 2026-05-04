
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const SecurityPage = () => {
  const benefits = [
    'SIA licensed security guards',
    'Site and event security coverage',
    'CCTV monitoring and surveillance',
    '24/7 availability and rapid response',
    'Uniformed and professional staff',
    'Incident reporting and management'
  ];

  return (
    <>
      <Helmet>
        <title>Security services - FAFAB Integrated Facilities</title>
        <meta name="description" content="Professional SIA licensed security guards for sites and events. 24/7 availability with rapid deployment across the UK." />
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
                  Security services
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl">
                  Professional security guards for sites and events with 24/7 availability
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
                  <h2 className="text-3xl font-bold mb-6">Professional security you can trust</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our SIA licensed security guards provide comprehensive protection for your premises, events, and assets. With extensive training and experience, our team delivers professional security services tailored to your specific needs.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    From construction sites to corporate events, retail premises to industrial facilities, we provide reliable security coverage 24 hours a day, 7 days a week.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-accent" />
                      <span className="font-medium">SIA licensed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-5 h-5 text-accent" />
                      <span className="font-medium">CCTV monitoring</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-accent" />
                      <span className="font-medium">24/7 coverage</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">Fully insured</span>
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
                      <CardTitle>Security services include</CardTitle>
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
                      Security service rates are customized based on your requirements:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Type of security required (static guard, mobile patrol, event security)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Number of guards and shift patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Location and site complexity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Contract duration and frequency</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      We offer competitive hourly rates with discounts for long-term contracts. Contact us for a detailed quote tailored to your security needs.
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
                <h2 className="text-3xl font-bold mb-6">Need security coverage?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get professional SIA licensed security guards deployed to your site quickly
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Get security team</Link>
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

export default SecurityPage;
