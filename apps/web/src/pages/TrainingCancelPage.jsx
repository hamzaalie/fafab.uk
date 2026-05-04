
import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TrainingCancelPage = () => {
  return (
    <>
      <Helmet>
        <title>Enrollment cancelled - FAFAB Integrated Facilities</title>
        <meta name="description" content="Your course enrollment was cancelled" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1 py-16">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <XCircle className="w-10 h-10 text-red-600" />
                  </div>
                  <CardTitle className="text-3xl">Enrollment cancelled</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg text-muted-foreground mb-6">
                    Your payment was not completed and the enrollment was cancelled.
                  </p>
                  <p className="text-muted-foreground mb-8">
                    No charges were made to your account. You can try enrolling again whenever you're ready.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link to="/training">Try again</Link>
                    </Button>
                    <Button asChild variant="outline">
                      <Link to="/">Back to home</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TrainingCancelPage;
