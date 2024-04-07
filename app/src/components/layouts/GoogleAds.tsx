import React from 'react';

function GoogleAdsTag() {
  return (
    <>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DEQ7YYYD71"></script>
      <script dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DEQ7YYYD71');
        `,
      }}
      />
    </>
  );
}

export default GoogleAdsTag;