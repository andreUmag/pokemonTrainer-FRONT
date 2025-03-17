"use client";

import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axiosClient from "@/lib/axiosClient";
import { toast } from "nextjs-toast-notify";
import { AxiosError } from "axios";
import ShinyText from "@/components/ShinyText";
import Cookies from "js-cookie";
import "./edit-profile.css";

function EditProfilePage() {
  const router = useRouter();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    birthdate: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = Cookies.get("user_id");
    if (!userId) {
      redirect("/auth/login");
    }

    axiosClient
      .get(`api/trainers/${userId}`)
      .then((response) => {
        if (response.status === 200) {
          const userData = response.data;
          setForm({
            firstName: userData.firstName || "",
            lastName: userData.lastName || "",
            email: userData.email || "",
            birthdate: userData.birthDate || "",
            password: "",
            confirmPassword: "",
          });
        }
      })
      .catch((error) => {
        toast.error("Error al cargar los datos del usuario", {
          duration: 5000,
          position: "top-center",
        });
        redirect("/");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const updateProfile = () => {
    const userId = Cookies.get("user_id");
    if (form.password && form.password !== form.confirmPassword) {
      toast.error("Las contraseñas no coinciden", {
        duration: 3000,
        position: "top-center",
      });
      return;
    }
    const updateData = {
      firstName: form.firstName,
      lastName: form.lastName,
      email: form.email,
      birthDate: form.birthdate,
      ...(form.password && { password: form.password }),
    };

    axiosClient
      .put(`api/trainers/${userId}`, updateData)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Perfil actualizado correctamente", {
            duration: 2000,
          });
          router.push("/");
        }
      })
      .catch((error) => {
        if (error instanceof AxiosError) {
          let errors = error.response?.data?.errors;
          if (errors) {
            const message = Object.keys(errors)
              .map((key) => errors[key])
              .join("<br>");
            toast.error(message, {
              duration: 5000,
              position: "top-center",
            });
          } else {
            toast.error("Error al actualizar el perfil", {
              duration: 5000,
              position: "top-center",
            });
          }
        } else {
          toast.error("Error al actualizar el perfil", {
            duration: 5000,
            position: "top-center",
          });
        }
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="login mt-20">
      <div className="iconlogo">
        <img className="pokeball" src="/pokeball.webp" alt="poke" />
        <ShinyText
          text="EDITAR PERFIL"
          disabled={false}
          speed={5}
          className="tittle"
        />
      </div>
      <form className="inputs mb-5">
        <input
          type="text"
          placeholder="NOMBRE"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
        />
        <input
          type="text"
          placeholder="APELLIDO"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
        />
        <input
          type="text"
          placeholder="CORREO"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="date"
          placeholder="FECHA DE NACIMIENTO"
          value={form.birthdate}
          onChange={(e) => {
            const selectedDate = e.target.value;
            setForm({ ...form, birthdate: selectedDate });
          }}
        />
        <input
          type="password"
          placeholder="NUEVA CONTRASEÑA"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <input
          type="password"
          placeholder="CONFIRMAR NUEVA CONTRASEÑA"
          value={form.confirmPassword}
          onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
        />
      </form>
      <div className="buttonslinks">
        <button className="gradient-button" onClick={updateProfile}>
          GUARDAR CAMBIOS
        </button>
        <div className="links">
          <div className="create">
            <a href="/" className="createacount">
              CANCELAR
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfilePage;