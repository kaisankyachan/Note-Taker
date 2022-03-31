const express = require('express')
const app = express()
const port = 3000
/*
app.get('/', (req, res) => {
  res.send('Hello World!')
})
*/
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


app.get('/', (req, res) => {
  const options = {
      root: path.join(__dirname)
  };
  res.sendFile('public/index.html', options, (err) => {
      if (err) console.log(err)
      console.log('File is sent'); //Outputs "File sent" in console
      res.end();
  });
});