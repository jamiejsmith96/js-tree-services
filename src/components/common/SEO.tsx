import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    type?: string;
    imageUrl?: string;
    schema?: object;
}

const SEO: React.FC<SEOProps> = ({
    title = 'JS Tree Services - Professional Tree Surgery in Aldershot',
    description = 'Expert tree surgery services in Aldershot, Hampshire. Providing professional tree felling, pruning, and maintenance services.',
    keywords = 'tree surgery, tree surgeon, arborist, Aldershot, Hampshire, tree felling, tree pruning',
    type = 'website',
    imageUrl = '/assets/social-share.jpg',
    schema,
}) => {
    const siteUrl = 'https://www.jstreeservices.com'; // Update with actual domain
    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "JS Tree Services",
        "image": `${siteUrl}/assets/logo.png`,
        "@id": siteUrl,
        "url": siteUrl,
        "telephone": "+441234567890",
        "priceRange": "££",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Tree Street",
            "addressLocality": "Aldershot",
            "addressRegion": "Hampshire",
            "postalCode": "GU11 1AA",
            "addressCountry": "GB"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 51.2478,
            "longitude": -0.7783
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "16:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/jstreeservices",
            "https://twitter.com/jstreeservices",
            "https://www.instagram.com/jstreeservices"
        ]
    };

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
            <meta property="og:site_name" content="JS Tree Services" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={`${siteUrl}${imageUrl}`} />

            {/* Canonical URL */}
            <link rel="canonical" href={siteUrl} />

            {/* Mobile viewport */}
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

            {/* Schema.org */}
            <script type="application/ld+json">
                {JSON.stringify(schema || defaultSchema)}
            </script>

            {/* Favicon */}
            <link rel="icon" type="image/png" href="/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.manifest" />

            {/* Additional meta tags */}
            <meta name="theme-color" content="#43A047" />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="robots" content="index, follow" />
            <meta name="googlebot" content="index, follow" />
        </Helmet>
    );
};

export default SEO;