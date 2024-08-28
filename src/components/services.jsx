import React from "react";
import styles from './services.css';

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Todos os Serviços</h2>
          <p>Conheça Nossos Serviços</p>
        </div>

        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 mb-4">
                <div className="service-item">
                  <i className={`${d.icon} fa-3x mb-3`}></i>

                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                    <p className="service-description">{d.description}</p>
                  </div>
                </div>
              </div>
            ))
            : "Carregando..."}
        </div>
      </div>
    </div>
  );
};
