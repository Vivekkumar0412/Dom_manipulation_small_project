      //       // All the button that are resposible for any actions


      //       let d = document.getElementById("d");
      // let show_btn = document.getElementById("show");
      // let hide_btn = document.getElementById("hide");
      // let sortBySale = document.getElementById("sortBySale");
      // let sortBySaleDesc = document.getElementById("sortBySaleDesc");
      // let greter25 = document.getElementById("greter25");
      // let Highest = document.getElementById("Highest");

      // // array from which all the operation are being done


      // let person = [
      //   { name: "Liril", quantity: 10, sales: 7, price: 10 },
      //   { name: "Dove", quantity: 20, sales: 9, price: 20 },
      //   { name: "Pears", quantity: 35, sales: 20, price: 15 },
      //   { name: "Surf", quantity: 45, sales: 22, price: 55 },
      //   { name: "Ariel", quantity: 20, sales: 7, price: 40 },
      //   { name: "Tide", quantity: 20, sales: 11, price: 35 },
      //   { name: "Nirma", quantity: 30, sales: 21, price: 20 },
      // ];


      // // list of all the event listeners that are working in the dom
      // let person_data = person.map((elem) => {
      //   let str = "";
      //   str += `<li><h3>Name : ${elem.name}  price : ${elem.price}  stock : ${elem.quantity}</h3></li>`;
      //   return str;
        
      // });
      // show_btn.addEventListener("click",()=>{
      //   d.innerHTML = `<ol>${person_data.join("")}</ol>`
      // });

      // hide_btn.addEventListener("click",()=>{
      //   d.innerHTML = "";
      // });

      // sortBySale.addEventListener("click",()=>{
      //   let new_Data = person.sort((a,b)=>{
      //       return a.price - b.price;
      //   });
      //   let new_data2 = new_Data.map((elem)=>{
      //       let str = "";
      //       str += `<li><h3>Name : ${elem.name}  price : ${elem.price}  stock : ${elem.quantity}</h3></li>`;
      //       return str;
      //   });
      //   d.innerHTML = `<ol>${new_data2.join("")}</ol>`;
      //   console.log(new_Data);
      // });

      // sortBySaleDesc.addEventListener("click",()=>{
      //   let new_Data = person.sort((a,b)=>{
      //       return   b.price - a.price;
      //   });
      //   let new_data2 = new_Data.map((elem)=>{
      //       let str = "";
      //       str += `<li><h3>Name : ${elem.name}  price : ${elem.price}  stock : ${elem.quantity}</h3></li>`;
      //       return str;
      //   });
      //   d.innerHTML = `<ol>${new_data2.join("")}</ol>`;
      //   console.log(new_Data);
      // });

      // greter25.addEventListener("click",()=>{
      //   let filtered_arr = person.filter((elem)=>{
      //       return elem.price > 25;
      //   });

      //   let filtered_map = filtered_arr.map((elem)=>{
      //       let str = "";
      //       str += `<li><h3>Name : ${elem.name}  price : ${elem.price}  stock : ${elem.quantity}</h3></li>`;
      //       return str;
      //   });

      //   d.innerHTML = `<ol>${filtered_map.join("")}</ol>`
      // });


      // Highest.addEventListener("click",()=>{
      //   let Highest_data = person.reduce((a,c)=>{
      //       let a_val = a.sales;
      //       let c_val = c.sales;

      //       if(a_val > c_val){
      //           return a;
      //       }else{
      //           return c;
      //       }
      //   });

      //   console.log(Highest_data);
      //   d.innerHTML = `<h2>Name : ${Highest_data.name} price : ${Highest_data.price}  sales : ${Highest_data.sales}</h2>`
      // })