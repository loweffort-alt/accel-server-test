import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

app.use(cors());

app.use("/prueba.json", async (req, res) => {
  const currentTime = new Date().getTime();
  const lastMinutes = 1 * 60 * 1000;
  // Crear un objeto Date con el tiempo en milisegundos
  const currentDate = new Date(currentTime - lastMinutes);
  console.log({ currentTime, currentDate });
  // Obtener los componentes de la fecha y la hora
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; // Los meses van de 0 a 11
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  // Formatear la fecha y la hora según sea necesario
  const formattedDate = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  console.log({ formattedTime, formattedDate });

  const fakeData = [
    {
      id: 262,
      NumeroReporte: 116,
      FechaLocal: formattedDate,
      HoraLocal: formattedTime,
      Magnitud: 5.5,
      Referencia: "El deous",
      Latitud: -9.44,
      Longitud: -79.14,
      Profundidad: 35,
      Intensidad: "IV-V Chimbote",
      simulacro: 0,
      created_at: "2024-02-19T11:26:53.000-05:00",
      sound: false,
      TipoMagnitud: "",
      Mensaje: "",
      ReferenciaUnidad: "",
      Simulacro: "",
      Mapa: "",
      FechaLocalEnviaSSN: "",
      FechaRecepcion: "",
      UsuarioRegistra: "",
      createdAt: "",
      updatedAt: "",
    },
  ];
  res.json(fakeData);
});

// Inicia el servidor
app.listen(process.env.PORT, () => {
  console.log(`Servidor proxy escuchando en el puerto ${process.env.PORT}`);
});
