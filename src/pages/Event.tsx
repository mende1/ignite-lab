import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { MainEvent } from "../components/MainEvent";

export function Event() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <MainEvent />
        <Sidebar />
      </main>
    </div>
  );
}
