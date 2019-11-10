class Tom {
    constructor(options) {
        this.name = options.name;
        this.health = options.health;
        this.happy = options.happy;
        this.sleep = options.sleep;
        this.relax = options.relax;
        this.money = options.money;
        this.eat = options.eat;

    }

    voice ()
    {
        if (tom.health<=0) {
        console.log("Последние слова томаса : <<Ксяоми топ за свои деньги>> ")
        }
        else
        console.log("Розы гибнут на газонах, а пацаны на зонах");
    }
    sleeping()
    {
        if (tom.health<=0)
        {
            console.log("Да он сдох уже!!");
        }
        else {
            tom.happy += 20;
            tom.sleep += 40;
        }
    }
    goWork () {

      if (tom.health>0) {
          tom.sleep -= 30;
          tom.money += 100;
          tom.relax -= 10;
          tom.health -= 15;
          if (tom.health <= 0) {
              console.log(tom.name + " сдох после похода на работу");
          }
      }
      else
      {
          console.log("Да сдох он уже!!");
      }
    }
    gostreepClub () {
        if (tom.health>0) {
            tom.sleep -= 10;
            tom.money -= 150;
            tom.relax += 40;
            tom.health -= 30;
            if (tom.health <= 0) {
                console.log(tom.name + " сдох после похода в стрип клуб");
            }
        }
        else
        {
            console.log("Да сдох он уже!!");
        }
    }
    info()
    {
        console.log(" Name: "+tom.name+" Health: "+tom.health+" Happy: "+tom.happy+" Sleep: "+tom.sleep+" Relax: "+tom.relax+" Money: "+tom.money+" Eat: "+tom.eat);
    }
    eating()
    {
        if (tom.health<=0)
        {
            console.log("Да сдох он уже!!");
        }
        else {
            tom.eat += 50;
            tom.money -= 30;
        }
        }

}
const tom = new Tom({
    name: "Papi4",
    health: 100,
    happy: 100,
    sleep: 100,
    relax: 100,
    money: 1000,
    eat:100
});
