import React from 'react';
import { Link } from 'wouter';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary p-4 mt-8">
      <div className="container mx-auto grid md:grid-cols-4 gap-6 text-sm">
        <div>
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Help centre</a></li>
            <li><a href="#" className="hover:underline">Report abuse</a></li>
            <li><a href="#" className="hover:underline">System status</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">About</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Company</a></li>
            <li><a href="#" className="hover:underline">Developers</a></li>
            <li><a href="#" className="hover:underline">Location</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Need Help</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Contact our team?</a></li>
            <li><a href="mailto:123@gmail.com" className="hover:underline">123@gmail.com</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold mb-2">Customers</h4>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Feedback</a></li>
            <li><a href="#" className="hover:underline">Location</a></li>
            <li><a href="#" className="hover:underline">Survey</a></li>
            <li><a href="#" className="hover:underline">Strategy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
