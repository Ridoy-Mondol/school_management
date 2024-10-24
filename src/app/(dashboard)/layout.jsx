import Menu from "../components/Menu";
export default function DashboardLayout({ children }) {
    return (
      <div className="flex">
        <Menu />
        {children}
      </div>
    );
  }
  