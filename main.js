let person = {
    name : "Dilshod",
    age : 18,
    married : false,
}

let newperson = JSON.stringify(person);
/* console.log(newperson); */
localStorage.setItem("nimadur", newperson)
