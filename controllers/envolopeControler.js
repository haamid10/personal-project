
const { envelopes: dataEnv }= require('../models/db');

let currentId = dataEnv.length;
const newEnvelope = (name , balance) => {
   return
   {
     id: currentId++,
    name
    balance
}
};



 exports.getEnvelopes = (req, res) => {
    res.send(dataEnv)
}
// findByID

exports.getEnvelopeById = (req, res) => {
  try {
    const id = Number(req.params.id); // Convert id to a number
    const envelope = dataEnv.find(env => env.id === id); // Find the envelope with the given ID
  
    if (envelope) {
      res.status(200).send(envelope); // Send envelope if found
    } 
  } catch (error) {
    console.log(error.message)
    res.status(404).send('Envelope not found'); // Send 404 if not found

  }
};

// Define addEnv function
exports.addEnv = (req, res) => {
  try {
    const { name, balance } = req.body;

    const currentId = dataEnv.length > 0 ? Math.max(...dataEnv.map(env => env.id)) : 0;
    const newEnvelope = {
      id: currentId + 1, // Increment ID
      name,
      balance,
    };
    // Push the new envelope into the dataEnv array
    dataEnv.push(newEnvelope);
    // Send the updated array as a response
    res.status(201).send(dataEnv);
  } catch (err) {
    res.status(500).send(err.message);
    console.log(err.message);
  }
}
// update by id


// Import envelopes at the top of the file if not already imported

exports.updateEnvelopeById = (req, res) => {
 try {
  const id= Number(req.params.id);
  const {name ,balance} = req.body;

  const envelop= dataEnv.find(env => env.id === id)

  if(!envelop){ return res.status(404).send('envelop is not founded')}

  if(envelop){
    envelop.name = name;
    envelop.balance = balance;
    res.status(200).send({updated:envelop, data: dataEnv})
  }
 } catch (error) {
  console.log(error.message);
  res.status(500).send(error.message);
 }
};
