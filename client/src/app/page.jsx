import Login from "./(auth)/login/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Login />
    </main>
  );
}
