
class Car{
    constructor(marka,model,engine,year,tank,color,consumption){
        this.marka=marka;
        this.model=model;
        this.engine=engine;
        this.year=year;
        this.tank=tank;
        this.color=color;
        this.consumption=consumption;
        this.initialFuelLevel = 50;
    }
    endFuelLevel(km) {
        var endFuel = this.initialFuelLevel - this.consumption * km / 100;
        if (endFuel >= 0) {
            return endFuel;
        } else {
            return "not oil";
        }

    }
     
    oilStation(fuel) {
        if ((this.tank - this.initialFuelLevel) > fuel) {
            this.initialFuelLevel += fuel;
            return this.initialFuelLevel;
        } else if (this.initialFuelLevel + fuel == this.tank) {
            return "Bak tam doludur";
        } else {
            return "Bakin limitini asirsiz" + " - " + (fuel - (this.tank - this.initialFuelLevel)) + " " + "litr ashirsiniz";
        }
    }
}






var BMW=new Car("BMW","X-5",5.5,2019,75,"Blue",8);
BMW.initialFuelLevel=BMW.endFuelLevel(450)
console.log(BMW.oilStation(75));
console.log(BMW.initialFuelLevel)
