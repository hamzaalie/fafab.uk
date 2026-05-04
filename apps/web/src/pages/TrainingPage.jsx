
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CourseCard from '@/components/CourseCard.jsx';
import WhatsAppButton from '@/components/WhatsAppButton.jsx';

const TrainingPage = () => {
  const courses = [
    {
      courseId: 'recruitment-training',
      courseName: 'Recruitment training',
      price: 99,
      description: 'Learn professional recruitment techniques and best practices for the UK job market.',
      features: [
        'Comprehensive recruitment strategies',
        'Interview techniques and candidate assessment',
        'Legal compliance and right-to-work checks',
        'Digital tools and platforms',
        'Certificate upon completion'
      ]
    },
    {
      courseId: 'security-training',
      courseName: 'Security training',
      price: 79,
      description: 'Professional security training to prepare for SIA licensing and security roles.',
      features: [
        'SIA license preparation',
        'Health and safety protocols',
        'Conflict management and de-escalation',
        'Emergency response procedures',
        'Certificate upon completion'
      ]
    },
    {
      courseId: 'cleaning-training',
      courseName: 'Cleaning Training Course',
      price: 300,
      description:
        'Learn professional cleaning skills for offices, commercial buildings, and residential properties in the UK.',
      features: [
        'Basic cleaning techniques',
        'Health & safety rules',
        'Equipment and chemicals use',
        'Workplace standards (UK)',
        'How to get cleaning jobs fast'
      ],
      buttonLabel: 'Pay Now with Card'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Training courses - FAFAB Integrated Facilities</title>
        <meta name="description" content="Professional training courses including recruitment, security, and cleaning training. Free job guide and paid certification courses." />
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
                  Training courses
                </h1>
                <p className="text-xl text-primary-foreground/90 max-w-3xl">
                  Professional development courses to advance your career in the UK
                </p>
              </motion.div>
            </div>
          </section>

          <section className="py-16 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <BookOpen className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Free job guide</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  How to get jobs in UK
                </p>
              </motion.div>

              <Card className="max-w-4xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">Your complete guide to UK employment</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-muted-foreground">
                    <p className="leading-relaxed">
                      Our free comprehensive guide covers everything you need to know about finding employment in the UK, including:
                    </p>
                    <ul className="space-y-2 ml-6">
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Understanding the UK job market and employment sectors</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Creating an effective CV and cover letter</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Job search strategies and networking tips</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Interview preparation and techniques</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Understanding employment rights and contracts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>Work permits and visa requirements</span>
                      </li>
                    </ul>
                    <p className="leading-relaxed pt-4">
                      Contact us at <a href="mailto:info@fafab.uk" className="text-accent hover:underline">info@fafab.uk</a> to request your free copy of the job guide.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <GraduationCap className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-4">Paid courses</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Professional certification courses to boost your career prospects
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {courses.map((course, index) => (
                  <CourseCard key={course.courseId} {...course} index={index} />
                ))}
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

export default TrainingPage;
