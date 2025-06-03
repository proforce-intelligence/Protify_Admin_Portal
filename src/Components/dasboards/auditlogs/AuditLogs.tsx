import React, { useState } from "react";
import { Search } from "lucide-react";
import styles from "./AuditLogs.module.css";

const logs = [
  {
    userName: "Biola Adeyemi",
    email: "fortbllod@gmail.com",
    name: "Olanrewaju Adekunle",
    devices: "Iphone14 pro max",
    install: "76328387432",
    time: "12/08/2023 – 16:59",
  },
  {
    userName: "Chidera Okeke",
     email: "usergun@gmail.com",
    name: "Davis Uche",
    devices: "Tecno843Z",
    install: "76344325672",
    time: "12/08/2023 – 16:59",
  },
  {
    userName: "John Doe",
     email: "rimhgyyds@gmail.com",
    name: "Chidera Okeke",
    devices: "Samsung Galaxy S23",
    install: "76333218877672",
    time: "12/08/2023 – 16:59",
  },
];

const AuditLogs: React.FC = () => {
  const [showExportMenu, setShowExportMenu] = useState(false);

  const handleExport = (type: string) => {
    console.log("Exporting as", type);
    setShowExportMenu(false);
    // Add your export logic here
  };

  return (
    <div className={styles.auditLogs}>
      <div className={styles.auditlogchild}>
        <h2 className={styles.auditLogH2}>Audit Logs</h2>
        <div className={styles.auditlogchild2}>
          <h4 className={styles.auditLogH4}>viewing Activity for</h4>
          <select className={styles.auditLogSelect}>
            <option>Today</option>
            <option>This Week</option>
            <option>last weeks</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>Last 30 days</option>
            <option>Last 60 days</option>
            <option>This year</option>
            <option>Last year</option>
          </select>

          <div className={styles.exportDropdown}>
            <button
              onClick={() => setShowExportMenu(!showExportMenu)}
              className={styles.exportButton}
            >
              Export ▼
            </button>
            <div
              className={`${styles.exportMenu} ${
                showExportMenu ? styles.show : ""
              }`}
            >
              <div
                className={styles.exportItem}
                onClick={() => handleExport("PDF")}
              >
                 PDF
              </div>
              <div
                className={styles.exportItem}
                onClick={() => handleExport("SVG")}
              >
                SVG
              </div>
              <div
                className={styles.exportItem}
                onClick={() => handleExport("CSV")}
              >
                CSV
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.filters}>
        <div className={styles.filterSection}>
          <select className={styles.auditLogSelect}>
            <option>Spyware / malware</option>
            <option>Data theft</option>
            <option>Blocking and notification</option>
            <option>Phishing Attacks</option>
            <option>Exploits</option>
            <option>Zero-click exploits</option>
            <option>Battery drain</option>
            <option>Blocking hacking tools </option>
            <option>Blocking malicious websites</option>
            <option>Blocking malicious apps</option>
            <option>Blocking malicious downloads</option>
            <option>Blocking malicious ads</option>
            <option>Blocking malicious links</option>
            <option>Blocking malicious emails</option>
            <option>Blocking malicious SMS</option>
            <option>Active monitoring</option>
            <option>All Activities</option>
          </select>
          <select className={styles.auditLogSelect}>
            <option>All Mobile Phone</option>
            <option>Android</option>
            <option>iOS</option>
          </select>
        </div>
        <div className={styles.searchContainer}>
          <Search className={styles.icon} size={18} />
          <input
            type="text"
            placeholder="Search by name"
            className={styles.input}
          />
        </div>
      </div>

      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th className={styles.th}>UserName</th>
            <th className={styles.th}>UserEmail</th>
            <th className={styles.th}>AdminName</th>
            <th className={styles.th}>Device</th>
            <th className={styles.th}>Installation</th>
            <th className={styles.th}>Date & Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, i) => (
            <tr key={i}>
              <td className={styles.td}>{log.userName}</td>
              <td className={styles.td}>{log.email}</td>
              <td className={styles.td}>{log.name}</td>
              <td className={styles.td}>{log.devices}</td>
              <td className={styles.td}>{log.install}</td>
              <td className={styles.td}>{log.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuditLogs;
