
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import apiServerClient from '@/lib/apiServerClient';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

const TrainingSuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [payment, setPayment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionId) {
      fetchPaymentDetails();
    } else {
      setLoading(false);
    }
  }, [sessionId]);

  const fetchPaymentDetails = async () => {
    try {
      const response = await apiServerClient.fetch(`/stripe/session/${sessionId}`);
      if (!response.ok) throw new Error('Failed to fetch payment details');
      
      const data = await response.json();
      setPayment(data);
    } catch (error) {
      console.error('Fetch payment error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Enrollment successful - FAFAB Integrated Facilities</title>
        <meta name="description" content="Your course enrollment was successful" />
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-10 h-10 text-green-600" />
                  </div>
                  <CardTitle className="text-3xl">Enrollment successful</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  {loading ? (
                    <div className="py-8">
                      <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                      <p className="text-muted-foreground">Loading payment details...</p>
                    </div>
                  ) : payment ? (
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground">
                        Thank you for enrolling in our training course
                      </p>
                      <div className="bg-secondary rounded-lg p-6 space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Payment status:</span>
                          <span className="text-green-600 font-semibold">{payment.status}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Amount paid:</span>
                          <span className="font-semibold">£{(payment.amountTotal / 100).toFixed(2)}</span>
                        </div>
                        {payment.customerEmail && (
                          <div className="flex justify-between">
                            <span className="font-medium">Email:</span>
                            <span>{payment.customerEmail}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You will receive a confirmation email with course access details shortly.
                      </p>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">
                      Your enrollment was successful. You will receive a confirmation email shortly.
                    </p>
                  )}
                  
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild className="bg-primary hover:bg-primary/90">
                      <Link to="/training">View more courses</Link>
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

export default TrainingSuccessPage;
