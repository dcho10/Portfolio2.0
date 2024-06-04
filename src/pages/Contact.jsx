import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target

        if (name === "name") {
            setName(value);
        } else if (name === "email") {
            setEmail(value);
        } else if (name === "message") {
            setMessage(value);
        }
    };

    const handleInputBlur = (event) => {
        const { name, value } = event.target;

        if (!value) {
            setErrorMessage(`${name.charAt(0).toUpperCase() + name.slice(1)} is required.`)
        } else {
            setErrorMessage("");
        }

        if (name === "email" && value && !validateEmail(value)) {
            setErrorMessage("Invalid email, please enter a valid email.");
        }
    }
    
    const handleFormSubmit = (event) => {
        event.preventDefault();

        if (!name || !email || !message) {
            setErrorMessage("All fields required.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email, please enter a valid email.");
        }

        setName("");
        setEmail("");
        setMessage("");
        setErrorMessage("");
    };

    return (
        <>
        <section>
            <section className="contact">
                    <h1 className="contact-title"> Contact me! </h1>
                <form className="contact-card" onSubmit={handleFormSubmit}>
                    <section className="contact-name">
                        <h4> Name </h4>
                        <input 
                            value={name} 
                            name="name" 
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            type="text" 
                            id="enter-name" className="name-input"
                            autoComplete="name"
                            required
                        />
                    </section>

                    <section className="contact-email">
                        <h4> Email </h4>
                        <input 
                            value={email}
                            name="email" 
                            onChange={handleInputChange}
                            onBlur={handleInputBlur} 
                            type="email" 
                            id="enter-email" className="email-input"
                            autoComplete="email"
                            required 
                        />
                    </section>

                    <section className="contact-message">
                        <h4> Message </h4>
                        <textarea 
                            value={message} 
                            name="message"
                            onChange={handleInputChange}
                            onBlur={handleInputBlur}
                            id="message"
                            className="enter-message"
                            autoComplete="message"
                            required 
                        />
                        <button type="submit" className="send-btn"> Send </button>
                    </section>

                    {errorMessage && (
                        <section className="error-message">
                            <p>{errorMessage}</p>
                        </section>
                    )}
                </form>
            </section>
        </section>
        </>
    )
}