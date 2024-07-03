"use client";
import styles from "../styles/home.module.css";

export function ContactForm() {
    return (
        <>
            <section>
                <h2>Deja tu mensaje</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nombre y Apellido:</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensaje:</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            required
                        />
                    </div>
                    <button type="submit">Enviar</button>
                </form>
            </section>
        </>
    );
}
