import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome to the lab route.");
});

// name route
router.get("/name", (req, res) => {
  res.send("Amr Kalam Mansoori - N01651384");
});

// greetings route
router.get("/greeting", (req, res) => {
  res.send("Hello from Amr!!");
});

// add route
router.get("/add/:x/:y", (req, res) => {
  let x = parseFloat(req.params.x);
  let y = parseFloat(req.params.y);
  res.send(`${x + y}`);
});

// calculate route
router.get("/calculate/:a/:b/:operation", (req, res) => {
  let a = parseFloat(req.params.a);
  let b = parseFloat(req.params.b);
  //  let operation = req.params.operation;
  let operation = decodeURIComponent(req.params.operation);
  let result = 0;

  switch (operation) {
    case "+":
      result = a + b;
      break;

    case "-":
      result = a - b;
      break;

    case "*":
      result = a * b;
      break;

    case "/":
      if (b === 0) {
        return res.status(400).send("Division by zero is not allowed.");
      }
      result = a / b; //-> %2f
      break;

    default:
      return res.status(400).send("Invalid Operator.");
      // res.send("Invalid Operator.");
      break;
  }
  res.send(`${result}`);
});

export default router;
