const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get('/api/customers', (req, res) => {
  res.send([
    {
      id: 1,
      imge: "http://placeimg.com/64/64/1",
      name: "홍길동",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },

    {
      id: 2,
      imge: "http://placeimg.com/64/64/2",
      name: "조건호",
      birthday: "020724",
      gender: "남자",
      job: "고등학생",
    },

    {
      id: 3,
      imge: "http://placeimg.com/64/64/3",
      name: "김영훈",
      birthday: "020910",
      gender: "남자",
      job: "회사원",
    },
  ]);
});
app.listen(port, () => console.log(`Listening on port ${port}`));
