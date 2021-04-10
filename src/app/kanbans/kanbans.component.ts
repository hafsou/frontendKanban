import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { KanbanBoard } from '../models/kanbanboard.model';

import { KanbanService } from '../services/kanban.service';

@Component({
  selector: 'app-kanbans',
  templateUrl: './kanbans.component.html',
  styleUrls: ['./kanbans.component.css']
})
export class KanbansComponent implements OnInit {
  email: String = "" ; 
  kanbans: KanbanBoard[] = [];

  constructor(private kanbanService: KanbanService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.kanbanService.getKanbansByEmail(this.route.snapshot.paramMap.get('email')!).subscribe((kanbans) =>{
      console.log(kanbans);
      this.kanbans = kanbans;
    });
    }

}
