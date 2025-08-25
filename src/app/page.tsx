
import Header from "@/components/Header";
import LogInform from "@/components/LogInform"


export default function Home() {
  const user = false
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />

      {user && <p>Welcome to my site</p>}
      :<LogInform />
    </div>
  );
}
