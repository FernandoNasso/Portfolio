const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('Portfolio'));

app.listen(port, () => {
  console.log(`Servidor web en ejecución en http://localhost:${port}`);
});
