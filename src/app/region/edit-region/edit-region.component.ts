import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Region } from 'src/interface/region';
import { RegionService } from 'src/services/region.service';

@Component({
  selector: 'app-edit-region',
  templateUrl: './edit-region.component.html',
  styleUrls: ['./edit-region.component.scss']
})
export class EditRegionComponent implements OnInit {

  id:number=0;
  region:Region={
    id: 0,
    name: "",
  }
  isSuccessful:boolean=false;
  editRegionForm: FormGroup;
  
  constructor(private activatedRoute: ActivatedRoute, private regService:RegionService) { 
    activatedRoute.params.subscribe((d)=>{
      this.id = d['id']
    });

    this.editRegionForm= new FormGroup({
      'regionName': new FormControl(null, [Validators.required,Validators.minLength(4)]),
    });


  }

  ngOnInit(): void {
   

   
  }

  setData(){
    this.regService.getRegById(this.id).subscribe(d=>{
      
      this.editRegionForm.patchValue({
        'regionName': d.name,
      })
    })
  }


  updateRegion(){
    this.region.id = this.id;
    this.region.name =this.editRegionForm.value['regionName'];
    this.regService.updateRegion(this.region).subscribe(d=>{
      this.isSuccessful=true;
      console.log(this.region);
    })
  }

}
