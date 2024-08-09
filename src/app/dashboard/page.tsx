'use client'

import React from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SideBar from '../components/Sidebar';

const Dashboard: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  React.useEffect(() => {
    if (status === 'loading') return; // Do nothing while loading
    if (!session) router.push('/api/auth/signin'); // Redirect to home if not authenticated
  }, [session, status, router]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null; // This will prevent the dashboard from rendering while redirecting
  }

  return (
    <div className="flex h-screen">
      <SideBar />
      <main className="flex-1 p-6 bg-gray-100">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-hookers-green">Dashboard</h1>
          <input
            type="text"
            placeholder="Search transactions, customers, subscriptions"
            className="p-2 border border-gray-300 rounded"
          />
        </header>
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-ash-gray p-4 rounded text-white text-center">
            Current MRR<br />$12.4k
          </div>
          <div className="bg-hookers-green p-4 rounded text-white text-center">
            Current Customers<br />16,601
          </div>
          <div className="bg-black-olive p-4 rounded text-white text-center">
            Active Customers<br />33%
          </div>
          <div className="bg-dutch-white p-4 rounded text-white text-center">
            Churn Rate<br />2%
          </div>
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-4 rounded shadow">Trend</div>
          <div className="bg-white p-4 rounded shadow">Sales</div>
          <div className="bg-white p-4 rounded shadow">Transactions</div>
        </div>
        <div className="bg-lion p-4 rounded shadow mb-6">Support Tickets</div>
        <div className="bg-lion p-4 rounded shadow">Customer Demographic</div>
      </main>
    </div>
  );
};

export default Dashboard;