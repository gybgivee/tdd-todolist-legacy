class TodoList {
  constructor() {
    this.id = 1;
    this.items = []
  }

  create(myTodoList) {

    let currentdate = this.id.toString()+"/6/22"
        // let datetime = (currentdate.getDate() + this.id) + "/"
        //     + (currentdate.getMonth() + 1) + "/"
        //     + currentdate.getFullYear()

    const item = { id: this.id, text: myTodoList, status: 'incomplete', date: currentdate}
    this.id++
    this.items.push(item)
    // console.log(item)
    // console.log(currentdate)
    return item;
  }
  limitGetAll() {
    let myTodoList = this.items;
    let mySubstring;
    let collectChar = '';
    const limit = 20;


    if (myTodoList.length > 1) {

      for (let i = 0; i < myTodoList.length; i++) {

        // console.log('myTodoList ' + myTodoList[i].text);
        collectChar = collectChar+myTodoList[i].text ;
        
       

      }
      const size=collectChar.length;
      // console.log('collectChar ' + collectChar);
      // console.log('size'+size);
      mySubstring = collectChar.substring(0,limit);
     
      mySubstring=mySubstring+'...';
      // console.log('mySubstring '+mySubstring+' lenght :'+ mySubstring.length);

    }else{

      mySubstring=myTodoList[0].text;
      // console.log('mySubstring '+mySubstring);
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

  findByDate(date) {
    const allItems = this.items;
    let result = allItems.find(element => element.date === date);
    // console.log('result '+result);
    if(result === undefined||result===null){
        result=[];
    }
    // console.log(result)
    // console.log(allItems[1].id)
    // console.log("item length is: ", allItems.length)

    return result
  }

}
const myTodoList = new TodoList();
/*
myTodoList.create("Shopping", "1/6/22");
myTodoList.create("Laudry", "2/6/22");
myTodoList.create("gardenning", "3/6/22");
*/
myTodoList.create("Shopping");
myTodoList.create("Laudry");
myTodoList.create("gardenning");
myTodoList.findByDate("1/06/22");
// myTodoList.create("go to the park");
const lists = myTodoList.limitGetAll();
// for (const iterator of lists) {
//   console.log('list : '+iterator);
// }
console.log(myTodoList.findByDate("2/6/22"))



module.exports = TodoList