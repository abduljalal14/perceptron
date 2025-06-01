// Perceptron Object
function Perceptron(no, learningRate = 0.00001) {

// Set Initial Values
this.learnc = learningRate;
this.bias = 1;
console.log("Perceptron di buat dengan " + no + " input dan " + this.learnc + " learning rate");

// Compute Random Weights
console.log("Menentukan bobot awal secara acak antara -1 hingga 1");
this.weights = [];
for (let i = 0; i <= no; i++) {
  this.weights[i] = 0;
}
console.log("Bobot awal: " + this.weights[0]);

// Activate Function
this.activate = function(inputs) {
  let sum = 0;
  console.log(inputs + " * " + this.weights[0] + " + sum =" + "= " + sum);
  let tebakan = sum > 0 ? 1 : 0;
  console.log("Output Perceptron data ini adalah: " + tebakan);
  let posisi = sum > 0 ? "diatas" : "dibawah";
  console.log("Artinya titiknya " + posisi + " garis pemisah");
  if (sum > 0) {return 1} else {return 0}
}

// Train Function
this.train = function(inputs, desired) {
  inputs.push(this.bias);
  let guess = this.activate(inputs);
  let error = desired - guess;
  
}

// End Perceptron Object
}