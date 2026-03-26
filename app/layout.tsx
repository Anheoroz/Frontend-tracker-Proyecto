import "./globals.css";
import { ReduxProvider } from "../redux/Provider";

export const metadata = {
  title: "Habit Tracker",
  description: "App de hábitos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}