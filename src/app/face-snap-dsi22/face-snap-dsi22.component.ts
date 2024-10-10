// src/app/face-snap-dsi22/face-snap-dsi22.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { NgClass, DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap-dsi22',
  standalone: true,
  imports: [NgClass, DatePipe, CommonModule],
  templateUrl: './face-snap-dsi22.component.html',
  styleUrls: ['./face-snap-dsi22.component.css']
})
export class FaceSnapDSI22Component implements OnInit {
  buttonText!: string;
  snapEmoji = '🤌';
  @Input() faceSnap!: FaceSnap;

  ngOnInit() {
    this.buttonText = 'Oh Snap!';

    // Assurez-vous que createdDate est une instance de Date
    if (!(this.faceSnap.createdDate instanceof Date)) {
      this.faceSnap.createdDate = new Date(this.faceSnap.createdDate);
    }
  }

  onSnap() {
    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oops, un Snap!';
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh Snap!';
    }
  }
}
