import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.scss']
})
export class PostlistComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  datePost = new Date();
  loveIts = 0;

  onLove(){
    this.loveIts += 1;
  }

  onHate(){
    this.loveIts -= 1;
  }

  isLoved(){
    if(this.loveIts > 0 ){
      return true;
    }
  }

  isHated(){
    if(this.loveIts < 0 ){
      return true;
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
