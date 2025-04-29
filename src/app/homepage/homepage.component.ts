import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(private http: HttpClient) { }

 
  private jsonFilePath = 'http://localhost:3000/patients'; // Correct path to the JSON file
  // patients = [
  //   { id: 1, name: 'John Doe', age: 30, gender: 'Male', condition: 'Flu' },
  //   { id: 2, name: 'Jane Smith', age: 25, gender: 'Female', condition: 'Cold' },
  //   { id: 3, name: 'Alice Johnson', age: 40, gender: 'Female', condition: 'Diabetes' },
  //   { id: 4, name: 'Bob Brown', age: 50, gender: 'Male', condition: 'Hypertension' },
  //   { id: 5, name: 'Charlie Davis', age: 35, gender: 'Male', condition: 'Asthma' },
  //   { id: 6, name: 'Diana Evans', age: 28, gender: 'Female', condition: 'Allergy' },
  //   { id: 7, name: 'Ethan Foster', age: 45, gender: 'Male', condition: 'Arthritis' },
  //   { id: 8, name: 'Fiona Green', age: 32, gender: 'Female', condition: 'Migraine' },
  //   { id: 9, name: 'George Harris', age: 60, gender: 'Male', condition: 'Heart Disease' },
  //   { id: 10, name: 'Hannah White', age: 22, gender: 'Female', condition: 'Anemia' },
  //   { id: 11, name: 'Ian King', age: 55, gender: 'Male', condition: 'Cancer' },
  //   { id: 12, name: 'Julia Lee', age: 29, gender: 'Female', condition: 'Thyroid' },
  //   { id: 13, name: 'Kevin Moore', age: 38, gender: 'Male', condition: 'Obesity' },
  //   { id: 14, name: 'Laura Scott', age: 33, gender: 'Female', condition: 'Depression' },
  //   { id: 15, name: 'Michael Taylor', age: 48, gender: 'Male', condition: 'Stroke' },
  //   { id: 16, name: 'Nina Walker', age: 27, gender: 'Female', condition: 'Anxiety' },
  //   { id: 17, name: 'Oscar Young', age: 36, gender: 'Male', condition: 'Back Pain' },
  //   { id: 18, name: 'Paula Adams', age: 42, gender: 'Female', condition: 'Insomnia' },
  //   { id: 19, name: 'Quinn Baker', age: 31, gender: 'Male', condition: 'Ulcer' },
  //   { id: 20, name: 'Rachel Carter', age: 26, gender: 'Female', condition: 'Skin Rash' }
  // ];


  patients: any[] = [];

 ngOnInit(): void {
    this.fetchPatients();
  }

  fetchPatients(): void {
    this.http.get<any[]>(this.jsonFilePath, { withCredentials: true }).subscribe((data) => {
      this.patients = data;
    }, (error) => {
      console.error('Error fetching patients:', error);
    });

}
  onRowUpdated(event: any): void {
    console.log('Row updated:', event.data);
    this.savePatients();
  }

  // Insert a new row and save changes to the JSON file
  onRowInserted(event: any): void {
    console.log('Row inserted:', event.data);
    this.patients.push(event.data);
    this.savePatients();
  }

  // Delete a row and save changes to the JSON file
  onRowRemoved(event: any): void {
    console.log('Row removed:', event.data);
    this.patients = this.patients.filter((patient) => patient.id !== event.data.id);
    this.savePatients();
  }

  // Save the updated patients array back to the JSON file
  savePatients(): void {
    this.http
      .post(this.jsonFilePath, this.patients, { headers: { 'Content-Type': 'application/json' } })
      .subscribe(() => {
        console.log('Patients saved successfully.');
      });
  }
}
