import React , { Fragment} from "react";
import Table from './Table'
import Header from './Header'
class Products extends React.Component {
  
    constructor(props) {
      super(props);
      this.handleClick= this.handleClick.bind(this);
      this.changeQuantity=this.changeQuantity.bind(this);
      this.state = {
        items: [
          {
            id:"0",
            image:"https://static.turbosquid.com/Preview/2017/03/01__09_47_53/MilkCarton01.png7330FC04-B8BE-4D21-92F8-B5E1EBCA761FOriginal.jpg",
            name: "Aadvik Freeze Milk",
            category: "Milk",
            quantity: "2"
          },
          {
            id:"1",
            image:"https://5.imimg.com/data5/AO/AP/MY-46895908/britannia-marie-gold-biscuit-500x500.jpg",
            name: "Marie Gold Biscuits",
            category: "Biscuit",
            quantity: "22"
          },
          {
            id:"2",
            image:"https://thumbs.dreamstime.com/b/london-uk-march-uncle-ben-s-microwave-classic-long-grain-rice-packet-white-background-140750850.jpg",
            name: "Uncle Bens grain Rice",
            category: "Rice",
            quantity: "3"
          },
          {
            id:"3",
            image:"https://5.imimg.com/data5/VG/AQ/MY-9101930/amul-taaza-toned-milk-500x500.jpg",
            name: "Amul taaza toned Milk",
            category: "Milk",
            quantity: "21"
          },
          {
            id:"4",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS3c8tM-aCfFpJmbfT6EABp_NjqVrCV05tSJI3J0poUX0nA7L66rp8Ve3rZCTCCaTZnRCpA37jMaS_hmoRoPlCJ8KkU8W7wx-_xJy_rfOqZQ9i3KXx2Uq6PjtjHloO_RtHRmbbUARz8Bn7hmLhGkYsMMbKgsFGNVFnbpejMD2TOCNWsk5uwzsaZt1-pZqQMJYOErvq05zzV9yQhwo9-YwL8iDglwiwlSpBtUZM60KOekvTpeztBnf7KrQO1rNxUA-OzcIhNdN-brZ7XoHfH2edENo9n_lu4m5yp_bj6bxKDDKiNgqXNDH0gSRLF_71BchFPi5IyOWQovVQqOQQ1SYsSoba4omsKvdkL6Q3ZgCUDkM9h4xEDraWp7Gg3Y4PVg-Bmu_dwLRcKHp1EL97DqL-FtXxdsXFUo7abv8SJuYK15saEBscXKCtWlgfti-bqSP-21TCwoA&usqp=CAU",
            name: "Oreo Biscuits",
            category: "Biscuit",
            quantity: "2"
          },
          {
            id:"5",
            image:"https://5.imimg.com/data5/RO/MS/MY-20704244/basmati-rice-packaging-bag-500x500.jpg",
            name: "Premium Brown Rice",
            category: "Rice",
            quantity: "2"
          },
          
          {
            id:"6",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQwGR1udE6vYGOz55np5GuxUM5uAnabDLKuOEobSgQOzINLwYM&usqp=CAU",
            name: "Nice Time Biscuits",
            category: "Biscuit",
            quantity: "3"
          },
          {
            id:"7",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHweZkAzUuM2qlgWoT6ToSNLCdagQtVksIKC36earEzDAw5PZ8&usqp=CAU",
            name: "Fortune Rozana Rice",
            category: "Rice",
            quantity: "3"
          }
        ],
        filter: "",
        change:false,
        items1:[]
      };
    }
    changeQuantity = (event, key) => {
        var items1 = [...this.state.items];
        items1[key] = { ...items1[key], quantity: event.target.value };
        this.setState({
          items1:items1.filter(e=> e.category===this.state.filter),
          items:items1
        });
      };
        
     
    handleClick =(category)=>{
        this.setState({
            filter:category,
            change:true,
            items1:this.state.items.filter(e=> e.category===category)
        })
    }
    render(){
        return(
            <Fragment>
                <Header action={this.handleClick} />
                {!this.state.change || this.state.filter==="" ? <Table items={this.state.items} action={this.changeQuantity}/> : <Table items={this.state.items1} action={this.changeQuantity}/>}
            </Fragment>
        )
    }
}
export default Products;