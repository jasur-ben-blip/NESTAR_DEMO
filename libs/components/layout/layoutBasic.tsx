import Head from "next/head";
import Top from "../Top";
import Footer from "../Footer";

const withLayoutBasic = (Component: any) => {
  return (props: any) => {
    return (
      <>
        <Head>
          <title>Nestar</title>
        </Head>
        <div id="pc-wrap">
          <div id="top">
            <Top />
          </div>
          <div
            className="header-basic"
            style={{
              backgroundImage: `url(/img/banner/properties.png)`,
              backgroundSize: "cover",
              boxShadow: "inset 10px 40px 150px 40px rgb(24 22 36)",
            }}
          >
            <div className="container">
              <div className="header-basic-content">
                <strong>Search</strong>
                <span>We are glad to see you again!</span>
              </div>
            </div>
          </div>
          <div id="main">
            <Component {...props} />
          </div>
          <Footer />
        </div>
      </>
    );
  };
};

export default withLayoutBasic;
