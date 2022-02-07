function book(title,author,isbn){
    this.title=title;
    this.author=author;
    this.isbn=isbn
}
function UI(){

}
UI.prototype.listbook=function(Book){
  let tbody=document.getElementById('tbody')   
  let tr=document.createElement('tr')
  let list=`
  <td>${Book.title}</td>
  <td>${Book.author}</td>
  <td>${Book.isbn}</td>
  <td>${document.createElement('button')}</td>
   `
  tr.innerHTML=list
  tbody.appendChild(tr)


}
let clear =function(){
    document.getElementById('title').value=''
    document.getElementById('author').value=''
    document.getElementById('isbn').value=''
}



let form=document.getElementById('form')
form.addEventListener('submit',submit)
function submit(event){
   
    let title=document.getElementById('title').value;
    let author=document.getElementById('author').value;
    let isbn=document.getElementById('isbn').value;
    event.preventDefault()
    if(title === '' || author === '' || isbn === '') {
        Alert('Please fill in all fields');
      } else {
    let Book=new book(title,author,isbn)
    let ui=new UI()
    ui.listbook(Book)
    clear()

      }
}
let Myarray;
console.log(localStorage.getItem('mylist'));

if(localStorage.getItem('mylist'===null)){
    Myarray=[]
}
else{
    Myarray=JSON.parse(localStorage.getItem('mylist'))
}
Myarray.push(book);

localStorage.setItem('mylist',JSON.stringify(Myarray))
