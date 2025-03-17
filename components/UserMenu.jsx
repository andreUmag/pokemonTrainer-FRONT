"use client";

import { LogOut, User, Edit, Trash2 } from "lucide-react";

export default function UserMenu({ onEditProfile, onDeleteAccount, onLogout }) {
  return (
    <div className="user-menu absolute right-0 mt-4 mr-4 w-48 border border-gray-400 rounded-lg shadow-lg">
      <button
        onClick={onEditProfile}
        style={{ cursor: "pointer" }}
        className="w-full px-4 py-2 text-left flex items-center"
      >
        <Edit size={16} className="mr-2" />
        Editar perfil
      </button>
      <button
        onClick={onDeleteAccount}
        style={{ cursor: "pointer" }}
        className="w-full px-4 py-2 text-left flex items-center"
      >
        <Trash2 size={16} className="mr-2" />
        Eliminar cuenta
      </button>
      <button
        onClick={onLogout}
        className="w-full px-4 py-2 text-left flex items-center"
        style={{ cursor: "pointer" }}
      >
        <LogOut size={16} className="mr-2" />
        Cerrar sesión
      </button>
    </div>
  );
}