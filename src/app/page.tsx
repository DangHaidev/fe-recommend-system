import { auth } from '../auth';
import { redirect } from 'next/navigation';

const HomePage = async () => {
    const session = await auth();
    console.log('>>>> session', session);
    redirect('/home');
};

export default HomePage;
