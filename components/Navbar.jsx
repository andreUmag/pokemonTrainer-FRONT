"use client";

import { useState } from "react";
import ShinyText from "./ShinyText";
import "./Navbar.css";
import { User } from "lucide-react";
import Cookies from "js-cookie";
import UserMenu from "./UserMenu";
import DeleteAccountModal from "./DeleteAccountModal";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleLogout = () => {
    Cookies.remove("user_id");
    window.location.href = "/auth/login";
  };

  const handleEditProfile = () => {
    window.location.href = "/home/edit-profile";
  };

  const handleDeleteAccount = () => {
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="flex-1 flex items-center">
        <ShinyText
          text="POKEMON TRAINER"
          disabled={false}
          speed={5}
          className="tittle ml-5"
        />
      </div>
      <div className="flex-none flex items-center">
        <div className="relative mr-4">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="btn btn-ghost flex items-center"
            style={{ marginRight: "20px", cursor: "pointer" }}
          >
            <User size={24} />
          </button>

          {isMenuOpen && (
            <UserMenu
              onEditProfile={handleEditProfile}
              onDeleteAccount={handleDeleteAccount}
              onLogout={handleLogout}
            />
          )}
        </div>
      </div>

      <DeleteAccountModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onLogout={handleLogout}
      />
    </div>
  );
}