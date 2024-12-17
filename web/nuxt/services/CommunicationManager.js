//const url = 'http://localhost:8000';
const url = 'https://cinescar.onrender.com'; //producción

//Fetch de administradores
export async function afegirSessio(data){
    try {
        const response = await fetch(`${url}/api/afegirSessio`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ data: data }),
        });

        if (!response.ok) {
            throw new Error("Error al guardar la sesión");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error al guardar la sesión:", error);
        throw error;
    }
}

export async function GetSessions() {
    try {
        const response = await fetch(`${url}/api/sessions`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos de la API");
        }
        const data = await response.json();
        return data.sessions;
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        throw error;
    }
}
export async function borrarSessio(sessionId) {
    try {
        const response = await fetch(`${url}/api/esborrarSessio/${sessionId}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            throw new Error("Error al borrar sesión");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error al borrar sesión:", error);
        throw error;
    }
}
export async function fetchButacasPorSesion() {
    try {
        const response = await fetch(`${url}/api/butacasPorSesion`);
        if (!response.ok) {
            throw new Error("Error al obtener los datos de la API");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener datos de la API:", error);
        throw error;
    }
}


export async function GetPelicules() {
    try {
        const response = await fetch(`${url}/api/pelicules`);
        if (!response.ok) {
            throw new Error('Error al obtener los datos de la API');
        }
        const data = await response.json();
        // Verificar si la respuesta tiene la estructura esperada
        if (Array.isArray(data)) {
            return data;
        } else {
            throw new Error('La respuesta de la API no tiene el formato esperado');
        }
    } catch (error) {
        console.error('Error al obtener datos de la API:', error);
        throw error;
    }
}

export async function login(email, password) {
    try {
        const response = await fetch(`${url}/api/login`, {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
  
          if (!response.ok) {
            throw new Error("Credenciales inválidas");
          }  

        const data = await response.json();
        return data; // Retornar los datos de respuesta
    } catch (error) {
        console.error("Error en la solicitud:", error);
        throw error; // Propagar el error hacia arriba
    }
}

export async function register(name, email, password) {
    try {
        const response = await fetch(`${url}/api/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password,
                role: "user",
            }),
        });

        if (!response.ok) {
            throw new Error("Credenciales inválidas");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error en la solicitud de registro:", error);
        throw error;
    }
}

export async function obtenerEntradasPorCorreo(correo) {
    try {
        const response = await fetch(`${url}/api/obtenerEntradasPorCorreo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ correo: correo }),
        });

        if (!response.ok) {
            throw new Error("Error al obtener las entradas");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las entradas:", error);
        throw error;
    }
}

export async function obtenerEntradasPorUsuario(userId) {
    try {
        const response = await fetch(`${url}/api/entradas/${userId}`);

        if (!response.ok) {
            throw new Error("Error al obtener las entradas");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las entradas:", error);
        throw error;
    }
}

export async function obtenerSesionPorId(sessionId) {
    try {
        const response = await fetch(`${url}/api/sessions/${sessionId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error al obtener los datos de la API");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener los datos de la API:", error);
        throw error;
    }
}

export async function efectuarCompra(token, data) {
    try {
        const response = await fetch(`${url}/api/efectuarCompra`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error("Error al efectuar la compra");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error al efectuar la compra:", error);
        throw error;
    }
}
export async function enviarCorreo(datosUsuario, datosCompra) {
    try {
        const response = await fetch(`${url}/api/enviarCorreo`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ datosUsuario, datosCompra }),
        });

        if (!response.ok) {
            throw new Error("Error al enviar el correo");
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        throw error;
    }
}

export async function obtenerButacasOcupadas(sessionId) {
    try {
        const response = await fetch(`${url}/api/${sessionId}/ocupadas`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ sessionId: sessionId }),
        });

        if (!response.ok) {
            throw new Error("No se pudo obtener las butacas ocupadas");
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error al obtener las butacas ocupadas:", error);
        throw error;
    }
}