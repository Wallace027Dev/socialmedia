import "../styles/global.css";

/* 
<meta charSet="UTF-8" />
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>React App</title>
<meta name="description" content="Web site created..." />
*/

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
