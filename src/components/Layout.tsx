import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButtons from "./FloatingButtons";
import ScrollToTop from "./ScrollToTop";
import GMBSection from "./GMBSection";
import ReviewsSection from "./ReviewsSection";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">{children}</main>
      <ReviewsSection className="bg-card" />
      <GMBSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Layout;
