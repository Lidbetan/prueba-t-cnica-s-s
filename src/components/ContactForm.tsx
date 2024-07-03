"use client";
import { useState } from "react";
import styles from "../styles/home.module.css";
import { IFormData } from "@/interfaces/formData.interface";

export function ContactForm() {
    const [formData, setFormData] = useState<IFormData>({
        name: "",
        email: "",
        message: "",
    });
    const [isValid, setIsValid] = useState<Boolean>(false);

    //Lee el valor de cada input y lo asigna al objeto formData
    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    //Lógica de validación básica del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (
            formData.name !== "" ||
            formData.email !== "" ||
            formData.message !== ""
        ) {
            //Permite renderizar de forma condicional el mensaje de éxito
            setIsValid(true);
            return isValid;
        } else {
            alert("Por favor complete todos los campos");
        }
    };

    return (
        <>
            <section className={styles.contact}>
                <h2>Deja tu mensaje</h2>
                <form
                    className={styles.form}
                    onSubmit={handleSubmit}
                    method="post"
                >
                    <div className={styles.formDivs}>
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
                    <div className={styles.formDivs}>
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
                    <div className={styles.formDivs}>
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
                    {!isValid ? (
                        <button type="submit">Enviar</button>
                    ) : (
                        <span>Mensaje enviado con éxito</span>
                    )}
                </form>
            </section>
        </>
    );
}
