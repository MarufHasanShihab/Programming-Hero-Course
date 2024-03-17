const islamicScroller = {
    name : "Mizanur Rahman Azhari",
    age : 28,
    friends : ["hamir hamza", "arafat"],
    car : {
        name : "bmw",
        color : "black",
        weight : 250
    },
    friend : function(){
        for(let friend of this.friends){
            console.log(friend);
        }
    }
}
// console.log(islamicScroller.car)
islamicScroller.friend()