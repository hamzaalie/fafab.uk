
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ServiceCard = ({ icon: Icon, title, description, benefits, link, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full flex flex-col hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
        <CardHeader>
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
            <Icon className="w-6 h-6 text-accent" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-1 flex flex-col">
          {benefits && benefits.length > 0 && (
            <ul className="space-y-2 mb-6 flex-1">
              {benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          )}
          {link && (
            <div className="mt-auto">
              <Button asChild className="w-full bg-primary hover:bg-primary/90">
                <Link to={link}>Learn more</Link>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
