const React = require('react');

const Layout = ({ title, children }) => {
  return (
    <html lang="en">
      {' '}
      <head>
        <meta charSet="utf-8" />
        <link rel="stylesheet" href="style/bootstrap.min.css"></link>
        <title>{title}</title>
      </head>
      <body>{children}</body>
    </html>
  );
};

module.exports = Layout;