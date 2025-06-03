import React, { useState } from "react";
import styles from "./users.module.css";
import { InviteAdmins } from "../inviteAdmins/inviteAdmins";
import { MoreVertical, Search } from "lucide-react";

type User = {
  name: string;
  email: string;
  status: string;
};

const userData: User[] = [
  { name: "Olanrewaju Adekunle", email: "olanrewaju.adekunle@sample.com", status: "Active" },
  { name: "Adeola Adekunle", email: "adeola.adekunle@sample.com", status: "Active" },
  { name: "Ciroma Chukwuma", email: "ciroma.chukwuma@sample.com", status: "Active" },
  { name: "Chukwuma Adekunle", email: "chukwuma.adekunle@sample.com", status: "Active" },
  { name: "Adeola Adeyemi", email: "adeola.adeyemi@sample.com", status: "Active" },
  { name: "Busayomi Adeyemi", email: "busayo.adeyemi@sample.com", status: "Inactive" },
];

const Users: React.FC = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const openModal = () => setShowInviteModal(true);
  const closeModal = () => setShowInviteModal(false);

  const handleActionClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseUserModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className={styles.usersContainer}>
      {showInviteModal && <InviteAdmins onClose={closeModal} />}

      <div className={styles.header}>
        <div className={styles.auditlogchild}>
          <h2 className={styles.auditLogH2}>Admin Logs</h2>
          <button className={styles.inviteBtn} onClick={openModal}>Invite Admin</button>
        </div>

        <div className={styles.auditlogchild22}>
          <select className={styles.auditLogSelect}>
            <option>Today</option>
            <option>This Week</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This year</option>
          </select>

          <div className={styles.searchContainer}>
            <Search className={styles.icon} size={18} />
            <input type="text" placeholder="Search by name" className={styles.input} />
          </div>
        </div>
      </div>

      <div className={styles.tableWrapper}>
        <table className={styles.userTable}>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Role</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, idx) => (
              <tr key={idx}>
                <td><input type="checkbox" /></td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <span className={`${styles.status} ${user.status === "Active" ? styles.active : styles.inactive}`}>
                    {user.status}
                  </span>
                </td>
                <td><span className={styles.adminRole}>Admin</span></td>
                <td>
                  <MoreVertical size={18} onClick={() => handleActionClick(user)} className={styles.actionIcon} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedUser && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h3>Manage Access for</h3>
            <p>{selectedUser.name}</p>
            <div className={styles.modalActions}>
              <button className={styles.suspendBtn}>Suspend</button>
              <button className={styles.activateBtn}>Activate</button>
            </div>
            <button className={styles.closeModal} onClick={handleCloseUserModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
