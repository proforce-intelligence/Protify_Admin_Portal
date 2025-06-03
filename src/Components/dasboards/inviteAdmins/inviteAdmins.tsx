import React from "react";
import styles from "./inviteAdmins.module.css";



interface InviteAdminsProps {
  onClose: () => void;
}

export const InviteAdmins: React.FC<InviteAdminsProps> = ({ onClose }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.headerBTN}>
          <div className={styles.headerBtn}>
        <h2 className={styles.title}>Invite User</h2>
        <p className={styles.subtitle}>Invite a user by filling the information below</p>
          </div>
            <button className={styles.closeButton} onClick={onClose}>
            &times;
           </button> 
         </div> 

        <form className={styles.form}>
          <label>
            First Name
            <input type="text" placeholder="First Name" />
          </label>
          <label>
            Last Name
            <input type="text" placeholder="Last Name" />
          </label>
          <label>
            Username
            <input type="text" placeholder="Username" />
          </label>
          <label>
            Email
            <input type="email" placeholder="Email" />
          </label>
          <label>
            Branch
            <select>
              <option>Head Office, Lagos</option>
              <option>Branch A</option>
              <option>Branch B</option>
            </select>
          </label>
          <label>
            Role
            <select>
              <option>Branch Personnel</option>
              <option>Admin</option>
              <option>Manager</option>
            </select>
          </label>
          <button type="submit">Invite User</button>
        </form>
      </div>
    </div>
  );
};
