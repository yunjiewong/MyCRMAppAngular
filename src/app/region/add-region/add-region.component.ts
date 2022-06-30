import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-add-region',
  templateUrl: './add-region.component.html',
  styleUrls: ['./add-region.component.scss']
})
export class AddRegionComponent implements OnInit {


addRegionForm: FormGroup;

region:Region={
  id: 0,
 name :''
};
isSuccessful:boolean=false;


  constructor(private builer: FormBuilder, private regionService: RegionService) {
    this.addRegionForm =builer.group({
        'regionName': new FormControl(null, [Validators.required,Validators.minLength(4)]),
        
    });

 
  }

  ngOnInit(): void {
  }

  
  saveRegion(){
    this.region.id = 0;
    this.region.name =this.addRegionForm.value['regionName'];
    this.regionService.insertRegion(this.region).subscribe((d:any)=>{
      // alert("Region has been saved");
      this.isSuccessful=true;
    });
 
  }


}
