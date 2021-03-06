import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateOrder } from 'src/app/shared/enums/state-order.enum';
import { Order } from 'src/app/shared/models/order';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-order',
  templateUrl: './form-order.component.html',
  styleUrls: ['./form-order.component.scss']
})
export class FormOrderComponent implements OnInit {
  @Input() initItem: Order;
  @Output() submited: EventEmitter<Order> = new EventEmitter();
  public states = Object.values(StateOrder);
  public form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.initItem);

    this.form = this.fb.group({
      tjmHt: [this.initItem.tjmHt],
      nbJours: [this.initItem.nbJours],
      tva: [this.initItem.tva],
      state: [this.initItem.state],
      typePresta: [
        this.initItem.typePresta,
        Validators.required
      ],
      client: [
        this.initItem.client,
        [Validators.required, Validators.minLength(2)]
      ],
      comment: [this.initItem.comment],
      id: [this.initItem.id]
    });
  }

  public onSubmit() {
    this.submited.emit(this.form.value);
    // console.log(this.form.value);

  }

}
