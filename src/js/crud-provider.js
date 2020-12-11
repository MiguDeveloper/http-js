const apiUrl = 'https://reqres.in/api/users';

const getUsuario = async (id) => {
  const resp = await fetch(`${apiUrl}/${id}`);
  const { data } = await resp.json();
  return data;
};

const createUser = async (usuario) => {
  const resp = await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await resp.json();
};

const updateUser = async (usuario, id) => {
  const resp = await fetch(`${apiUrl}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(usuario),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await resp.json();
};

const deleteUser = async (id) => {
  const resp = await fetch(`${apiUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return resp.ok ? 'Borrado' : 'No se pudo eliminar';
};

export { getUsuario, createUser, updateUser, deleteUser };
