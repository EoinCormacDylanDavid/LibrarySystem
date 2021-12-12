import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LibraryDataService } from '../library-data.service';
export class AboutUs {
  name!: string;
  description!: string;
}
@Component({
  selector: 'app-about-list',
  templateUrl: './about-list.component.html',
  styleUrls: ['./about-list.component.css'],
  providers: [LibraryDataService],
  encapsulation: ViewEncapsulation.None
})
export class AboutListComponent implements OnInit {

  constructor(private LibraryDataService: LibraryDataService) { }
  AboutUs: AboutUs = {
    name : 'About Us',
    description : ' The Irish Library is the name of this Library, It was founded 2 months ago in the Munster Technological University Kerry.The Library founded by Dylan McCarthy started off the Library with his library inventory consisting of the Happy Potter trilogy   Now The Library has started grown in every aspect, It now has 2 trilogies book series and the Childrens Literature specialist in Roald Dahl book The BFG.'
  }
  ngOnInit() {}

}
