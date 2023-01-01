import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RoomList, Rooms } from './room';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'] ,
})
export class BooksComponent {

  hotelName: string = 'France Hotel'
  hideRooms = false;
  numberOfRoom = 10;
  rooms: Rooms = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  }

  roomList: RoomList[] = [
    { 
      roomNumber : 51,
      roomType: 'Deluxe' , 
      amenities: 'Air Conditioner , Fridge , fan , cooler ' , 
      price: 500 ,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9xuw8rFb5TyjCiaC9fpHyfkw6rb1Q3mml5dTAYZo0Q&s" , 
      checkinTime: new Date('11-nov-2022'),
      checkoutTime: new Date('12-nov-2022')
    } ,
    {  
      roomNumber : 52,
      roomType: 'Free' , 
      amenities: 'fan' , 
      price: 200 ,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9xuw8rFb5TyjCiaC9fpHyfkw6rb1Q3mml5dTAYZo0Q&s" , 
      checkinTime: new Date('22-nov-2022'),
      checkoutTime: new Date('20-nov-2022')
    } ,
    {
      roomNumber : 53,
      roomType: 'Super Deluxe' , 
      amenities: 'Air Conditioner , Fridge , fan , cooler , free food , free brekfast' , 
      price: 800 ,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9xuw8rFb5TyjCiaC9fpHyfkw6rb1Q3mml5dTAYZo0Q&s" , 
      checkinTime: new Date('11-nov-2022'),
      checkoutTime: new Date('12-nov-2022')
    } ,
    {
      roomNumber : 54,
      roomType: 'Extra Deluxe' , 
      amenities: 'Air Conditioner , Fridge , fan , cooler ' , 
      price: 500 ,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9xuw8rFb5TyjCiaC9fpHyfkw6rb1Q3mml5dTAYZo0Q&s" , 
      checkinTime: new Date('11-nov-2022'),
      checkoutTime: new Date('12-nov-2022')
    } ,


  ]

  roomVisible = () => {
    this.hideRooms = !this.hideRooms;
  }

  selectRoom(room:RoomList) {
     console.log(room)
  }
  addRoom() {
    const room : RoomList =  {
      roomNumber : 34,
      roomType: 'Super Deluxe' , 
      amenities: 'cooler , free food , free brekfast' , 
      price: 800 ,
      photos: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9xuw8rFb5TyjCiaC9fpHyfkw6rb1Q3mml5dTAYZo0Q&s" , 
      checkinTime: new Date('14-nov-2022'),
      checkoutTime: new Date('23-nov-2022')
    }

    // this.roomList.push(room);

    this.roomList = [...this.roomList , room]
  }
}
