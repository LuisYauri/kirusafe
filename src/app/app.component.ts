import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'kirusafe';
  listMenu = [
    {
      title: 'Inicio'
    },
    {
      title: '¿Quienes somos?'
    },
    {
      title: '¿Quienes somos?'
    },
    {
      title: '¿Quienes confian en nosotros?'
    }
  ];
  logoKirusafe = 'assets/img/logo.png'
  headerContent = {
    title: 'KiruSafe',
    subTitle: '¡El Lazo que nos une!',
    description: 'Red de voluntarios y docentes a nivel nacional enfocados en promover la salud oral.',
    btn: 'VER VIDEO',
    img: 'assets/img/img_girls.png'
  }

  ngOnInit() {
  }


}
