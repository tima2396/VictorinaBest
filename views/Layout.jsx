const React = require('react');

const Layout = ({ title, children }) => {
   return (
      <html lang="en">
         {' '}
         <head>
            <meta charSet="utf-8" />
            <link rel='stylesheet' href='css/bootstrap.min.css'></link>
            <title>{title}</title>
         </head>
         <h1>{'Flashcards'}</h1>
         <body>{children}</body>
      </html>
   );
};

module.exports = Layout;