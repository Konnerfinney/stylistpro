import React from 'react';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
export default function About() {
  return (
    <div className="bg-gradient-to-br from-ash-gray to-dutch-white min-h-screen">
      <Navbar />
      <main className="container mx-auto pt-20 px-4 pb-16">
        <section className="mb-16">
          <h1 className="text-5xl font-bold text-black-olive mb-6">About Stylist Pro</h1>
          <p className="text-xl text-hookers-green mb-8 leading-relaxed">
            Stylist Pro was built to meet a critical need in the health and wellness community, empowering individuals to perform at their best by giving them the tools they need to succeed. Our platform enables business owners to see data-driven insights, track metrics, and manage their clients with ease. Stylist Pro gives you a competitive edge by bringing the expertise sought after by large tech companies directly to you at an affordable price.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-semibold text-black-olive mb-4">Our Mission</h2>
            <p className="text-lg text-hookers-green mb-6">
              At Stylist Pro, our mission is to revolutionize the way aesthetic professionals manage their businesses. We believe that by providing cutting-edge tools and insights, we can help you focus on what you do best: delivering exceptional services to your clients.
            </p>
          </div>
          <div className="relative h-64 md:h-auto">
            <Image
              src="/images/mission.jpg"
              alt="Stylist Pro Mission"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black-olive mb-6">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Intuitive Dashboard', description: 'Get a bird\'s-eye view of your business performance with our easy-to-use dashboard.' },
              { title: 'Client Management', description: 'Efficiently manage client information, appointments, and preferences in one place.' },
              { title: 'Analytics & Reporting', description: 'Make data-driven decisions with our comprehensive analytics and reporting tools.' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-black-olive mb-2">{feature.title}</h3>
                <p className="text-hookers-green">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-black-olive mb-6">Why Choose Stylist Pro?</h2>
          <ul className="list-disc list-inside text-lg text-hookers-green space-y-4">
            <li>Tailored specifically for aesthetic professionals</li>
            <li>Affordable pricing with enterprise-level features</li>
            <li>Continuous updates and improvements based on user feedback</li>
            <li>Dedicated customer support team</li>
            <li>Secure and compliant with industry standards</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-black-olive mb-6">Join the Stylist Pro Community</h2>
          <p className="text-lg text-hookers-green mb-8">
            Experience the difference Stylist Pro can make in your business. Join thousands of satisfied professionals who have elevated their practice with our platform.
          </p>
          <Link href="/dashboard" className="inline-block bg-lion text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90 transition-colors duration-300">
            Get Started Today
          </Link>
        </section>
      </main>
    </div>

  );
}