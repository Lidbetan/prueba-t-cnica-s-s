"use client";
import { useState } from "react";
import userStyles from "../styles/users.module.css";
import { IFormData } from "@/interfaces/formData.interface";

export function ContactForm({ userFirstName }: { userFirstName: string }) {
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isValid, setIsValid] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [incomplete, setIncomplete] = useState<boolean>(false);

    //Lee el valor de cada input y lo asigna al objeto formData
    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
        if (formData.name && formData.email && formData.message) {
            setIncomplete(false);
        }
    };

    //Lógica de validación básica del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formData.name && formData.email && formData.message) {
            setIsLoading(true);
            try {
                await new Promise(() =>
                    setTimeout(() => {
                        setIsLoading(false);
                        setIsValid(true);

                        return isLoading && isValid && incomplete;
                    }, 3000)
                );
            } catch {
                setIsLoading(false);
                setError(true);
                return error && isLoading;
            }
        } else {
            setIncomplete(true);
            return incomplete;
        }
    };

    return (
        <>
            <section className={userStyles.contact}>
                <h2>
                    Contacta a{" "}
                    <span className={userStyles.userSpan}>{userFirstName}</span>
                </h2>
                <form
                    className={userStyles.form}
                    onSubmit={handleSubmit}
                    method="post"
                >
                    <div className={userStyles.formDivs}>
                        <label htmlFor="name">Nombre y Apellido</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Robert Plant"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={userStyles.formDivs}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="youremail@something.com"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={userStyles.formDivs}>
                        <label htmlFor="message">Mensaje</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Enter your message here"
                            rows={4}
                            value={formData.message}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className={userStyles.formDivs}>
                        {!isLoading && !isValid ? (
                            <button type="submit">Enviar</button>
                        ) : isValid ? (
                            <span id="succesBtn">
                                Mensaje enviado con éxito
                            </span>
                        ) : error ? (
                            <span id="succesBtn">Ocurrió un error</span>
                        ) : (
                            <span id="succesBtn">Cargando...</span>
                        )}
                    </div>
                </form>
                {incomplete && <span>Por favor complete todos los campos</span>}
            </section>
        </>
    );
}
