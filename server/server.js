const { app } = require('./index');
const chalk = require('chalk');


const port = 1337;
app.listen(process.env.PORT || port, () => {
  console.log(chalk.green.bold(new Date().toLocaleTimeString(), new Date().toLocaleDateString()));
  console.log(chalk.yellow('Listening on port: http://localhost:' + port));
})