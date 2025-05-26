import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { reflectComponentType  } from '@angular/core'


@Component({
  imports: [RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'people-ui';
  componentType = reflectComponentType(AppComponent);

  constructor() {
    console.log('AppComponent Type:', this.componentType);
  }
}
