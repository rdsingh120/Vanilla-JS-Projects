document.getElementById("generate-story-button").onclick = function() {

    const name = prompter("Please enter the name:");
    const subject = prompter("Please enter a subject:");
    const animal = prompter("Please enter an animal:");
    const color = prompter("Please enter a color:");
    const furniture = prompter("Please enter a piece of furniture:");
    const verb = prompter("Please enter a verb ending in '-ing':");   

    const story = `Once upon a time, there was a student at Centennial College
                 named ${name}. One day, while studying ${subject}, a ${animal} ran into 
                 the classroom. The professor, who was wearing a ${color} tie, 
                 jumped onto his ${furniture} in surprise. The whole class, including ${name}, 
                 couldn't stop ${verb}.`

    localStorage.setItem("story", story);
    document.getElementById("story-container").innerHTML = localStorage.getItem("story");

};

if (localStorage.getItem("story"))  {
    document.getElementById("story-container").innerHTML = localStorage.getItem("story");

}

function prompter(msg) {
    const errorMsg = "You didn't enter anything";
    do {
        var input = prompt(msg);
        if (input === "") {
            alert(errorMsg);
        }
    } while(input === ""); 
    return input;
}