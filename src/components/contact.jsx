import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import './contact.css';
import { ToastContainer, toast } from 'react-toastify'; // Importando o ToastContainer e o toast
import 'react-toastify/dist/ReactToastify.css'; // Importando o CSS do Toastify

const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  const [formState, setFormState] = useState(initialState);
  const { name, email, message } = formState;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setFormState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formState.name,
      from_email: formState.email,
      message: formState.message,
      reply_to: formState.email,
    };

    emailjs
      .send('service_mlwb77n', 'template_fd24gap', templateParams, 'kPGJ8UW2_1gJWqs3I')
      .then(
        (result) => {
          console.log("Email enviado com sucesso:", result.text);
          toast.success('Mensagem enviada com sucesso!'); // Notificação de sucesso
          clearState();
        },
        (error) => {
          console.error("Erro ao enviar email:", error.text);
          toast.error('Erro ao enviar mensagem. Tente novamente.'); // Notificação de erro
        }
      );
  };

  return (
    <div className="contact-container">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />

      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Entre em Contato</h2>
                <p>
                  Preencha o formulário abaixo para nos enviar um e-mail e entraremos em contato com você o mais breve possível.
                </p>
              </div>

              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Nome"
                        required
                        onChange={handleChange}
                        value={name}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={handleChange}
                        value={email}
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Mensagem"
                    required
                    onChange={handleChange}
                    value={message}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-custom btn-lg">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>

          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contato</h3>
              <p style={{ fontSize: "18px" }}>
                <span>
                  <a href={`https://wa.me/${props.data ? props.data.phone : ""}`} target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-whatsapp" style={{ color: "purple", fontSize: "24px" }}></i> WhatsApp
                  </a>
                </span>{" "}
                {props.data ? props.data.phone : "Carregando..."}
              </p>
            </div>

            <div className="contact-item">
              <p style={{ fontSize: "18px" }}>
                <span>
                  <a href={`mailto:${props.data ? props.data.email : ""}`} target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-envelope" style={{ color: "purple", fontSize: "24px" }}></i> Email
                  </a>
                </span>{" "}
                {props.data ? props.data.email : "Carregando..."}
              </p>
            </div>

            <div className="contact-item">
              <p style={{ fontSize: "18px" }}>
                <span>
                  <a href="https://www.instagram.com/mindxagency/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram" style={{ color: "purple", fontSize: "24px" }}></i> Instagram
                  </a>
                </span>{" "}
                {props.data ? props.data.instagram : "Carregando..."}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="footer">
        <div className="container text-center">
          <p>&copy; 2024 Desenvolvido por Ian</p>
        </div>
      </div>
    </div>
  );
};
