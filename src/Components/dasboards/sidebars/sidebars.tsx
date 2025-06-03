import React, { useState } from "react";
import { FileText, Users } from "lucide-react";
import Navbar from "../../dasboards/navbars/Navbar";
import UsersLog from "../../dasboards/users/users";
import AuditLogs from "../../dasboards/auditlogs/AuditLogs";
import Activites from "../adminViewDashboads/activitiesDashboard/mainPage"
import styles from './Sidebar.module.css';



interface MenuItem {
  label: string;
  icon: React.ReactNode;
}

const menuItems: MenuItem[] = [
  { label: 'Audit Log', icon: <FileText size={18} /> },
  { label: 'Users', icon: <Users size={18} /> },
  { label: 'Activities', icon: <FileText size={18} /> }
];

const Sidebar: React.FC = () => {
  const [active, setActive] = useState('Audit Log');

  return (
    <>
      <Navbar />
      <div className={styles.sidebarContainer}>

        <div className={styles.sidebar}>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li
                key={item.label}
                className={`${styles.menuItem} ${active === item.label ? styles.active : ""}`}
                onClick={() => setActive(item.label)}
              >
                <span className={styles.icon}>{item.icon}</span>
                <span className={styles.label}>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.content}>
          {active === 'Audit Log' && <AuditLogs />}
          {active === 'Users' &&  <UsersLog />}
          {active === 'Activities' && <Activites />}
        </div>

      </div>
    </>
  );
};

export default Sidebar;
