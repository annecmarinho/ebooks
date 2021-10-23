import React, { useState, useEffect } from "react";

function Selecionados ({ selecionados }) {
  const [filtros, setFiltros] = useState(selecionados);

  useEffect(() => {
      setFiltros(selecionados);
  }, [selecionados]);

  return (
    <div>
      {filtros !== "" && (
        <p>{filtros.join(" ")}</p>
      )}
    </div>
  );
}

export default Selecionados;