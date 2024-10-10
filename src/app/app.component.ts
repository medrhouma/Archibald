// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FaceSnapDSI22Component } from './face-snap-dsi22/face-snap-dsi22.component';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapDSI22Component, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps = [
      {
        title: 'Archibald',
        description: 'Mon meilleur ami depuis tout petit !',
        imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date('2024-10-10'), // Date spécifique pour tester
        snaps: 0
      },
      {
        title: '3ojja mergez',
        description: 'yummmmm yummm yummm.',
        imageUrl: 'https://th.bing.com/th/id/OIP.er76B93MYyzLPtpE-_BgewHaJD?rs=1&pid=ImgDetMain',
        createdDate: new Date('2024-10-10'),
        snaps: 0
      },
      {
        title: 'Un bon repas',
        description: 'Yummm, c\'est bon !',
        imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        createdDate: new Date('2024-10-10'),
        snaps: 0
      }
    ];
  }
}
