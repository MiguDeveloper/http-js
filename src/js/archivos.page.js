import { subirArchivo } from './http-providers';

const body = document.body;
let inputFile, imgFoto;

const crearInputHtml = () => {
  const html = `
    <h1 class="mt-5">Subir archivos</h1>
    <hr>
    <label for="archivo">Selecciona una imagen</label>
    <input class="form-control" type="file" id="archivo" accept=""image/png, image/jpeg>
    <br>
    <img id="foto" class="img-thumbnail" src="">
    `;

  const div = document.createElement('div');
  div.innerHTML = html;
  body.appendChild(div);

  inputFile = document.querySelector('input');
  imgFoto = document.querySelector('#foto');
};

const eventos = () => {
  inputFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    subirArchivo(file).then((url) => {
      imgFoto.src = url;
    });
  });
};

export const init = () => {
  crearInputHtml();
  eventos();
};
