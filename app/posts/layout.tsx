import BackButton from '@/components/BackButton';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="px-6 md:px-8">
      <div className="mx-auto max-w-3xl">
        <BackButton />
        {children}
      </div>
    </main>
  );
}
