import { CoreLayout, DefaultLayout, BlankLayout } from "../layouts";

import { Provider } from "react-redux";

import Router from "next/router";
import NProgress from "nprogress";
import "../public/static/css/nprogress.css";
import "../public/static/css/bootstrap.min.css";
import "../public/static/css/style.css";
import "../public/static/css/custom.css";
import "../public/static/css/owl.carousel.min.css";
import "../public/static/css/owl.theme.default.min.css";
import "../public/static/fonts/css/icon.css";

import ProtectedRoutes from "../src/routes/ProtectedRoutes";
import { SEOHeader } from "../src/Components/CommonSections";
import { wrapper, store } from "../store";
import rootSaga from "../store/sagas";

NProgress.configure({ parent: "#root", showSpinner: false });
Router.events.on("routeChangeStart", (url) => {
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
function MyApp({ Component, pageProps, router }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <>
      <ProtectedRoutes router={router}>
        {/* <Provider store={store}> */}
        <CoreLayout>
          <SEOHeader
            title={"Leewaey"}
            metaDescription={"Classified Marketplace"}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CoreLayout>
        {/* </Provider> */}
      </ProtectedRoutes>
    </>
  );
}

export default wrapper.withRedux(MyApp);
