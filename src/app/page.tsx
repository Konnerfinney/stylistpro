import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ash-gray to-dutch-white fixed inset-0 -z-10">
      <div className="relative z-10">
      <Navbar />

      <main className="container mx-auto mt-20 px-4">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black-olive mb-4">Welcome to Stylist Pro</h2>
          <p className="text-xl text-hookers-green mb-8">The ultimate platform for aesthetic professionals</p>
          <Link href="/api/auth/signin" className="bg-lion text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90">Get Started</Link>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { title: 'Streamlined Workflow', description: 'Optimize your daily operations with our intuitive interface.' },
            { title: 'Client Management', description: 'Effortlessly manage and track your client relationships.' },
            { title: 'Analytics Dashboard', description: 'Gain valuable insights with our comprehensive analytics tools.' },
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-black-olive mb-2">{feature.title}</h3>
              <p className="text-hookers-green">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black-olive mb-4">Why Choose Stylist Pro?</h2>
          <p className="text-lg text-hookers-green mb-8">Stylist Pro is designed specifically for aesthetic professionals, offering a suite of tools to enhance your practice and boost your business.</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-ash-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">Customizable Solutions</h3>
              <p className="drop-shadow-sm">Tailor our platform to fit your unique business needs.</p>
            </div>
            <div className="bg-ash-gray p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 drop-shadow-sm">Secure & Compliant</h3>
              <p className="drop-shadow-sm">Rest easy knowing your data is protected with industry-leading security measures.</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-black-olive mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-lg text-hookers-green mb-8">Join thousands of satisfied professionals who have elevated their business with Stylist Pro.</p>
          <Link href="/demo" className="bg-lion text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-90">Request a Demo</Link>
        </section>
      </main>

      <footer className="bg-black-olive text-white mt-16 py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Stylist Pro. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </div>
  );
}
