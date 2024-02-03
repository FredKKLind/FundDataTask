import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-fund-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './fund-display.component.html',
  styleUrl: './fund-display.component.css'
})
export class FundDisplayComponent implements OnInit{
  httpClient = inject(HttpClient)
  data: any[] = [];
  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.httpClient
    .get<any[]>('https://ivarpivar.netlify.app/api')
    .subscribe((data: any) =>
    { 
      console.log(data); 
      this.data = data;
    })
  }
}
