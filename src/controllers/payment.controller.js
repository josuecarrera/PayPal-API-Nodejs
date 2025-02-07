export const createOrder = (req, res) => {
  res.send("Orden created");
};

export const captureOrder = (req, res) => {
  res.send("Orden captures");
};

export const cancelPayment = (req, res) => {
  res.send("Orden canceled");
};
