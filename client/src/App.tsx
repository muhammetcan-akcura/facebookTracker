import { Header } from './components/Header';
import { SearchBox } from './components/SearchBox';
import { Stats } from './components/Stats';
import { Features } from './components/Features';
import { InfoCards } from './components/InfoCards';
import { Footer } from './components/Footer';
import { useFacebookStats } from './hooks/useFacebookData';

export function App() {
  const { url, stats, loading, handleUrlChange, handleSubmit } = useFacebookStats();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <SearchBox
        url={url}
        onUrlChange={handleUrlChange}
        onSubmit={handleSubmit}
        loading={loading}
      />
      <Stats stats={stats} />
      <InfoCards />
      <Features />
      <Footer />
    </div>
  );
}

export default App;