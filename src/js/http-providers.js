// Peticiones Http
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

const cloudPreset = 'z6im9tyv';
const cloudUri = 'https://api.cloudinary.com/v1_1/dwztw27cu/upload';

// cuidado con el 'redableStream' por ello necesitamos el Json
/*
fetch(jokeUrl).then((resp) => {
  resp.json().then((data) => console.log(data));
});

fetch(jokeUrl)
  .then((resp) => resp.json())
  .then(console.log);
  // podemos desestructurar la respuesta ({id, value}) => console.log(id, value)
*/

const obtenerChiste = async () => {
  try {
    const resp = await fetch(jokeUrl);
    if (!resp.ok) {
      throw 'No se pudo realizar la peticion';
    }

    const { id, icon_url, value } = await resp.json();
    return { id, icon_url, value };
  } catch (error) {
    throw error;
  }
};

const obtenerUsuarios = async () => {
  const rpta = await fetch(urlUsuarios);
  const { data: usuarios } = await rpta.json(); // sabemos que viene 'data' pero podemos renonbrar

  return usuarios;
};

const subirArchivo = async (archivoSubir) => {
  const formData = new FormData();
  formData.append('upload_preset', cloudPreset);
  formData.append('file', archivoSubir);

  try {
    const resp = await fetch(cloudUri, {
      method: 'POST',
      body: formData,
    });

    if (resp.ok) {
      const cloudResp = await resp.json();
      console.log(cloudResp);
      return cloudResp.secure_url;
    } else {
      throw await resp.json();
    }
  } catch (error) {
    throw error;
  }
};

export { obtenerChiste, obtenerUsuarios, subirArchivo };
