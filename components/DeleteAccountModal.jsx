"use client";

import { toast } from "nextjs-toast-notify";
import axiosClient from "@/lib/axiosClient";
import Cookies from "js-cookie";
import "./DeleteAccountModal.css";

export default function DeleteAccountModal({ isOpen, onClose, onLogout }) {
  const confirmDeleteAccount = () => {
    const userId = Cookies.get("user_id");

    if (!userId) {
      toast.error("No se pudo obtener el ID del usuario", {
        duration: 5000,
        position: "top-center",
      });
      return;
    }

    axiosClient
      .delete(`/api/trainers/${userId}`)
      .then(() => {
        toast.success("Cuenta eliminada correctamente", {
          duration: 2000,
        });
        onLogout();
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          toast.error(error.response?.data?.message || "Error al eliminar la cuenta", {
            duration: 5000,
            position: "top-center",
          });
        } else {
          toast.error("Error al eliminar la cuenta", {
            duration: 5000,
            position: "top-center",
          });
        }
      })
      .finally(() => {
        onClose();
      });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <p className="text-lg font-bold">¿Estás seguro de que deseas eliminar tu cuenta?</p>
        <p>Esta acción no se puede deshacer.</p>
        <div className="modal-actions">
          <button onClick={onClose}>Cancelar</button>
          <button onClick={confirmDeleteAccount}>Eliminar cuenta</button>
        </div>
      </div>
    </div>
  );
}