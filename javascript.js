
var config = {
  apiKey: "AIzaSyDG_DUKHEi5j8XbzKIMLbJ8F7BUXv4dy7c",
  authDomain: "marissaellingsontraintime.firebaseapp.com",
  databaseURL: "https://marissaellingsontraintime.firebaseio.com",
  projectId: "marissaellingsontraintime",
  storageBucket: "marissaellingsontraintime.appspot.com",
  messagingSenderId: "6733818716"
};
//Initializes Firebase and sets up variables for database and time
firebase.initializeApp(config);
var database = firebase.database();
var currentTime = moment();
var firstActualTrainTime = 0;
var trainFrequency; 

//Click handler for the submit button to caputre data
$("#submit").on("click", function (event) {
  event.preventDefault();
  var trainName = $("#trainNameInput").val().trim();
  var destination = $("#destinationInput").val().trim();
  var firstTrainTime = $("#firstTrainTimeInput").val().trim();
  var frequency = $("#frequencyInput").val().trim();

  var newTrain = {
    name: trainName,
    dest: destination,
    initalTrain: firstTrainTime,
    freq: frequency,
  }

  //Adds data entered into the form to the Firebase Database
  database.ref().push(newTrain);

  $("#trainNameInput").val("");
  $("#destinationInput").val("");
  $("#firstTrainTimeInput").val("");
  $("#frequencyInput").val("");

  return false;
});


//Captures a snapshot of the informaiton added into the database
database.ref().on("child_added", function (childSnapshot, prevChildKey) {
  console.log(childSnapshot.val());

  var trainName = childSnapshot.val().name;
  var destination = childSnapshot.val().dest;
  var firstTrainTime = childSnapshot.val().initalTrain;
  var frequency = childSnapshot.val().freq;


var theFirstTrain = moment(firstActualTrainTime, "HH:mm").subtract(1, "years");
console.log(theFirstTrain);

console.log(moment(currentTime).format("HH:mm"));

var timeDiff = moment().diff(moment(theFirstTrain), "minutes");
console.log(timeDiff);

var timeRemainder = timeDiff % trainFrequency;
console.log(timeRemainder);


$("#")
});
