import express from "express";
import cors from "cors";
import "dotenv/config";
const app = express();

app.use(cors());

app.use("/prueba.json", async (req, res) => {
  const fakeData = [
    {
      id: 239,
      NumeroReporte: 116,
      FechaLocal: "2024-02-19",
      HoraLocal: "09:34:32",
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
