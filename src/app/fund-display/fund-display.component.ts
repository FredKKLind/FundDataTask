import { Component, OnInit, inject} from '@angular/core';
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
  isMobile: boolean = false;
  sortedData: any[] = [];
  sortColumn: string = '';
  sortOrder: number = 1;
  ngOnInit(): void {
    this.fetchData();
  }
  
  fetchData() {
    this.httpClient
      .get<any[]>('https://ivarpivar.netlify.app/api')
      .subscribe((data: any) => {
        this.data = data;
        this.sortedData = [...this.data[0]?.data];
      });
  }

  getFormattedDate(timestamp: number): string {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  
  sortData(column: string): void {
    if (this.sortColumn === column) {
      this.sortOrder *= -1;
    } else {
      this.sortColumn = column;
      this.sortOrder = 1;
    }
    this.sortedData.sort((a, b) => {
      const Value1 = a[column];
      const Value2 = b[column];
      if (typeof Value1 === 'string' && typeof Value2 === 'string') {
        return this.sortOrder * Value1.localeCompare(Value2);
      } else {
        return this.sortOrder * (Value1 - Value2);
      }
    });
  }
}
