import axios from "axios";
import Cookies from "js-cookie";
import { redirect } from "next/navigation";
import { toast } from "nextjs-toast-notify";

const API_BASE_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8080";

const axiosClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(
    (config) => {
        const token = Cookies.get('auth_token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            toast.error("Sesion expirada, por favor inicie sesion nuevamente");
            redirect("/auth/login");
        }
        return Promise.reject(error);
    }
);

export default axiosClient;

