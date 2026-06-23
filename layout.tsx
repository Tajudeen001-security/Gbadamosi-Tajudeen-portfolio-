import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gbadamosi Tajudeen Olajide- Portfolio',
  description: '...',
  
  // ← Add this section
  verification: {
    google: 'WDT2um4rZt9SKeEyq5E-Ubgt1SyH6fThu9cNN92OCrI',
  },
  // You can add more later if needed
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
