
import CommentsAndReviews from "@/src/components/detail/CommentsAndReviews";
import Hero from "@/src/components/detail/Hero";
import Sidebar from "@/src/components/detail/Sidebar";
import Similar from "@/src/components/detail/Similar";
import Script from "next/script";

export default function DetailPage() {
  return (
    <>
      <Hero />
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-8">
              <CommentsAndReviews />
            </div>
            <div className="col-12 col-xl-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>

      <Similar />

      {/*
        NOTE: The original template uses jQuery and various plugins.
        For a true React/Next.js application, these should be replaced
        with React-specific libraries (e.g., react-owl-carousel, react-select).
        For now, we are including the original scripts to maintain functionality,
        but this is not an ideal or performant solution.
      */}
      <Script src="/js/jquery-3.5.1.min.js" strategy="lazyOnload" />
      <Script src="/js/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/js/owl.carousel.min.js" strategy="lazyOnload" />
      <Script src="/js/slider-radio.js" strategy="lazyOnload" />
      <Script src="/js/select2.min.js" strategy="lazyOnload" />
      <Script src="/js/smooth-scrollbar.js" strategy="lazyOnload" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="lazyOnload" />
      <Script src="/js/plyr.min.js" strategy="lazyOnload" />
      <Script src="/js/main.js" strategy="lazyOnload" />
    </>
  );
}