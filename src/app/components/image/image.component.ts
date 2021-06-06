import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  constructor(private _imageService: ImageService) { }

  formData = new FormData();
  selectedFile: File = null;
  imageSrc: String;
  imageTest = 'file:///D:/spring/demoImgUpDown/demoImgUpDownBack/target/classes/static/image/cover-r4x3w1000-5c98c40f5bf3d-cat-3535399-1920.jpg';

  ngOnInit(): void {

  }

  onSelectFile(event) {
    console.log(event.target.files)
    this.selectedFile = event.target.files[event.target.files.length - 1] as File;
  }

  performUpload() {
    this.formData.set('file', this.selectedFile, this.selectedFile.name);
    this._imageService.uploadImage(this.formData).subscribe(
      res => {
        this.imageSrc = res;
        console.log(this.imageSrc)
      }
    )
  }



}
