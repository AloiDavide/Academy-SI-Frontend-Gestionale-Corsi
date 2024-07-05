import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountInterfaceComponent } from './account-interface.component';

describe('AccountInterfaceComponent', () => {
  let component: AccountInterfaceComponent;
  let fixture: ComponentFixture<AccountInterfaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountInterfaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
