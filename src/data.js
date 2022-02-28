
export const filterData = (datos, condicion) => {
  return datos.filter(condicion);
}

export const sortData = (datos, condicion) => {
  return datos.sort(condicion);
}

export const obtenerPromedio = (datos) => {
  const reducer = (acumulador, dato) => acumulador + dato;
  const sumaDeCalifaciones = datos.reduce(reducer);
  return sumaDeCalifaciones / datos.length;
}

export const filtrar = (films, selected) => {
  let result = films.filter((filmSection) => filmSection.release_date == selected);
  if (selected == 'all') {
    return films;
  }
  else {
    return result;
  }

};

export const organizar = (peliculas) => {
  let resultado = peliculas.sort((a, b) => {
    if (b.title < a.title) return -1;
    return 1;
  })
  return resultado;
}




