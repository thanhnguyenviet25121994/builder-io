export default function TemplatesPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 dark:bg-black min-h-screen">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-start py-32 px-16 bg-white dark:bg-black gap-8">
        <a href="/" className="text-blue-600 dark:text-blue-400 hover:underline">
          ← Back to home
        </a>
        <h1 className="text-3xl font-semibold text-black dark:text-zinc-50">
          Templates
        </h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-400">
          Browse available templates to get started with your project.
        </p>
        <div className="space-y-4">
          <section>
            <h2 className="text-xl font-semibold text-black dark:text-zinc-50 mb-2">
              Template Library
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              No templates available yet. Create your own templates to use here!
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
