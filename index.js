const express =  require('express');
const app = express();

//middlewares
app.use(express.json());
app.use(require('./routes/user.route.js'));
app.listen(3000);

console.log('Server on port 3000');