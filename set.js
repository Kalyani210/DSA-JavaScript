/* Set */

function mySet(){
    //the var collection will hold the set
    var collection = [];
    //this method check for the presence of element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) != -1);
    };
    //this method will return all the values in the set
    this.values = function() {
        return collection;
    };
    //this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    //this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)) {
            index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    //this method will return the size of collection
    this.size = function() {
        return collection.length;
    };
    //this method will return the union of two sets
    this.union = function(otherset) {
        var unionSet = new setInterval();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e) {
            unionSet.add(e);
        });
        secondSet.forEach(function(e) {
            unionSet.add(e);
        })
        return unionSet;
    };
    // this method will return intersection of two sets as anew set
    this.intersection = function(otherSet) {
        var intersectionSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        });
        return intersectionSet;
    };
    //this method will return the diffrence of two sets as a new set
    this.diffrence = function (otherSet) {
        var diffrenceSet = new mySet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                diffrenceSet.add(e);
            }
        });
        return diffrenceSet;
    };
    //this method will test if the set is a subset of diffrent set
    this.subset = function(otherSet){
        var firstSet = this.values();
        return firstSet.every(function(value) {
            return otherSet.has(value);
        });
    };

}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.diffrence(setA).values());


var setC = new mySet();
var setD = new mySet();
setC.add("f");
setD.add("b");
setD.add("c");
setD.add("f");
setD.add("d");
console.log(setC.subset(setD));
console.log(setC.intersection(setD).values());
console.log(setD.diffrence(setC).values());
console.log(setD.values())
//setD.delete("f");
console.log(setD.has("f"));
console.log(setD.add("d"));

