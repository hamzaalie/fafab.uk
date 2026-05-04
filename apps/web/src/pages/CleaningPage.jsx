
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, Building, Leaf, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const CleaningPage = () => {
  const benefits = [
    'Daily office cleaning services',
    'Deep cleaning and sanitization',
    'Industrial and warehouse cleaning',
    'Eco-friendly cleaning products',
    'Flexible scheduling options',
    'Quality assurance inspections'
  ];

  return (
    <>
      <Helmet>
        <title>Cleaning services - FAFAB Integrated Facilities</title>
        <meta name="description" content="Professional office and industrial cleaning solutions. Daily cleaning, deep cleaning, and eco-friendly services across the UK." />
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
                  Cleaning services
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl">
                  Professional office and industrial cleaning solutions for a spotless workplace
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
                  <h2 className="text-3xl font-bold mb-6">Spotless results, every time</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    Our professional cleaning teams deliver exceptional results for offices, industrial facilities, and commercial premises. We use eco-friendly products and proven techniques to maintain the highest standards of cleanliness.
                  </p>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    From daily office maintenance to deep cleaning projects, we provide flexible cleaning solutions that fit your schedule and budget. Our trained staff ensure your workspace remains clean, hygienic, and welcoming.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-accent" />
                      <span className="font-medium">Deep cleaning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-accent" />
                      <span className="font-medium">Office cleaning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Leaf className="w-5 h-5 text-accent" />
                      <span className="font-medium">Eco-friendly</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="font-medium">Quality assured</span>
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
                      <CardTitle>Cleaning services include</CardTitle>
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
                      Cleaning service rates depend on several factors:
                    </p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Size and type of premises</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Frequency of cleaning (daily, weekly, monthly)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Scope of work and special requirements</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Location and access considerations</span>
                      </li>
                    </ul>
                    <p className="text-muted-foreground leading-relaxed">
                      We provide transparent pricing with no hidden costs. Contact us for a free site assessment and customized quote for your cleaning needs.
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
                <h2 className="text-3xl font-bold mb-6">Ready for a cleaner workspace?</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Get professional cleaning services tailored to your business requirements
                </p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link to="/contact">Request cleaning</Link>
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

export default CleaningPage;
