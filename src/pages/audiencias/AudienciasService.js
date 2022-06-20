export const getDestinos = () => [
  { id: "1", title: "Estudantes" },
  { id: "2", title: "Docentes" },
  { id: "3", title: "Chefe do Departamento" },
  { id: "4", title: "Director do Curso" },
  { id: "5", title: "Director da Faculdade" },
];
export const getProveniencias = () => [
  { id: "1", title: "Reitoria" },
  { id: "2", title: "Faculdade de Letras" },
  { id: "3", title: "Faculdade de Engenharia" },
  { id: "4", title: "Departamento de Biologia" },
  { id: "5", title: "Empresa X" },
];
export const getLocalidade = () => [
  { id: "1", title: "Maputo" },
  { id: "2", title: "Gaza" },
  { id: "3", title: "Inhambane" },
];

const KEYS = {
  registos: "registos",
  registoId: "registosId",
};
// creating
export function create(data) {
  let registos = list();
  data["id"] = genereteRegistoId();
  registos.push(data);
  localStorage.setItem(KEYS.registos, JSON.stringify(registos));
}

//geracao do Id
export function genereteRegistoId() {
  if (localStorage.getItem(KEYS.registoId) == null)
    localStorage.setItem(KEYS.registoId, "0");
  var id = JSON.parse(localStorage.getItem(KEYS.registoId));
  localStorage.setItem(KEYS.registoId, (++id).toString());
  return id;
}

// updating
export function update(data) {
  let registos = list();
  let recordIndex = registos.findIndex((x) => x.id == data.id);
  registos[recordIndex] = { ...data };
  localStorage.setItem(KEYS.registos, JSON.stringify(registos));
}

//Geting
export function list() {
  if (localStorage.getItem(KEYS.registos) == null)
    localStorage.setItem(KEYS.registos, JSON.stringify([]));
  return JSON.parse(localStorage.getItem(KEYS.registos));
  // mapeando id para titulo na tabla
  // let destinos = getDestinos();

  // return registos.map((x) => ({
  //   ...x,
  //   destino: destinos[x.destino_id - 1].title,
  // }));
}
//destroy
export function destroy(id) {
  let registos = list();
  registos = registos.filter((x) => x.id != id);
  localStorage.setItem(KEYS.registos, JSON.stringify(registos));
}
