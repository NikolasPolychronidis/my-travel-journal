import Content from './Content';
import Header from './Header';
import data from './data';

export default function App() {
  const destinations = data.map(item => {
    return <Content key={item.id} {...item} />;
  });
  return (
    <section>
      <Header />
      {destinations}
    </section>
  );
}
