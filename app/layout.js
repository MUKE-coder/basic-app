import "./sass/globals.scss";
import Navbar from "../components/Navbar";
export const metadata = {
  title: "JB App",
  description: "This is a basic application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar/> */}
        {children}
        {/* Footer */}
      </body>
    </html>
  );
}
