import { Component, OnInit, Input } from '@angular/core';

export type ButtonStyle = 'default' | 'primary' | 'warning';

@Component({
  selector: 'test-org-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() text = "Click Me!";
  @Input() padding: number;
  @Input() style: ButtonStyle = 'default'

  constructor() { }

  ngOnInit(): void {
  }

}
