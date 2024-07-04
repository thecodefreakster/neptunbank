import HeaderBox from '@/components/HeaderBox';
import RightSidebar from '@/components/RightSidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
  const loggedIn = { firstName: 'Leart', lastName: 'Rudi', email: 'thecodefreakser@gmail.com'};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type='greeting'
            title='Welcome'
            user={loggedIn.firstName || 'Guest'}
            subtext='Access and manage your account and transactions efficiently'
          />
          <TotalBalanceBox 
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1254.49}
          />
        </header>

        Recent transactions
      </div>
      <RightSidebar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance: 3154.12}, {currentBalance: 1115.62}]}
      />
    </section>
  );
}

export default Home;
