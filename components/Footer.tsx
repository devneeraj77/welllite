// app/components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-ts py-8   bg-primary  ">

      <div className="container mx-auto flex flex-col min-h-96 justify-between  px-4">
        {/* Top section with links */}
 
        <div className='py-4 my-6'>
          <h6 className='text-4xl text-accent'>Welllite</h6>
          <p>Make your fitness your top priority.</p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-1.25 justify-center items-start text-sm">
          {/* Product Links */}

          <div className='mb-10'>
            <h3 className=" font-semibold mb-2 text-tp opacity-80">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="hover:text-accent transition-colors">Features</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-accent transition-colors">Pricing</Link>
              </li>
              
            </ul>
          </div>

          {/* Business Links */}
          <div className='mb-10'>
            <h3 className=" font-semibold mb-2 text-tp opacity-80">Business</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/feedback" className="hover:text-accent transition-colors">For Businesses</Link>
              </li>
            
            </ul>
          </div>

          {/* Help Links */}
          <div className='mb-10'>
            <h3 className=" font-semibold mb-2 text-tp opacity-80">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#init" className="hover:text-accent transition-colors">Support</Link>
              </li>
              <li>
                <Link href="/#faqs" className="hover:text-accent transition-colors">FAQ</Link>
              </li>
              <li>
                <Link href="/feedback" className="hover:text-accent transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Tools Links */}
          <div className='mb-10'>
            <h3 className=" font-semibold mb-2 text-tp opacity-80">Tools</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bmi-calculator" className="hover:text-accent transition-colors">BMI</Link>
              </li>
              <li>
                <Link href="/whr-calculator" className="hover:text-accent transition-colors">WHR</Link>
              </li>
              
            </ul>
          </div>
        </div>
        </div>

        {/* Bottom section with copyright and additional links */}
        <div className="mt-8 flex text-xs py-2 flex-col md:flex-row  max-w-7xl px-3 m-auto text-center justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Welllite BMI. All Rights Reserved.</p>

          <div className="flex space-x-4 text-xs mt-4 md:mt-0">
            <Link href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
            <Link href="https://neerajrekwar.github.io" className="hover:text-accent transition-colors">
              Developed by Neeraj Rekwar
            </Link>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
