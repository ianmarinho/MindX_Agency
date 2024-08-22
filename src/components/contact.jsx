import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";
import './contact.css'; // Importando o arquivo CSS

// Estado inicial do formulário
const initialState = {
  name: "",
  email: "",
  message: "",
};

export const Contact = (props) => {
  // Usa o estado para armazenar os valores do formulário
  const [formState, setFormState] = useState(initialState);
  const { name, email, message } = formState;

  // Função para lidar com as mudanças nos inputs do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  // Função para limpar o estado do formulário (resetar)
  const clearState = () => setFormState({ ...initialState });

  // Função para lidar com o envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário
    console.log(name, email, message); // Exibe os valores do formulário no console

    // Envia o formulário utilizando o EmailJS
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_PUBLIC_KEY")
      .then(
        (result) => {
          console.log(result.text); // Exibe a resposta de sucesso no console
          clearState(); // Limpa o formulário após o envio bem-sucedido
        },
        (error) => {
          console.log(error.text); // Exibe o erro no console em caso de falha
        }
      );
  };

  return (
    <div className="contact-container">
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

              <form name="sentMessage" validate onSubmit={handleSubmit}>
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
                      />
                      <p className="help-block text-danger"></p>
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
                      />
                      <p className="help-block text-danger"></p>
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
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>

                <div id="success"></div>
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
