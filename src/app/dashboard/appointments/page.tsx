'use client'

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AppointmentList from '@/app/components/AppointmentList';

const AppointmentsPage: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    if (status === 'loading') return;
    if (!session) router.push('/api/auth/signin');
  }, [session, status, router]);

  useEffect(() => {
    const fetchAppointments = async () => {
      if (session?.user?.id) {
        try {
          const response = await fetch(`/api/appointments?userId=${session.user.id}`);
          if (response.ok) {
            const data = await response.json();
            setAppointments(data);
          } else {
            console.error('Failed to fetch appointments');
          }
        } catch (error) {
          console.error('Error fetching appointments:', error);
        }
      }
    };

    if (session) {
      fetchAppointments();
    }
  }, [session]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Appointments</h1>
      
      <AppointmentList 
        appointments={appointments}
      />
    </div>
  );
};

export default AppointmentsPage;