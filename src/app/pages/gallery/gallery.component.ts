import { Component, inject, OnInit } from '@angular/core';
import { GalleryService } from '../../core/services/gallery/gallery.service';
import { Gallery } from '../../shared/interfaces/gallery';
import { RouterLink } from '@angular/router';
import { SearchPipe } from '../../shared/pipe/search.pipe';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-gallery',
  imports: [RouterLink , SearchPipe , FormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent implements OnInit {
  private readonly _galleryService =inject(GalleryService);

  

  gallers:Gallery[]=[];

  search:string=''
  ngOnInit(): void {
      this.getApi()
  }


  getApi():void
  {
    this._galleryService.GetApiProducts().subscribe(
      {
        next:(res)=>
        {
console.log(res);
this.gallers=res

        },
        error:(err)=>
        {
          console.log(err);
          

        }
      }
    )
  }
}
