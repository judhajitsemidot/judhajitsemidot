import Head from "next/head";
import React from "react";

export const SEOHeader = React.forwardRef(
  ({ title, metaDescription, ...rest }, ref) => {
    return (
      <Head>
        <title>{title || "Lw | Home"}</title>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="description"
          content={metaDescription || "Classified"}
        />
      </Head>
    );
  }
);
SEOHeader.displayName = "SEOHeader";
