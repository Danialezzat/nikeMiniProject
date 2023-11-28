import {CustomerReviews,Hero,PopularProducts,Servises,SpecialOffer, SuperQuality} from './sections/index';
import Nav from './components/Nav';
const App = () => (
  <main className="relative">
    <nav></nav>
    <section className="xl:padding-1
    wide:padding-r padding-b">

      <Hero />

    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Servises />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    

  </main>
);

export default App;