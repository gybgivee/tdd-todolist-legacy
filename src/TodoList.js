class TodoList {
  constructor() {
    this.id = 1;
    this.items = []
  }

  create(myTodoList) {

    const item = { id: this.id, text: myTodoList, status: 'incomplete' }
    this.id++
    this.items.push(item)
    return item;
  }
  limitGetAll() {
    let myTodoList = this.items;
    let mySubstring;
    let collectChar = '';
    const limit = 20;
    console.log('');
    if (myTodoList.length > 1) {

      for (let i = 0; i < myTodoList.length; i++) {

        console.log('myTodoList ' + myTodoList[i].text);
        collectChar = collectChar+myTodoList[i].text ;
        
       

      }
      const size=collectChar.length;
      console.log('collectChar ' + collectChar);
      console.log('size'+size);
      mySubstring = collectChar.substring(0,limit);
     
      mySubstring=mySubstring+'...';
      console.log('mySubstring '+mySubstring+ mySubstring.length);

    }
    return mySubstring;

  }

  showAll() {
    return this.items
  }

  setComplete(id) {
    const item = this.findBy(id)
    item.status = 'complete'
    return item
  }

  getByStatus(status) {
    return this.items.filter(item => item.status === status)
  }

  findBy(id) {
    const item = this.items.find(item => item.id === id)
    if (item === undefined) throw new Error('Item not found')
    return item
  }

  deleteBy(id) {
    const item = this.findBy(id)
    const index = this.items.indexOf(item)
    return this.items.splice(index, 1)[0]
  }
}
const myTodoList = new TodoList();
myTodoList.create("Shopping");
myTodoList.create("Laudry");
myTodoList.create("gardenning");
myTodoList.create("go to the park");
const lists = myTodoList.limitGetAll();
// for (const iterator of lists) {
//   console.log('list : '+iterator);
// }


module.exports = TodoList
