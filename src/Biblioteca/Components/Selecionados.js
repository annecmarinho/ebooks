import React, { useState, useEffect } from "react";

function Selecionados ({ selecionados }) {
  const [filtros, setFiltros] = useState(selecionados);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
      setFiltros(selecionados);

      if(selecionados.length >=1){
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }


  }, [selecionados]);

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