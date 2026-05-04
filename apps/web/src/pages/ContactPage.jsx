
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact us - FAFAB Integrated Facilities</title>
        <meta name="description" content="Get in touch with FAFAB Integrated Facilities. Contact us for staffing, security, cleaning, and facilities management services." />
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
                  Contact us
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl">
                  Get in touch with our team for fast, professional service
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Fill out the form below and we'll get back to you as soon as possible. For urgent requests, please call us directly.
                  </p>
                  <Card>
                    <CardContent className="pt-6">
                      <ContactForm />
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-3xl font-bold mb-6">Contact details</h2>
                  
                  <Card className="mb-6">
                    <CardHeader>
                      <CardTitle>Get in touch</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Phone</p>
                          <a href="tel:02045119001" className="text-muted-foreground hover:text-accent transition-all duration-200">
                            020 4511 9001
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Email</p>
                          <a href="mailto:info@fafab.uk" className="text-muted-foreground hover:text-accent transition-all duration-200">
                            info@fafab.uk
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MessageCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">WhatsApp</p>
                          <a 
                            href="https://wa.me/442045119001" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-all duration-200"
                          >
                            +44 20 4511 9001
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium">Office address</p>
                          <p className="text-muted-foreground">
                            2nd Floor Suite-8, Cranbrook House<br />
                            61 Cranbrook Road<br />
                            Ilford, London<br />
                            IG1 4PG
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Office location</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <iframe
                          src="https://www.openstreetmap.org/export/embed.html?bbox=0.0656%2C51.5589%2C0.0856%2C51.5689&layer=mapnik&marker=51.5639%2C0.0756"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          loading="lazy"
                          title="FAFAB Office Location - Ilford, London"
                        ></iframe>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        <a 
                          href="https://www.openstreetmap.org/?mlat=51.5639&mlon=0.0756#map=16/51.5639/0.0756" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-accent transition-all duration-200"
                        >
                          View larger map
                        </a>
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default ContactPage;
