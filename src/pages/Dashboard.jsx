import MyDrawer from "../components/Global/myDrawer";
import Sidebar from "../components/Global/Sidebar";

function Dashboard() {
  return (
    <main className="bg-slate-50 md:grid md:grid-cols-[30%_70%]">
      <div className="block md:hidden">
        <MyDrawer />
      </div>
      <div className="hidden md:block">
        <Sidebar />
      </div>
      <section className="p-4">
        <h1>Dashboard</h1>
      </section>
    </main>
  );
}
export default Dashboard;
