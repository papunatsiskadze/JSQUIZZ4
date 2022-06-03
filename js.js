function Person(name,age,){
    this.name=name;
    this.age=age;
    this.displayInfo=function(){
    document.write(this.name + '    ' + "is" +  '    ' + this.age + '    ' + "years old" )
    };
};
function Car(mark,model,year){
    this.mark=mark;
    this.model=model;
    this.year=year;
    this.getCarInfo=function(){
    document.write( '    ' + "and has got" + '    '  +this.mark + '    ' + this.model + '    ' + "released in" + '    ' +  this.year)
    }
};


var tom=new Person("tom",24);
var tesla= new Car("Tesla","Model S",2015);


tom.displayInfo();
tesla.getCarInfo();
