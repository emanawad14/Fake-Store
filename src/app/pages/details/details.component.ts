import { Component, inject, OnInit } from '@angular/core';
import { GalleryService } from '../../core/services/gallery/gallery.service';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from '../../shared/interfaces/gallery';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {

  private readonly _galleryService =inject(GalleryService);
  private readonly _ActivatedRoute =inject(ActivatedRoute);


  SpecificProduct:Gallery={} as Gallery

  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe(
      {
        next:(p)=>
        {
          console.log(p);
          let IdProduct=p.get('id');
          this._galleryService.getIdProduct(IdProduct).subscribe(
            {
              next:(res)=>
              {
               console.log(res);
               this.SpecificProduct=res
              },
              error:(err)=>
              {
                console.log(err);
              }
            }
          )
          
        }
      }
    )
      
  }

  
  


}
