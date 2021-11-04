import React, { useState, useEffect } from "react";

function Selecionados ({ selecionados }) {
  const [filtros, setFiltros] = useState(selecionados);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
      const newFiltros = [];

      for (let i = 0; i < selecionados.length && i < 1; i++) {
        const element = selecionados[i];
        newFiltros.push(element)
      }

      setFiltros(newFiltros);

      setShowWarning(selecionados.length >= 1);
  }, [selecionados]);

  useEffect(() => {
    console.log(filtros);
  }, [filtros])
  
  return (
    <div>
      {filtros !== "" && (
        <p>{filtros.join(" ")}</p>
      )}
      {showWarning === true && <h4 className="Maximo">Numero maximo de filtros atingido</h4>}
      
    </div>
  );
}

export default Selecionados;