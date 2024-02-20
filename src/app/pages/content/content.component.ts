import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {fakeData as data} from '../../data/fakeData'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  pictureCover: string = ''
  contentTitle: string = 'titulo do conteudo'
  contentDescription: string = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi mollitia totam ipsum quasi esse iure repellendus ducimus quisquam. Deleniti, iure!'
  private id: string | null = '0'

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value => this.id = value.get("id")
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id:string | null ) {
    const result = data.filter(article => article.id.toString() == id)[0]

      this.contentTitle = result.title
      this.contentDescription = result.description
      this.pictureCover = result.photoCover
  }

}
