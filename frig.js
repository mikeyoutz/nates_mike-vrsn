
function createFrig() {
  return {

    opened: false,


    shelfs: {
      top: [],
      bottom: [],
      middle: [],
      door: []
    },

    open: function(){
      if(!this.opened) this.opened = true;
    },

    close: function(){
      if(this.opened) this.opened = false;
    },

    put: function(shelf_name, item, qty){
      if(this.opened === false) return console.log('door needs to be open');
      var shelf = this.shelfs[shelf_name];
      if(!Array.isArray(shelf)){
        return console.log('shelf '+ shelf_name + ' does not exist');
      }
      if(qty) {
        while(qty--){
          shelf.push(item);
        }
      } else {
        shelf.push(item);
      }
      return shelf.length;
    },

    take: function(shelf_name, item){
      if(!this.opened) return console.log('door needs to be open');
      var shelf = this.shelfs[shelf_name];
      if(!Array.isArray(shelf)){
        return console.log('shelf '+ shelf_name + ' does not exist');
      }

      var index = shelf.indexOf(item);
      if(index !== -1) {
        var item = shelf.splice(index, 1);
        return item[0];
      } else {
        return console.log('item '+ item + ' not found on shelf '+ shelf_name);
      }


    }

  };
}

var frig = createFrig();
var garage = createFrig();

garage.open();
garage.put('top', 'beer', 12);

console.log(frig.opened, " should be false");
frig.open();
frig.put('random', 'item');
var top_shelf_items = frig.put('top', 'diet soda');
frig.put('top', 'diet soda');
frig.put('top', 'beer');
frig.put('middle', 'beer');
frig.put('bottom', 'lettuce');
frig.put('door', 'ketchup');
var item = frig.take('top', 'diet soda');
console.log('taken ', item);
console.log(top_shelf_items, frig.shelfs.top.length);
console.log(frig.opened, " should be true");
console.log('kitchen', frig);
console.log('garage', garage);
