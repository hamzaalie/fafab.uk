
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import CheckoutButton from '@/components/CheckoutButton.jsx';
import { motion } from 'framer-motion';

const CourseCard = ({ courseId, courseName, price, description, features, index = 0, buttonLabel = 'Enroll now' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-200">
        <CardHeader>
          <CardTitle className="text-2xl">{courseName}</CardTitle>
          <CardDescription className="text-3xl font-bold text-primary mt-2">
            £{price}
          </CardDescription>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-muted-foreground mb-4">{description}</p>
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
        <CardFooter className="mt-auto">
          <CheckoutButton courseName={courseName} price={price} label={buttonLabel} />
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CourseCard;
