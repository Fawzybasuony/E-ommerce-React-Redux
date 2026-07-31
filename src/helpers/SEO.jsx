import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_SEO = {
  title: "Brand — Handcrafted Objects & Apparel",
  description: "Clothing and objects worth keeping, made in small, intentional quantities.",
  siteName: "Brand Workshop",
  image: "/favicon.ico",  
};

export default function SEO({
  title,
  description = DEFAULT_SEO.description,
  image = DEFAULT_SEO.image,
  url,
  type = "website",
  noindex = false,
}) {
  const fullTitle = title 
    ? `${title} | ${DEFAULT_SEO.siteName}` 
    : DEFAULT_SEO.title;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {url && <meta property="og:url" content={url} />}
      <meta property="og:site_name" content={DEFAULT_SEO.siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}