import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module5',
  templateUrl: './module5.component.html',
  styleUrls: ['./module5.component.css']
})
export class Module5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
    const files: FileList = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // Check file size
      if (file.size > 5 * 1024 * 1024) { // 5MB in bytes
        alert('Maximum file size exceeded (5MB)');
        return;
      }
      // Check file type
      if (!['application/pdf', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'].includes(file.type)) {
        alert('Invalid file format. Only PDF and XLSX files are allowed.');
        return;
      }
    }
    // If all checks pass, proceed with file upload
    this.uploadFiles(files);
  }

  onFileDrop(event: any) {
    event.preventDefault();
    const files: FileList = event.dataTransfer.files;
    // Handle the dropped files
    this.uploadFiles(files);
  }

  onDragOver(event: any) {
    event.preventDefault();
  }

  uploadFiles(files: FileList) {
    // Implement file upload logic here
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      console.log('Uploaded file:', file);
      // You can implement file upload logic here
    }
  }

}
