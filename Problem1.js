//PROBLEM1
//Put the start of your program in a main function.
// Create a class for a bank account user.
// Include name, address, and account balance.
// Create a function that can change the account balance.
// It WILL NOT be changed if you log it.

function problem1() {
    class BankAccountUser{
        constructor(name, address, account_balance){
            this.name = name;
            this.address = address;
            this.account_balance = account_balance;
        }

    }
    function changeBalance(amt) {
        this.balance -= amt;
        return this.balance;
    }

    var newBalance = new BankAccountUser("Didier","1350 Concourse Ave",400);
    console.log(newBalance.name);
    console.log(newBalance.address);
    console.log(newBalance.account_balance);

    let newBal = changeBalance(100);
    console.log("New balance = ", newBal);
}
problem1();



//PROBLEM2
//Put the start of your program in a main function.
// Create 5 key/value pairs for names and nicknames.
// Create a function that calls the person's name key to get the nickname value.
// You should be able to call your function from your main function.

function problem2() {
    var people =
        [{
            name: "Robert",
            nickname: "Killer",
        },
        {
            name: "Jefferson",
            nickname: "Hackerman",
        },
        {
            name: "Kevin",
            nickname: "Playboy",
        },
        {
            name: "Vladimir",
            nickname: "Warrior",
        },
        {
            name: "Samuel",
            nickname: "Terrible",
        }];
function findNickName() {
    var WriteName = prompt("Write a name of the list  to get the nickname:");

    if(WriteName === "Robert"){
        console.log(people[0].nickname);
    }
    else if(WriteName === "Jefferson"){
        console.log(people[1].nickname);
    }
    else if(WriteName === "Kevin"){
        console.log(people[2].nickname);
    }
    else if(WriteName === "Vladimir"){
        console.log(people[3].nickname);
    }
    else if(WriteName === "Samuel"){
        console.log(people[4].nickname);
    }
    else{
        console.log("NOT IN THE LIST");
    }
}
findNickName();
}
problem2();
//---------------------------
// second way for problem 2 :
// function problem2() {
//     let nicknames ={
//         kevin: "Boomer",
//         kenn: "Kool Kat",
//         bob: "Sham"
//     };
//     console.log(getNickName(nicknames,"Kevin"));
//
//     function getNickName(nicknameArray, nameToFind) {
//         return nicknameArray[nameToFind];
//     }
//
// }
// problem2();
//-------------------------



//PROBLEM3
// Put the start of your program in a main function. Create a two player game.
// Ask the first player to "Enter a number".
// The second player has to guess the number until they get the right number.
// After each guess let them know if they should go higher or lower.

function problem3(){
    var player1 = parseInt(prompt("Enter a number:"));
    do {
        var player2 = parseInt(prompt("Enter the corresponding number:"));

        if (player1 > player2) {
            alert("No! Try to go higher");
        } else if (player1 < player2) {
            alert("No! Try to go lower");
        } else if (player1 === player2) {
            console.log("CORRECT NUMBER!")
        } else {
            console.log("DONE!")
        }
    }

    while (player1 !== player2);
}
problem3();
