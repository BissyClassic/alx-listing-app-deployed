import Header from "./Header";
import Footer from "./Footer";
import BookingForm from "../booking/BookingForm";
import CancellationPolicy from "../booking/CancellationPolicy";
import OrderSummary from "../booking/OrderSummary";


const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <BookingForm />
      <CancellationPolicy />
      <OrderSummary />
      <Footer />
    </>
  );
}

export default Layout;