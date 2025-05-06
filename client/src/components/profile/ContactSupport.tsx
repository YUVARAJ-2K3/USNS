import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ContactSupport: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="bg-secondary bg-opacity-70 rounded-lg p-4">
        <h3 className="font-semibold mb-4">Contact and Support</h3>
        
        <div className="space-y-4">
          <div className="bg-white bg-opacity-80 rounded-lg p-3">
            <Input
              type="email"
              placeholder="Email: 123@gmail.com"
              className="border-none bg-transparent"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2 text-gray-600"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              }
            />
          </div>
          
          <div className="bg-white bg-opacity-80 rounded-lg p-3">
            <Input
              type="tel"
              placeholder="Phone: 1245231667"
              className="border-none bg-transparent"
              prefix={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 mr-2 text-gray-600"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              }
            />
          </div>
          
          <Button className="bg-white bg-opacity-80 w-full rounded-lg p-3 flex items-center justify-between font-normal hover:bg-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2 text-gray-600"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <span className="text-gray-800">Live Chat</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-gray-500"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Button>
          
          <Button className="bg-white bg-opacity-80 w-full rounded-lg p-3 flex items-center justify-between font-normal hover:bg-white">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4 mr-2 text-gray-600"
              >
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              <span className="text-gray-800">Send a message</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 text-gray-500"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </Button>
        </div>
      </div>
      
      <Accordion type="single" collapsible className="space-y-4">
        <AccordionItem value="faq" className="border-none">
          <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-4">
            <AccordionTrigger className="hover:no-underline">
              <h3 className="font-semibold">Frequently asked questions</h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 space-y-4">
                <div>
                  <h4 className="font-medium text-sm">How accurate is the nerve segmentation?</h4>
                  <p className="text-sm text-gray-600">Our AI model achieves 95-98% accuracy based on validation against expert annotations.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">What image formats are supported?</h4>
                  <p className="text-sm text-gray-600">We support JPEG, PNG, and DICOM formats for ultrasound images.</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm">Is my data secure?</h4>
                  <p className="text-sm text-gray-600">Yes, we follow HIPAA guidelines and use encryption for all uploads. Images are not stored permanently without consent.</p>
                </div>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
        
        <AccordionItem value="accessibility" className="border-none">
          <div className="bg-white bg-opacity-90 rounded-xl shadow-md p-4">
            <AccordionTrigger className="hover:no-underline">
              <h3 className="font-semibold">Accessibility</h3>
            </AccordionTrigger>
            <AccordionContent>
              <div className="mt-4 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">High contrast mode</span>
                  <div className="relative inline-block w-10 h-5 rounded-full bg-gray-200">
                    <input 
                      type="checkbox" 
                      id="high-contrast"
                      className="sr-only"
                    />
                    <span className="block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Larger text</span>
                  <div className="relative inline-block w-10 h-5 rounded-full bg-gray-200">
                    <input 
                      type="checkbox" 
                      id="larger-text"
                      className="sr-only"
                    />
                    <span className="block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm">Screen reader support</span>
                  <div className="relative inline-block w-10 h-5 rounded-full bg-gray-200">
                    <input 
                      type="checkbox" 
                      id="screen-reader"
                      className="sr-only"
                    />
                    <span className="block w-5 h-5 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out" />
                  </div>
                </div>
              </div>
            </AccordionContent>
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default ContactSupport;
