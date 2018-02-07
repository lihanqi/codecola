import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Problem } from '../../models/problem';

import { DataService } from '../../services/data/data.service';

@Component({
  selector: 'app-problem-detail',
  templateUrl: './problem-detail.component.html',
  styleUrls: ['./problem-detail.component.css']
})
export class ProblemDetailComponent implements OnInit {
  problem: Problem

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.getProblem();
  }

  getProblem() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.dataService.getProblemById(id).subscribe(
      problem => { this.problem = problem; },
      error => console.log(error)
    );
  }

}
