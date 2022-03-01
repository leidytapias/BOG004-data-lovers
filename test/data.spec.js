
import { filterData, filterMovies, orderMovies, porcentMovies } from "../src/data.js";
import data from "../src/data/ghibli/ghibli.js";

let movies = [
  { "title": "My Neighbor Totoro",
  "release_date": "1988",
},
{ "title": "Spirited Away",
  "release_date": "2001",
},
{ "title": "Kaguya Princess",
  "release_date": "2013",
},
 
]

describe("pruebas para la funcion filterData", () => {
  it("verificar que filterData es una funcion", () => {
    expect(typeof filterData).toBe("function");
  });

  it("deberia retornar la pelicula My Neighbor Totoro", () => {
    let tituloPelicula = "totoro";
    const peliculasFiltradas = filterData(data.films, (pelicula) =>
      pelicula.title.toLowerCase().includes(tituloPelicula)
    );
    expect(peliculasFiltradas[0].title).toBe("My Neighbor Totoro");
  });
});
  it("deberia retornar el miercoles", () => {
    const diasDeLaSemanas = filterData(
      [
        "lunes",
        "martes",
        "miercoles",
        "jueves",
        "viernes",
        "sabado",
        "domingo"
      ],
      (dato) => dato ==='miercoles'
    );
    expect(diasDeLaSemanas[0]).toBe("miercoles");
  });

  describe("Test to filterMovies function", () => {
    it("filterMovies is a function", () => {
      expect(typeof filterMovies).toBe("function");
    });
  });
    it("Should be return all movies", () => {
      let selected = 'all';
      let result = filterMovies(movies,selected);
      expect(result).toBe(movies);
    });
    it ('Should be return Spirited Away ', () => {
     let result1 = filterMovies(movies,2001);
     expect(result1[0].title).toStrictEqual("Spirited Away")
    })

    describe("Test to orderMovies function", () => {
      it("orderMovies is a function", () => {
        expect(typeof orderMovies).toBe("function");
      });
    });
      it("Should be return Kaguya Princess", () => {
        let result2 = orderMovies(movies);
        expect(result2[2].title).toBe("Kaguya Princess");
      });

      describe("Test to porcentMovies function", () => {
        it("orderMovies is a function", () => {
          expect(typeof porcentMovies).toBe("function");
        });
      });
        it("Should be return 25%", () => {
          let result3 = porcentMovies(180,45);
          expect(result3).toBe("25%");
        });
  
