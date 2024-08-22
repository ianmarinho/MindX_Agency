import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conheça Nossa Equipe</h2>
          <p>
            Conheça nossa equipe apaixonada e dedicada, formada por especialistas que trazem inovação e excelência em cada projeto. Juntos, transformamos ideias em soluções impactantes.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="col-md-4 col-sm-6 team-member">
                <div className="thumbnail">
                  <img src={d.img} alt={d.name} className="team-img" />
                  <div className="caption">
                    <h4>{d.name}</h4>
                    <p>{d.job}</p>
                  </div>
                </div>
              </div>
            ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};