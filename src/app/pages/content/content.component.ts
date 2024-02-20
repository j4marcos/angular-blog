import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pictureCover: string = ''
  contentTitle: string = 'titulo do conteudo'
  contentDescription: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi mollitia totam ipsum quasi esse iure repellendus ducimus quisquam. Deleniti, iure!'

  constructor() { }

  ngOnInit(): void {
  }

}
