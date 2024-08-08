import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';
import { redirect } from 'next/navigation';

interface ProtectedPageProps {
  session: any; // Define a more specific type if you have one
}

const ProtectedPage: React.FC<ProtectedPageProps> = async () => {
  const session = await getServerSession(authOptions);
  console.log('Session:', session);
  if (!session) {
    console.log('No session, redirecting to sign in');
    redirect('/api/auth/signin');
    return null;
  }

  return <div>This is a protected page</div>;
};

export default ProtectedPage;