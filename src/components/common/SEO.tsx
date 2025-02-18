import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  type?: string;
  imageUrl?: string;
  schema?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = 'tree services, arborist, tree care, pruning, tree removal',
  type = 'website',
  imageUrl = '/assets/social-share.jpg',
  schema
}) => {
  const siteUrl = 'https://www.jstreeservices.com'; // Update with actual domain
  const defaultSchema = {
    '@context': 'http://schema.org',
    '@type': 'LocalBusiness',
    name: 'JS Tree Services',
    description,
    url: siteUrl,
    telephone: '+44123456789', // Update with actual phone
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 High Street', // Update with actual address
      addressLocality: 'Aldershot',
      addressRegion: 'Hampshire',
      postalCode: 'GU11 1DJ',
      addressCountry: 'UK'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2478,
      longitude: -0.7783
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      opens: '08:00',
      closes: '18:00'
    }
  };

  const fullSchema = schema || defaultSchema;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${imageUrl}`} />
      <meta property="og:url" content={siteUrl} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${imageUrl}`} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify(fullSchema)}
      </script>

      {/* Favicon */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#2B8A3E" />
    </Helmet>
  );
};

export default SEO;